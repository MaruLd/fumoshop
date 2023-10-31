import Products from "./products/page"
import AddProductForm from "./products/create"

export const revalidate = 0;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 justify-start ">
      <Products></Products>
      <div>
        <AddProductForm />
      </div>
    </main>
  )
}
