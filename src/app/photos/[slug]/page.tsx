import getPhoto from "@/lib/getPhoto";

type Params = {
  params: {
    slug: string;
  };
};

export default async function PhotoPage({ params: { slug } }: Params) {
  const photoData: Promise<Photo> = getPhoto(slug);
  // const photoPostsData: Promise<Post[]> = getPhotoPosts(photoId)
  const photo = await photoData;

  console.log(photo);

  return (
    <h1>
      Photo page: {slug} {photo?.gallery.photo.slug}
      {photo.title}
    </h1>
  );
}
