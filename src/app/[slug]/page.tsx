interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  // const data = await getPostBySlug(slug);
  // if (!data) {
  //   notFound();
  // }

  return <div>test</div>;
}
