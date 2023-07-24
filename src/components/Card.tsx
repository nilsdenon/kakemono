import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  imgUrl: string;
  width?: number;
  height?: number;
  url: string;
};

export const Card = async ({
  title,
  imgUrl,
  width,
  height,
  url,
}: CardProps) => {
  return (
    <figure className="flex relative z-0 aspect-square w-full max-h-full group bg-slate-50">
      <Image
        src={imgUrl}
        alt={title}
        width={width}
        height={height}
        quality={90}
        className="self-start object-cover w-full h-full absolute -z-1 top-0 right-0 left-0 bottom-0 group-hover:brightness-50 transition ease-in-out transform filter duration-500"
      />

      <figcaption className="w-full h-full absolute z-1 top-0 right-0 left-0 bottom-0 flex flex-col p-1 justify-center items-center">
        <h2 className="text-lg transition ease-in-out opacity scale opacity-0 group-hover:opacity-100 duration-250 scale-0 group-hover:scale-100">
          <Link
            href={`/photos/${url}`}
            className="static before:absolute before:z-1 before:top-0 before:right-0 before:bottom-0 before:left-0 block w-full h-full"
          >
            {title}
          </Link>
        </h2>
      </figcaption>
    </figure>
  );
};
