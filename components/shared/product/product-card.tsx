import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Product } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="relative">
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            priority={true}
            className="aspect-square object-cover object-center"
          />
        </Link>
      </CardHeader>
      <CardContent className="grid px-4 py-2 gap-2">
        <span className="text-xs font-semibold opacity-60">
          {product.brand}
        </span>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-sm">{product.name}</h3>
        </Link>
        <div className="flex-between gap-2 mt-2">
          <div className=" text-yellow-500/70 flex space-x-1">
            <Star className="w-3 h-3" />
            <span className="font-semibold text-xs">
              {product.rating.toString()}
            </span>
          </div>
          {product.stock > 0 ? (
            <span className="font-semibold">
              {product.price.toLocaleString()}
              <span className="text-xs text-green-500 mr-1">تومان</span>
            </span>
          ) : (
            <Badge>ناموجود</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
