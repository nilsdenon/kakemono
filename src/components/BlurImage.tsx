"use client";

import Image from "next/image";
import { useState } from "react";

type BlurImageProps = {
  src: string;
  width: number;
  height: number;
  styles?: any;
  title: string;
  orientation: string;
};

export default function BlurImage({
  src,
  width,
  height,
  styles,
  title,
  orientation,
}: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <figure className={orientation}>
      <Image
        alt=""
        src={src}
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
    </figure>
  );
}
