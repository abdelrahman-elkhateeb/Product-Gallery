import ProductCard from "@/components/ProductCard";
import { getProducts } from "./services/ServiceProduct";

export default async function Home() {
  const { products, error } = await getProducts();

  if (error) return <div>Error loading products</div>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  );
}
