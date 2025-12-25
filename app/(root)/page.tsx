import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const latestProduct = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProduct} title="جدیدترین کالاها" limit={8} />
    </>
  );
}
