import ProductSkeleton from "@/components/ProductSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Loading Gallery...</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </main>
  )
}
