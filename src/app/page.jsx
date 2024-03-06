import Image from "next/image";

// import { groq } from "next-sanity";
// import { client } from "../../lib/createClient";
import Events from "../components/events/Events";

// const queryEvent = groq`*[_type == 'event'] {
//   name,
//   date,
//   location {
//     city,
//     country,
//     venue
//   },
//   priceRange
// }`;

// const queryPost = groq`*[_type == 'post'] {
//   title,
//   description,
//   mainImage {
//     asset-> {
//       url
//     }
//   },
//   slug,
//   body
// }
// `;
// const queryAlbum = groq`*[_type == 'album'] {
//   img,
//   name,
//   tracks[] {
//     name,
//     src {
//       asset-> {
//         url
//       }
//     }
//   }
// }
// `;

export default async function Home() {
  // const events = await client.fetch(queryEvent);
  // const posts = await client.fetch(queryPost);
  // const albums = await client.fetch(queryAlbum);
  // // console.log(events);
  // // console.log(posts);
  // console.log(albums);
  return (
    <main>
      <Events />
    </main>
  );
}
