const API_URL = process.env.WORDPRESS_API_URL as string;

export default async function getPhoto(slug: string) {
  const { data } = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query getSinglePhoto($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          id
          title
          slug
          gallery {
            photo {
              altText
              mediaItemUrl
              link
              mediaDetails {
                width
                height
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
              slug
              title
            }
          }
        }
      }`,
      variables: {
        slug,
      },
    }),
    next: { revalidate: 10 },
  }).then((res) => res.json());
  return data;
}
