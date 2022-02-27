import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContext, useEffect } from "react";
import { Context } from "../context/AppProvider";
import axios from "axios";
//
export default function Home({ res }) {
  //
  const { state, getProducts } = useContext(Context);
  useEffect(() => {
    getProducts(res);
  }, []);
  //
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
  //
  //   .get(`${process.env.REACT_APP_API_HOST}/products/all`, {
  // const data = await req.json();
  const data = await axios
    .get("http://localhost:5005/api/products/all", {
      withCredentials: true,
    })
    .then((response) => {
      console.log("Api Response From Context ---> ", response);
      return [...response.data.products];
    })
    .catch((err) => {
      console.log(err);
    });
  //
  return {
    props: { res: data },
  };
}
