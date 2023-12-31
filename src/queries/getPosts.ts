import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts {
    posts(first: 100) {
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
