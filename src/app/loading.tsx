import React from "react";
import styles from "./loading.module.css";

const LoadingPage = () => {
  return (
    <div
      className={`${styles.loader} w-full h-full flex justify-center items-center bg-white`}
    >
      <div className={`${styles.cell} ${styles.d0}`}></div>
      <div className={`${styles.cell} ${styles.d1}`}></div>
      <div className={`${styles.cell} ${styles.d2}`}></div>

      <div className={`${styles.cell} ${styles.d1}`}></div>
      <div className={`${styles.cell} ${styles.d2}`}></div>

      <div className={`${styles.cell} ${styles.d2}`}></div>
      <div className={`${styles.cell} ${styles.d3}`}></div>

      <div className={`${styles.cell} ${styles.d3}`}></div>
      <div className={`${styles.cell} ${styles.d4}`}></div>
    </div>
  );
};

export default LoadingPage;
