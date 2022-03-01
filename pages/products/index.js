import React, { useRef, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Input, Button, Header, Icon, Image } from "semantic-ui-react";
import styles from "../../styles/Products.module.css";
import { Context } from "../../context/AppProvider";
import axios from "axios";
//
export default function ProductList({ res }) {
  //
  const { state, getProducts, generateCartFromStorage } = useContext(Context);
  useEffect(() => {
    getProducts(res);
    generateCartFromStorage({
      cart: {
        white: {
          _id: "61aba1622e2b3c45099951e9",
          name: "Tropicalize Silicone-Coated White Grinder",
          image:
            "https://res.cloudinary.com/alecos008/image/upload/v1635680349/White_Grinder_cm7vca.jpg",
          quantity: 0,
          type: "white",
        },
        black: {
          _id: "61aba0e02e2b3c45099951e8",
          name: "Tropicalize Silicone-Coated Black Grinder",
          image:
            "https://res.cloudinary.com/alecos008/image/upload/v1635680327/Black_Grinder_gyyzr5.jpg",
          quantity: 0,
          type: "black",
        },
        piney: {
          _id: "61dd6e6de8e6c9ece63c93ec",
          name: "Tropicalize Small Piney Bio-Grinder",
          image:
            "https://res.cloudinary.com/alecos008/image/upload/v1641850646/ALL_yklipo.png",
          quantity: 0,
          type: "piney",
        },
        tropi: {
          _id: "61dd6eeae8e6c9ece63c93ed",
          name: "Tropicalize Small Tropi Bio-Grinder",
          image:
            "https://res.cloudinary.com/alecos008/image/upload/v1641850720/All_sk8uml.png",
          quantity: 0,
          type: "tropi",
        },
      },
    });
  }, []);
  console.log("Hello from products! ---> ", state);
  //
  const input = useRef("");
  const router = useRouter();
  //
  if (state.products !== undefined) {
    //&& state.cart !== undefined
    return (
      <div className={styles.product_screen}>
        <div className={`${styles.figure_container} ${styles.mobile_hidden}`}>
          <Image
            alt="Img "
            src="https://res.cloudinary.com/alecos008/image/upload/v1642968688/Logo_copy_tc63hp.png"
            size="big"
          />
        </div>

        <div className={[styles.products_container, styles.desktop_scrollable]}>
          {state.products.map((product) => {
            return (
              <div className={styles.product_card} key={product._id}>
                <h2>{product.name}</h2>
                <div>
                  <img
                    src={product.image1}
                    className="product-img"
                    alt="Grinder"
                  />
                </div>
                <button
                  // onClick={() => addOne(state.cart, product.type)}
                  className={styles.product_btn}
                >
                  {/* {state.cart[product.type].quantity > 0
                    ? "Item added - Select Quantity in Cart"
                    : "Add Item "} */}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1
          style={{
            minHeight: "90vh",
            minWidth: "90vw",
            textAlign: "center",
            textAlignVertical: "center",
          }}
        >
          Loading ...{" "}
        </h1>
      </>
    );
  }
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
