import { Link } from 'react-router-dom'
import { Product } from './Product'

export const ListProducts = ({ products = [] }) => {
  return (
    <>
      {
        products.map(product =>
          <Product product={product} key={product.id} />
        )
      }
      {
        products.length === 0 &&
        (
          <div>
            <h2>Sin productos...</h2>
            <Link className='text-blue-500 underline' to={'/'}>Regresar al incio</Link>
          </div>
        )
      }
    </>
  )
}
