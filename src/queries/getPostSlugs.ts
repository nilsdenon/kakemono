export const PostSlugs = `
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
