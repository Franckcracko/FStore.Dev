import { SidebarFilter } from './SidebarFilter'
import { useProductsFetching } from '../../hooks/useProductsFetching'
import { NavbarCategories } from './NavbarCategories'
import { useFilterProducts } from '../../hooks/useFilterProducts'
import { ListProducts } from './ListProducts'
import { ProductsLoading } from './ProductsLoading'

export const Home = () => {
  const { isLoading } = useProductsFetching()
  const { products } = useFilterProducts()
  return (
    <main>
      <section className='max-md:hidden mx-8 lg:mx-16 py-3 border-b border-[#808080]/20'>
        <NavbarCategories />
      </section>
      <article className='max-w-5xl mt-6 mx-auto justify-center'>
        <div className='my-5'>
          <SidebarFilter />
        </div>
        <div className='flex flex-wrap justify-center sm:justify-between gap-x-7 gap-y-4'>
          {!isLoading ? <ListProducts products={products} /> : <ProductsLoading />}
        </div>
      </article>
    </main>
  )
}
