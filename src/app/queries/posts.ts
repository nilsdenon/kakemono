export const Posts = `
query getPosts {
  posts {
    edges {
      node {
        title
        excerpt
        slug
        date
      }
    }
  }
}
`