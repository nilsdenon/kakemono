import { getClient } from "@/lib/apolloClient";
import { GET_POSTS } from "@/queries/getPosts";
import Image from "next/image";

import { GET_SINGLE_PHOTO } from "@/queries/getSinglePhoto";
import BlurImage from "@/components/BlurImage";

export const revalidate = 5;

type Props = {
  params: {
    slug: string;
  };
};

export default async function PhotoPage({ params: { slug } }: Props) {
  const client = getClient();
  const { data } = await client.query({
    query: GET_SINGLE_PHOTO,
    variables: { slug },
  });

  return (
    <div className="flex flex-col w-full">
      <h1>
        Photo page: {slug}
        {/* {photo?.gallery.photo.slug}
      {photo.title} */}
      </h1>
      <p>{data?.post.id}</p>
      <ul>
        {data.post.gallery?.photo.map((item: any, i: number) => {
          return (
            <li key={i} className="flex flex-col">
              <h2 className="text-md">{item.title}</h2>
              <figure>
                {/* <Image
                  height={item.mediaDetails.height}
                  width={item.mediaDetails.width}
                  src={item.mediaItemUrl}
                  alt={item.altText}
                  priority
                  quality={95}
                  placeholder="blur"
                  blurDataURL={item.sourceUrl}
                /> */}
                <BlurImage
                  height={item.mediaDetails.height}
                  width={item.mediaDetails.width}
                  src={item.mediaItemUrl}
                />
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_POSTS,
  });
  // return data?.posts?.edges?.map(
  //   (item: { node: { id: any; slug: string } }) => item.node.slug
  // );
  return data.posts.edges.map((post: { node: { slug: any } }) => ({
    slug: post.node.slug,
  }));
}
