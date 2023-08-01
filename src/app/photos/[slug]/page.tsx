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
      <div className="grid grid-flow-dense gap-[30px] responsive-grid">
        {data.post.gallery?.photo.map((item: any, i: number) => {
          const orientation =
            item.mediaDetails.height < item.mediaDetails.width
              ? "landscape"
              : "portrait";

          return (
            <BlurImage
              key={i}
              orientation={orientation}
              title={item.title}
              height={item.mediaDetails.height}
              width={item.mediaDetails.width}
              src={item.mediaItemUrl}
            />
          );
        })}
      </div>
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
