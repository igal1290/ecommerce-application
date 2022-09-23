// next
import Link from 'next/link';
// lib
import { urlFor } from '../lib/client';
// css
import classes from '../styles/Hero.module.css';

const Hero = ({ heroBanner }) => {
  return (
    <div>
      <div className={classes.showcase}>
        <div className={classes.content}>
          <p className={classes.smallText}>{heroBanner.smallText}</p>
          <h3 className={classes.midText}>{heroBanner.midText}</h3>
          <h1 className={classes.largeText}>{heroBanner.largeText1}</h1>
          <Link href={`/product/${heroBanner.product}`}>
            <button className={classes.btn} type="button">
              {heroBanner.buttonText}
            </button>
          </Link>
          <div>
            <p className={classes.desc}>{heroBanner.desc}</p>
          </div>
        </div>
        <div>
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
