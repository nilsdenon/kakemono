type Props = {
  promise: Promise<Post[]>;
};

export default async function PhotoPost({ promise }: Props) {
  const posts = await promise;

  //const content = posts.map()
}
