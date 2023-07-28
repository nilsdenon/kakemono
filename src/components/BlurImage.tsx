"use client";

import Image from "next/image";
import { useState } from "react";

type BlurImageProps = {
  src: string;
  width: number;
  height: number;
};

export default function BlurImage({ src, width, height }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <Image
        alt=""
        src={src}
        objectFit="cover"
        width={width}
        height={height}
        className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
        onLoadingComplete={() => setLoading(false)}
        priority
        quality={95}
      />
    </div>
  );
}
