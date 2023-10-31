import Product from "@/components/Product/product";
import supabase from "@/utils/supabase"

export const revalidate = 0;

export default async function Products({ params: { id } }) {
    const { data: products, error } = await supabase.from('products').select('').match({ id })
    console.log(products)
    return products.length ? products.map((product) => (
        <Product key={product.id} product={product}></Product>
    )) : 'Product not found.'
}