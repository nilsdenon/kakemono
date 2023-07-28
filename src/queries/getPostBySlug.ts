import { wordpressClient } from "@/lib/wordpressClient";

export const findWordpressPost = `

query GetWordPressPost($slug: String!) {
  post: postBy(slug: $slug) {
    title
    date
    slug
    featuredImage {
      node {
        sourceUrl
        mediaDetails {
          width
          height
        }
      }
    }
  }
}
`;

export const getPostBySlug = (slug: string) => {
  return wordpressClient({
    query: findWordpressPost,
    variables: {
      slug,
    },
  }).then((result) => {
    if (!result.data.post) {
      return null;
    }
    return result.data.post;
  });
};
