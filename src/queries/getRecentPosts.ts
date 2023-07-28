import { wordpressClient } from "@/lib/wordpressClient";

export const findWordpressPosts = `
query GetWordPressRecentPosts($where: RootQueryToPostConnectionWhereArgs) {
  posts(first: 1000, where: $where) {
    nodes {
      title
      slug
      date
    }
  }
}`;

export const getRecentPosts = async () => {
  return wordpressClient({
    query: findWordpressPosts,
    variables: {},
  }).then((result) => {
    if (!result.data.posts) {
      return null;
    }
    return result.data.posts;
  });
};
