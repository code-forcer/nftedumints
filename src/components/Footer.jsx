import React from 'react';
import styles from '../styles/Global';

const Footer = () => {
  return (
    <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
     <strong><p className={`${styles.pText} ${styles.whiteText}`}>
       NTFEduMint.net
        by  <span onClick={() => { window.open('https://rahulkarda.netlify.app', "_blank") }} className="bold hover:cursor-pointer hover:underline">
        Codeforcer
        </span>
      </p>
        </strong>
    </div>
  );
};

export default Footer;
