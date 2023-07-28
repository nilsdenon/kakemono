import { WordpressPost, Article, Post } from "@/types";
import omitBy from "lodash/omitBy";

const API_URL = process.env.WORDPRESS_API_URL as string;

export const fetchClient = ({
  url,
  query,
  variables = {},
}: {
  url: string;
  query: string;
  variables?: any;
}) => {
  return fetch(url, {
    method: "POST",
    next: {
      revalidate: 60, // 1 minute
    },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());
};

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export const wordpressClient = ({
  query,
  variables = {},
}: {
  query: string;
  variables?: any;
}) => {
  return fetchAPI(query, {
    variables: { variables },
  });
};

export const parsePost = (post: WordpressPost, full: boolean = false) => {
  //const url = parseUrl(post)
  //const tags = post.tags?.nodes ? parseTags(post.tags.nodes) : undefined
  //const isHighlighted = tags?.length && tags.length > 0 ? tags.map((t) => t.slug).indexOf('highlights') !== -1 : false
  //const comments =
  //  post.comments && post.comments.nodes && post.comments.nodes.length > 0 ? parseComments(post.comments.nodes) : null

  const article = {
    title: post.title,
    slug: post.slug,
    featuredImage: post.featuredImage?.node ? post.featuredImage?.node : null,
  } as Post;

  return omitBy(article, (v) => v === null || v === undefined) as Post;
};
