// next
import Link from 'next/link';
// lib
import { urlFor } from '../lib/client';
// css
import classes from '../styles/FooterShowcase.module.css';

const FooterShowcase = ({
  footerBanner: { discount, largeText2, product, buttonText, image },
}) => {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.contentText}>
          <p className={classes.discount}>{discount}</p>
          <h3 className={classes.largeText}>{largeText2}</h3>
          <Link href={`/product/${product}`}>
            <button className={classes.btnText} type="button">
              {buttonText}
            </button>
          </Link>
        </div>
        <img src={urlFor(image)} width={280} height={280}></img>
      </div>
    </div>
  );
};

export default FooterShowcase;
