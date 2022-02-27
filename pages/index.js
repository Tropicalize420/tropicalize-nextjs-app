import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../context/AppProvider";
//
export default function Home({ res }) {
  //
  const { state, getProducts } = useContext(Context);
  useEffect(() => {
    getProducts();
  }, []);
  console.log("State ---> ", state);
  console.log("RES ---> ", res);
  //
  return (
    <div className={styles.container}>
      <h2>This is home page</h2>
      <p>... more text</p>
    </div>
  );
}

export async function getServerSideProps() {
  // const req = await fetch(
  //   `https://api.domainsdb.info/v1/domains/search?limit=50&domain=${params.name}&country=us`
  // );
  // const data = await req.json();
  const data = "Nothing here yet";
  return {
    props: { res: data },
  };
}
