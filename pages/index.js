// components
import { Product, FooterShowcase, Hero } from '../components';
// lib
import { client } from '../lib/client';

const HomePage = ({ products, bannerData }) => {
  return (
    <>
      <Hero heroBanner={bannerData.length && bannerData[0]} />
      <div>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterShowcase footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

// get server side props
export const getServerSideProps = async () => {
  // fetching product
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  // fetching banner
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default HomePage;
