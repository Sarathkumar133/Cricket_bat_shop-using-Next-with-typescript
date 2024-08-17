import axios from 'axios';
import styles from '@/pages/styles/Cards.module.css';
import { Item } from '@/pages/types/Item';

interface CardsProps {
  item: Item;
  handleClick: (item: Item) => void;
}

const Cards: React.FC<CardsProps> = ({ item, handleClick }) => {
  const { item_id, title, price, img } = item;

  const handleAddToCart = async () => {
    try {
      await axios.post('/api/cart', {
        item_id,
        title,
        price,
        img,
        amount: 1,
      });
      handleClick(item); 
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <div className={styles.all}>
         <div className={styles.cards}>
      <div className={styles.imageBox}>
        <img  className={styles.img} src={img} alt="Image" />
      </div>
      <div className={styles.details}>
        <p>{title}</p>
        <p>Price - {price}Rs</p>
        <button className={styles.button} onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    </div>
   
  );
};

export default Cards;