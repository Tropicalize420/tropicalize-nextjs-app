import React, { useRef, useContext } from "react";
import { useRouter } from "next/router";
import { Input, Button, Header, Icon, Segment } from "semantic-ui-react";
import styles from "../../styles/Products.module.css";
import { Context } from "../../context/AppProvider";
//
export default function ProductList() {
  //
  const { state } = useContext(Context);
  console.log('Hello from products! Heres the state I have from context ---> ',state)
  const input = useRef("");
  const router = useRouter();
  //
  return (
    <div className={styles.container}>
      <Header as="h2">
        <Icon name="search" style={{ backgroundColor: '#FF4C9D"' }} />
        <Header.Content>
          Search
          <Header.Subheader>For Products</Header.Subheader>
        </Header.Content>
      </Header>

      <Input
        // fluid
        style={{ maxWidth: "50%" }}
        focus
        placeholder="Search..."
        onChange={(e) => {
          input.current = e.target.value;
        }}
      />
      <Button
        // fluid
        style={{
          margin: "1rem 0",
          backgroundColor: "#FF4C9D",
          color: "white",
          maxWidth: "50%",
        }}
        onClick={() => {
          router.push(`/domains/${input.current}`);
        }}
      >
        Search
      </Button>
      <div className={styles.img}>
        {/* <Image src="/1.png" alt="me" width={1000} height={500} /> */}
      </div>
    </div>
  );
}
