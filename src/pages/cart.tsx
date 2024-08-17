import { GetServerSideProps } from 'next';
import Cart from '@/pages/components/Cart';
import { Item } from '@/pages/types/Item';

interface CartPageProps {
  cart: Item[];
}

const CartPage = ({ cart }: CartPageProps) => {
  const handleChange = (item: Item, change: number) => {
    // Implement cart item quantity change logic
  };

  return (
    <Cart cart={cart} setCart={() => {}} handleChange={handleChange} />
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch cart data from API
  const response = await fetch('http://localhost:5000/api/cart');
  const cart = await response.json();

  return {
    props: {
      cart,
    },
  };
};

export default CartPage;