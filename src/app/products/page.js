import Product from "@/components/Product/product";
import supabase from "@/utils/supabase"
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0;

export default async function Products() {
  const { data: products, error } = await supabase.from('products').select('')

  if (!products) {
    return notFound()
  }
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 text-slate-900 my-auto py-8">
    {products.length?products.map((product) => (
        <Product key={product.id} product={product}></Product>
      )):'No Products found.'}
    </div>
  );
}
