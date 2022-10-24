// next
import Head from 'next/head';
// components
import { Navbar, Footer } from '../components';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Over The Top | Sneakers Ecommerce Website</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
