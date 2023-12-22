import { Link } from 'react-router-dom'
import { StarIcon } from '../icons/StarIcon'
import { StarFilledIcon } from '../icons/StarFilledIcon'

export const Product = ({ product }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  return (
    <div className='w-[200px] h-[400px]' >
      <div className='overflow-hidden'>
        <Link to={`/product/${product.id}`}>
          <img className='duration-500 cursor-pointer transition-transform hover:scale-75 w-full h-[200px] object-scale-down object-center' loading='lazy' src={product.image} alt={product.title} />
        </Link>
      </div>
      <div className='p-2'>
        <h2 className='text-xs text-primary_color-400/80  line-clamp-2'>{product.title}</h2>
        <p className='text-lg font-bold text-primary_color-400'>$ {product.price}</p>
        <div className='flex items-center gap-x-1'>
          <span>{product.rating.rate}</span>
          {/* Calificar */}
          <div className='flex '>
            {
              stars.map(star => (
                product.rating.rate > star ? <StarFilledIcon className='text-blue-500 h-3 w-3' key={star} /> : <StarIcon className=' h-3 w-3' key={star} />

              ))
            }
          </div>
          <span>({product.rating.count})</span>
        </div>
      </div>
    </div>
  )
}
