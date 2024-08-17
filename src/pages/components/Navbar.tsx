import React from 'react';
import styles from '@/pages/styles/Navbar.module.css';

interface NavbarProps {
  size: number;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ size, setShow }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBox}>
        <span className={styles.myShop} onClick={() => setShow(true)}>
          Cricketbats
        </span>
        <div className={styles.cart} onClick={() => setShow(false)}>
          <span>
          <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;