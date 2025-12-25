import ProductImages from "@/components/shared/product/product-images";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* image component */}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        {/* product details */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col">
            <p className="text-sm">
              {product.brand} {product.category}
            </p>
            <h1 className="text-xl mb-4 mt-2">{product.name}</h1>
            <p className="text-xs font-semibold">
              امتیاز {product.rating.toString()} از ۵{" "}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 my-4">
              <span className="font-semibold bg-green-300 rounded-lg px-2 py-1">
                {product.price.toLocaleString()}
                <span className="text-xs mr-1">تومان</span>
              </span>
            </div>
            <div className="mt-4">
              <p className="font-semibold">توضیحات محصول:</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        {/* price card */}
        <div>
          <Card className="py-4">
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <p>قیمت محصول</p>
                <span className="font-semibold">
                  {product.price.toLocaleString()}
                  <span className="text-xs text-green-500 mr-1">تومان</span>
                </span>
              </div>
              <div className="flex justify-between items-center my-6">
                <div>موجودی کالا</div>

                {product.stock > 0 ? (
                  <Badge variant="outline" className="text-xs">
                    موجود در فروشگاه
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="text-xs">
                    ناموجود
                  </Badge>
                )}
              </div>
              <div className="flex items-center justify-center">
                {product.stock > 0 && (
                  <Button className="w-full">افزودن به سبد خرید</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
