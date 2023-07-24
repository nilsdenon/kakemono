import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="sticky z-10 left-0 top-0 flex w-full justify-center bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit p-4 lg:dark:bg-zinc-800/30 mb-4 gap-4">
      <Link href="/">Home</Link>
      <Link href="/photos">Photos</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};
