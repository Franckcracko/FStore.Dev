import { Controls } from './Controls'
import { CancelIcon } from '../../components/icons/CancelIcon'
import { useCartStore } from '../../stores/useCartStore'
import { Link } from 'react-router-dom'
export const ItemProduct = ({ id, title, image, price, MAX_STOCK, quantity }) => {
  const removeProduct = useCartStore((state) => state.removeProduct)

  return (
    <li className='flex w-full gap-x-2 pr-10 relative' key={id}>
      <img className='hidden md:block w-[100px] h-[100px] object-cover' loading='lazy' src={image} alt={title} />
      <div>
        <Link to={`/product/${id}`} className='text-sm text-gray-500 line-clamp-2'>{title}</Link>
        <span className='text-lg font-bold text-gray-800'>$ {price}</span>
      </div>
      <Controls MAX_STOCK={MAX_STOCK} initialStock={quantity} id={id} />
      <button onClick={() => removeProduct(id)} className='absolute right-3 text-red-600'>
        <CancelIcon />
      </button>
    </li>
  )
}
