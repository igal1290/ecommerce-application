// react
import { useState } from 'react';
// components
import { Product } from '../../components';
// lib
import { client, urlFor } from '../../lib/client';
// react-icons
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);

  return (
    <div className="product__details">
      <div>
        <div>
          <div>
            <img src={urlFor(image && image[index])} />
          </div>
          <div>
            {image?.map((item, i) => (
              <img
                key={item._id}
                src={urlFor(item)}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
          <div>
            <h1>{name}</h1>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p>{details}</p>
          <p>${price}</p>
          <div>
            <h3>Quantity:</h3>
            <p>
              <span>
                <AiOutlineMinus />
              </span>
              <span>0</span>
              <span>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div>
            <button type="button">Add to Cart</button>
            <button type="button">Buy Now</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Recommended for you</h2>
        <div>
          <div>
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// get static paths
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};
// get server side props
export const getStaticProps = async ({ params: { slug } }) => {
  // fetching product & products
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);
  const product = await client.fetch(query);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
