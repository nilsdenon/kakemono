export default async function getPhoto(photoId: string) {
  const res = await fetch(`jsonplaceholder.typicode/users/${photoId}`);
  if (!res.ok) throw new Error("Failed to fetch photo");
  return res.json();
}
