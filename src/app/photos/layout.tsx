export default function PhotosLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="w-full max-w-7xl grid grid-flow-row grid-cols-1 relative gap-4">
      {children}
    </article>
  );
}
