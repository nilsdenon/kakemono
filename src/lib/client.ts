const API_URL = String(process.env.WP_API_URL);

export const fetchClient = async ({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 60, // 1 minute
    },
  }).then((res) => res.json());
};

export const photoClient = ({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) => {
  return fetchClient({
    query,
    variables,
  });
};
