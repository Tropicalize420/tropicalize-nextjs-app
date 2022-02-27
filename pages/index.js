import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>This is home page</h2>
      <p>... more text</p>
    </div>
  );
}
