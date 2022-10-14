// next
import Link from 'next/link';
// lib
import { urlFor } from '../lib/client';
// css
import classes from '../styles/Hero.module.css';

const Hero = ({
  heroBanner: {
    smallText,
    midText,
    largeText1,
    product,
    buttonText,
    desc,
    image,
  },
}) => {
  return (
    <div>
      <div className={classes.showcase}>
        <div className={classes.content}>
          <h3 className={classes.midText}>{midText}</h3>
          <h1 className={classes.largeText}>{largeText1}</h1>
          <Link href={`/product/${product}`}>
            <button className={classes.btn} type="button">
              {buttonText}
            </button>
          </Link>
        </div>
        <div>
          <img src={urlFor(image)} alt="headphones" width={360} height={360} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
