import { useProductFetching } from '../../hooks/useProductFetching'
import { useCartStore } from '../../stores/useCartStore'
import { Loading } from '../Loading'
import Swal from 'sweetalert2'

const MAX_STOCK = Math.floor(Math.random() * 100)

export const Product = () => {
  const { isLoading, product } = useProductFetching()
  const maxStockProduct = product?.MAX_STOCK ?? MAX_STOCK
  const addProduct = useCartStore((state) => state.addProduct)

  const handleBuy = () => {
    addProduct({ ...product, MAX_STOCK: maxStockProduct })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Articulo agregado al carrito!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  if (isLoading && typeof product === 'undefined') return <Loading />

  return (
    <main className='grid place-content-center'>
      <article className='mt-12 max-w-[700px] max-md:px-4 md:gap-x-4 flex flex-wrap'>
        <section className='max-md:w-full flex justify-center'>
          <figure className=' w-[200px]'>
            <img
              className='object-cover w-full h-auto'
              src={product?.image}
              alt={product?.title}
            />
          </figure>
        </section>
        <section className='flex-1'>
          <header>
            <p className='text-xs text-gray-500 uppercase'>{product?.category}</p>
            <h2>{product?.title}</h2>
            <div>
              <span>{product?.rating.rate}</span>
              <span>{product?.rating.count}</span>
            </div>
          </header>
          <h3>{product?.price}</h3>
          <h4>Existencias: {maxStockProduct}</h4>
          <button
            onClick={handleBuy}
            className="text-white my-3 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-50 font-medium rounded-lg text-sm p-2 px-3 text-center inline-flex items-center"
          >
            Agregar al carrito
            <span className="sr-only">Icon description</span>
          </button>
          <p>{product?.description}</p>
        </section>
      </article>
    </main>
  )
}
