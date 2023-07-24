import Image from "next/image";
import { Posts } from "./queries/posts";
import { Card } from "@/components/Card";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import Link from "next/link";

const API_URL = process.env.WORDPRESS_API_URL as string;

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

export default async function Home() {
  // const { data } = await fetch(API_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: `query getPosts {
  //       posts {
  //         edges {
  //           node {
  //             title
  //             excerpt
  //             slug
  //             date
  //             featuredImage {
  //               node {
  //                 altText
  //                 id
  //                 slug
  //                 sourceUrl(size: LARGE)
  //                 mediaDetails {
  //                   width
  //                   height
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }`,
  //   }),
  //   next: { revalidate: 10 },
  // }).then((res) => res.json());

  //console.log(data?.posts?.edges?.map(((post: { node: { title: any; }; }) => post.node.title)));

  const { data } = await getClient().query({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  console.log();

  const posts = data.posts.edges;

  return (
    <>
      <div>
        {posts.map(
          (post: {
            node: {
              slug: string;
              title: string;
            };
          }) => {
            return (
              <p>
                <Link href={`/photos/${post.node.slug}`}>
                  {post.node.title}
                </Link>
              </p>
            );
          }
        )}
      </div>
      {/* {data?.posts?.edges?.map(
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
      )} */}
    </>
  );
}
