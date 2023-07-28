import { Card } from "@/components/Card";
import { getClient } from "@/lib/apolloClient";
import { GET_POSTS } from "@/queries/getPosts";

export default async function PhotosPage() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_POSTS,
  });

  // console.log(
  //   "this:",
  //   data.posts.edges.map((item: { node: { slug: any } }) => item.node.slug)
  // );

  return (
    <article className="w-full max-w-7xl grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative gap-4">
      {data.posts.edges.map(
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
          <p key={idx}>{post.node.slug}</p>
        )
      )}
    </article>
  );
}
