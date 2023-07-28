import { getClient } from "@/lib/apolloClient";
import { Params } from "../../../../types";
import { gql } from "@apollo/client";

const query = gql`
  query getPosts {
    posts {
      edges {
        node {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              altText
              id
              slug
              sourceUrl(size: LARGE)
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export default async function SingleProjectPage({ params: { id } }: Params) {
  const client = getClient();
  const { data } = await client.query({ query, variables: { id } });

  return (
    <>
      <div>Project: {id}</div>
      <ul>
        {data.posts.edges.map((item: { node: { id: any; slug: string } }) => {
          <li key={item.node.id}>{item.node.slug}</li>;
        })}
      </ul>
    </>
  );
}
