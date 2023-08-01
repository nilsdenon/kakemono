import { Card } from "@/components/Card";

import { getClient } from "@/lib/apolloClient";
import { GET_POSTS as query } from "@/queries/getPosts";

export default async function Home() {
  // const { data } = await fetch(String(process.env.WP_API_URL), {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: getPosts,
  //   }),
  //   next: { revalidate: 10 },
  // }).then((res) => res.json());
  const client = getClient();
  const { data } = await client.query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  return (
    <article className="w-full max-w-7xl grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative gap-4">
      {data?.posts?.edges?.map(
        (
          post: {
            node: {
              title: string;
              slug: string;
              featuredImage: {
                node: {
                  sourceUrl: string;
                  mediaDetails: { width: any; height: any };
                };
              };
            };
          },
          idx: number
        ) => (
          <Card
            key={idx}
            url={post.node.slug}
            title={post.node.title}
            imgUrl={post.node.featuredImage?.node.sourceUrl}
            width={post.node.featuredImage?.node.mediaDetails.width}
            height={post.node.featuredImage?.node.mediaDetails.height}
          />
        )
      )}
      <p>test</p>
    </article>
  );
}
