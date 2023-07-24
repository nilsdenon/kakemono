const API_URL = process.env.WORDPRESS_API_URL as string;

export default async function getAllPhotos() {
  const { data } = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query getPosts {
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
      }`,
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return data;
}
