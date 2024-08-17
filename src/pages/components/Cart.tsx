import React, { useState, useEffect } from 'react';
import styles from '@/pages/styles/Cart.module.css';
import { Item } from '@/pages/types/Item';

interface CartProps {
  cart: Item[];
  setCart: React.Dispatch<React.SetStateAction<Item[]>>;
  handleChange: (item: Item, change: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);

  const handlePrice = () => {
    const totalAmount = cart.reduce((acc, item) => acc + (item.amount || 1) * item.price, 0);
    const totalDiscount = evaluateRules(cart);
    setDiscount(totalDiscount);
    setPrice(totalAmount - totalDiscount);
  };

  const handleRemove = async (item_id: number) => {
    try {
      await fetch(`/api/cart/${item_id}`, {
        method: 'DELETE',
      });

      const updatedCart = cart.filter(item => item.id !== item_id);
      setCart(updatedCart);

      handlePrice();
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  const handleQuantityChange = async (item: Item, change: number) => {
    const newAmount = (item.amount || 1) + change;

    if (newAmount < 1) return;

    try {
      await fetch(`/api/cart/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: newAmount }),
      });

      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, amount: newAmount }
          : cartItem
      );
      setCart(updatedCart);

      handlePrice();
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  const evaluateRules = (cart: Item[]): number => {
    let discount = 0;
    const totalAmount = cart.reduce((acc, item) => acc + (item.amount || 1) * item.price, 0);
    const totalQuantity = cart.reduce((acc, item) => acc + (item.amount || 1), 0);

    const rules = [
      {
        condition: totalQuantity >= 3,
        discount: 3000, // Discount if total quantity is more than 3
      }
    ];

    rules.forEach(rule => {
      if (rule.condition) {
        discount += rule.discount;
      }
    });

    return discount;
  };

  return (
    <article className={styles.article}>
      {cart?.map(item => (
        <div className={styles.cartBox} key={item.id}>
          <div className={styles.cartImg}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button className={styles.button2} onClick={() => handleChange(item, -1)}> -</button>
            <button className={styles.button3}>{item.amount || 1}</button>
            <button className={styles.button2} onClick={() => handleChange(item, +1)}> + </button>
          </div>
          <div>
            <span className={styles.price1}>{item.price}</span>
            <button className={styles.button4} onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <span>Total Price of your Cart</span>
        <span>Rs-{price}</span>
      </div>
      <div className={styles.discount}>
        <span>Discount Applied</span>
        <span>Rs-{discount}</span>
      </div>
      <div className={styles.finalAmount}>
        <span>Final Amount</span>
        <span>Rs-{price - discount}</span>
      </div>
    </article>
  );
};

export default Cart;