import { useState } from 'react'
import { CartICon } from '../icons/CartIcon'
import { CancelIcon } from '../icons/CancelIcon'

export const PopoverCart = ({ children }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className='relative'>
      <button
        onClick={() => setHovered(prevState => !prevState)}
        type="button"
        className="max-md:hidden flex text-sm bg-transparent rounded-md focus:ring-4 focus:ring-gray-600"
      >
        <CartICon className=' h-8 w-8 text-white hover:text-gray-200' />
      </button>
      <div
        role="tooltip"
        className={`absolute right-0 mt-2 z-10  ${hovered ? 'visible opacity-100' : 'opacity-0 invisible'}  inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm `}
      >
        <button
          className="ml-2 mt-2 text-red-500 border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-1 text-center inline-flex items-center  border-red-500 text-red-border-red-500 hover:text-white focus:ring-red-600/60 hover:bg-red-500"
          onClick={() => setHovered(false)}
        ><CancelIcon className='h-4 w-4' /> </button>
        <div className='p-4'>
          {children}
        </div>
      </div>
    </div>
  )
}
