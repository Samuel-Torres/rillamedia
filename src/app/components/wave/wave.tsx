import React from "react";
import styles from "./styles.module.scss";

const Wave = () => {
  return (
    <div className={styles.container}>
      <svg
        className={styles.svg}
        viewBox="0 0 500 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          width="100vw"
          className={styles.path}
          d="M0 100 Q125 150 250 100 T500 100 V0 H0 Z"
          fill="#191919"
        />
      </svg>
    </div>
  );
};

export default Wave;
