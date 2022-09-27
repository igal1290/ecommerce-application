// next
import Link from 'next/link';
// lib
import { urlFor } from '../lib/client';

const FooterShowcase = ({
  footerBanner: { discount, largeText2, product, buttonText, image },
}) => {
  return (
    <div>
      <div>
        <div>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
        </div>
        <div>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} width={360} height={360}></img>
      </div>
    </div>
  );
};

export default FooterShowcase;
