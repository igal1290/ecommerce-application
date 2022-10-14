// react
import React, { useState, useEffect } from 'react';
// next
import Link from 'next/link';
// react-icons
import { BsCart3 } from 'react-icons/bs';
// css
import classes from '../styles/Navbar.module.css';

const Navbar = () => {
  // state
  const [onScroll, setOnScroll] = useState(false);

  // on scroll handler
  const onScrollHandler = () => {
    if (window.scrollY >= 65) {
      setOnScroll(true);
    } else {
      setOnScroll(false);
    }
  };

  // scroll eventlistener
  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
  }, []);

  return (
    <nav className={onScroll ? classes.navbarScroll : classes.navbar}>
      <Link href="#">
        <h2 className={onScroll ? classes.logoScroll : classes.logo}>OTT</h2>
      </Link>
      <div className={classes.links}>
        <Link href="#">
          <p className={onScroll ? classes.linkScroll : classes.link}>Shop</p>
        </Link>
        <Link href="#">
          <p className={onScroll ? classes.linkScroll : classes.link}>About</p>
        </Link>
        <Link href="#">
          <p className={onScroll ? classes.linkScroll : classes.link}>
            Contact Us
          </p>
        </Link>
      </div>
      <button type="button" className={classes.cart}>
        <BsCart3 />
        <span className={classes.cartQuantity}>1</span>
      </button>
    </nav>
  );
};

export default Navbar;
