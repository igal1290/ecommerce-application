// next
import Link from 'next/link';
// lib
import { urlFor } from '../lib/client';
// css
import classes from '../styles/Product.module.css';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div className={classes.item}>
      <Link href={`/product/${slug.current}`}>
        <div>
          <img src={urlFor(image && image[0])} width={220} height={220} />
          <p className={classes.itemName}>{name}</p>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
