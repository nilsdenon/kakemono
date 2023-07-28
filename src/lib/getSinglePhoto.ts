export const getSinglePhoto = `query getSinglePhoto($slug: ID!) {
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
}`;
