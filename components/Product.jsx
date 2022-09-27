// next
import Link from 'next/link';
// lib
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div>
          <img src={urlFor(image && image[0])} width={200} height={200} />
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
