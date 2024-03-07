import Image from "next/image";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";

async function getData(slug) {
  const query = `*[_type == 'post' && slug.current == "${slug}"] {
    "currentSlug": slug.current,
      title,
    mainImage,
      description,
      body,
      _createdAt
  } [0]
        
    `;
  const data = await client.fetch(query);
  return data;
}

async function BlogArticle({ params }) {
  const data = await getData(params.slug);
  console.log(data);
  return (
    <div>
      <h1>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.mainImage).url()}
        width={800}
        height={800}
        alt="title image"
        priority
        className="rounded-lg mt-8"
      />
      <div className="mt-16 prose prose-xl text-white prose-a:text-primary">
        <PortableText value={data.body} />
      </div>
    </div>
  );
}

export default BlogArticle;
