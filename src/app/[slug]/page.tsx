import { getPostBySlug } from "@/queries/getPostBySlug";
import { getRecentPosts } from "@/queries/getRecentPosts";
import { notFound } from "next/navigation";

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

// export async function generateStaticParams() {
//   const { data } = await getRecentPosts({
//    data
//   })

//   return data
//     .map((data) => ({
//       slug: data.slug,
//     }))
//     .concat({ slug: 'about' }, { slug: 'now' })
// }
