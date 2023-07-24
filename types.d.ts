type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Photo = {
  id: string;
  title?: string;
  slug: string;
  gallery: {
    photo: {
      altText: string;
      mediaItemUrl: string;
      link: string;
      mediaDetails: {
        width: number;
        height: number;
        sizes: {
          sourceUrl: string;
          width: number;
          height: number;
        };
      };
      slug: string;
    };
  };
};
