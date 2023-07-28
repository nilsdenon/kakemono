import { fetchAPI } from "@/app/api/client";

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
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
  `,
    {
      variables: {},
    }
  );

  return data?.posts;
}
