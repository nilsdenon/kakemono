import { gql } from "@apollo/client";

export const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      slug
      gallery {
        photo {
          altText
          mediaItemUrl
          link
          sourceUrl(size: THUMBNAIL)
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
  }
`;
