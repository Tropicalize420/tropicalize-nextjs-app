import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Input, Button, Header, Icon, Segment } from "semantic-ui-react";
import styles from "../../styles/Domains.module.css"; 
//
export default function  DomainList() {
  //
  const input = useRef("");
  const router = useRouter();
  //
  return (
    <div className={styles.container}>
      <Header as="h2">
        <Icon name="settings" />
        <Header.Content>
          Search
          <Header.Subheader>For Domains</Header.Subheader>
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
          backgroundColor: "#FFBD59",
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