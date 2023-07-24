import getAllPhotos from "@/lib/getAllPhotos";

export default async function PhotosPage() {
  const photosData: Promise<Photo> = getAllPhotos();
  const photos = await photosData;

  return (
    <>
      <h1>Photos page</h1>
      {console.log(photos)}
    </>
  );
}
