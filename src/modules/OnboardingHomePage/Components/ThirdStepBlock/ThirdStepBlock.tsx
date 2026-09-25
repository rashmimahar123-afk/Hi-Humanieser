import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ThirdStepBlock.module.css";

function ThirdStepBlock() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Step 3 - Get Stuck In</h2>

      <p className={styles.subtitle}>
        Hi Humaniser! works through practice. Try the micro-actions, use your
        team ritual and add reflections along the way. Come back to notice
        what’s shifting and build on what you learn.
      </p>
    </section>
  );
}
export default ThirdStepBlock;
