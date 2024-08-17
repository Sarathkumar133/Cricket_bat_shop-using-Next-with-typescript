import { useState, useEffect } from 'react';
import Navbar from '@/pages/components/Navbar';
import Amazon from '@/pages/components/Amazon';
import Cart from '@/pages/components/Cart';
import { Item } from '@/pages/types/Item';

const Home = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState<Item[]>([]);
  const [warning, setWarning] = useState<boolean>(false);
  const [dataList, setDataList] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/items');
        const data = await response.json();
        setDataList(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleClick = (item: Item) => {
    const isPresent = cart.some(product => item.id === product.id);
    if (isPresent) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    setCart(prevCart => [...prevCart, { ...item, amount: 1 }]);
  };

  const handleChange = (item: Item, delta: number) => {
    setCart(prevCart => {
      return prevCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, amount: Math.max((cartItem.amount || 1) + delta, 1) }
          : cartItem
      );
    });
  };

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} dataList={dataList} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && <div className='warning'>Item is already added to your cart</div>}
    </>
  );
};

export default Home;