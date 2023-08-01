export default function PhotosLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="w-full grid grid-flow-row grid-cols-1 relative gap-[30px]">
      {children}
    </article>
  );
}
