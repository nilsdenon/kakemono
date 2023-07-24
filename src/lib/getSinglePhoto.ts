type Props = {
  slug: string;
};

export async function getSinglePhoto(slug: Props) {
  const query = {
    query: `query getSinglePost {
      post(id: "${slug}", idType: SLUG) {
        id
        content
        slug
      }
    }`,
  };
}
