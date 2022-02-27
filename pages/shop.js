import React from "react";

function shop({ articles }) {
  console.log(articles);
  return (
    <div>
      <h2>Here is your shop</h2>
      <p>... more text</p>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=4`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default shop;
