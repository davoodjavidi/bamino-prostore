"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center aspect-square hover:scale-101 transition-transform duration-200"
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrrent(index)}
            className={cn(
              "border rounded-md cursor-pointer hover:border-orange-500",
              current === index && "border-orange-500"
            )}
          >
            <Image
              src={image}
              alt="image"
              width={100}
              height={100}
              className="aspect-square object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
