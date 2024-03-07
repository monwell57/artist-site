import { client } from "../../lib/sanity";
import React from "react";

async function getPosts() {
  const query = `*[_type == 'post'] | order(_createdAt desc) {
        title, 
        description,
        "currentSlug": slug.current
      }`;
  const data = await client.fetch(query);
  return data;
}

const Postpage = async () => {
  const data = await getPosts();
  console.log("[Postpage]:", data);
  return <div>page</div>;
};

export default Postpage;
