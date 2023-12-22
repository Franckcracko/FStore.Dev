import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/useCartStore'

export const Controls = ({ MAX_STOCK, initialStock = 1, id }) => {
  const updateQuantityProduct = useCartStore((state) => state.updateQuantityProduct)

  const [stock, setStock] = useState(initialStock)

  const handleAdd = () => {
    if (stock > MAX_STOCK - 1) { return }

    setStock(prevState => parseInt(prevState) + 1)
  }

  const handleMinous = () => {
    if (stock <= 1) {
      setStock(1)
      return
    }
    setStock(prevState => prevState - 1)
  }
  useEffect(() => {
    updateQuantityProduct({ id, quantity: stock })
  }, [stock])

  return (
    <div className='flex justify-between items-center max-w-[200px] '>
      <button
        onClick={handleAdd}
        className="text-black border  hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors  rounded-lg text-base py-1 w-9 text-center mr-1 shadow font-bold">
        +
      </button>
      <div className='flex-1 px-2 min-w-[50px]'>
        <input
          className='text-center w-full  outline-none appearance-none border-black border-b-2'
          type="number"
          min={1}
          value={stock}
          readOnly
        />
      </div>
      <button
        onClick={handleMinous}
        className="text-black border shadow hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 transition-colors font-bold rounded-lg text-base py-1 w-9 text-center ml-1">
        -
      </button>

    </div>
  )
}
