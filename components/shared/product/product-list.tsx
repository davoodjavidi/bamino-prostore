import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-2">
      <h4 className="text-xl mb-4">{title}</h4>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: Product) => (
            <ProductCard product={product} key={product.slug} />
          ))}
        </div>
      ) : (
        <p>محصولی یافت نشد</p>
      )}
    </div>
  );
};

export default ProductList;
