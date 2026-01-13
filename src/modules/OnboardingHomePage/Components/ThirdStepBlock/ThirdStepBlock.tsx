import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ThirdStepBlock.module.css";

function ThirdStepBlock() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Step 3 - Get Stuck In</h2>

      <p className={styles.subtitle}>
        This is where the real change begins. Try out your micro-actions, join
        your team ritual, and add your reflections along the way. The more you
        practise, the more Hi Humaniser! becomes part of everyday work.
      </p>
    </section>
  );
}
export default ThirdStepBlock;
