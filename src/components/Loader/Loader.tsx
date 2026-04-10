import React from "react";
import styles from "./Loader.module.css";
import Image from "next/image";
import images from "@/src/assets/images";

function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
