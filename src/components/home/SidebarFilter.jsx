import { useState } from 'react'
import { FilterIcon } from '../icons/FilterIcon'
import { CancelIcon } from '../icons/CancelIcon'
import { useFilterProducts } from '../../hooks/useFilterProducts'

const RadioItem = ({ title, value, onChange, checked }) => (
  <div className="flex items-center mb-4">
    <input
      type='radio'
      onChange={onChange}
      checked={checked}
      value={value}
      name="popularity-radio"
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
    />
    <label htmlFor="popularity-radio-1" className="ms-2 text-sm font-medium text-gray-900 ">{title}</label>
  </div>
)
const RADIO_ELEMENTS = [
  {
    title: 'Asc',
    value: 'asc'
  },
  {
    title: 'Desc',
    value: 'desc'
  }
]
export const SidebarFilter = () => {
  const [show, setShow] = useState(false)
  const [price, setPrice] = useState(0)
  const [popularity, setPopularity] = useState('')
  const { sortProducts, filterProducts, resetProducts } = useFilterProducts()

  const handleShowChange = () => {
    setShow(prevState => !prevState)
  }

  const handlePopularityChange = (event) => {
    setPopularity(event.target.value)
    sortProducts(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
    filterProducts(event.target.value)
  }

  const handleReset = () => {
    resetProducts()
    setPopularity('')
    setPrice(0)
  }
  return (
    <div>
      <div className='flex justify-center'>
        <button
          onClick={handleShowChange}
          className=" border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 border-primary_color-400 text-primary_color-border-primary_color-400 hover:text-white focus:ring-primary_color-600/60 hover:bg-primary_color-400"
        >
          <FilterIcon />
        </button>
      </div>
      <aside
        className={`z-50  fixed top-0 right-0 w-80 h-screen transition-transform ${show ? 'translate-x-0' : 'translate-x-full'} `} aria-label="Sidebar left">
        <div className="relative h-full px-12 py-24  bg-gray-50 ">
          <div className='absolute top-4 left-4'>
            <button
              onClick={handleShowChange}
              className=" border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 border-primary_color-400 text-primary_color-border-primary_color-400 hover:text-white focus:ring-primary_color-600/60 hover:bg-primary_color-400"
            >
              <CancelIcon />
            </button>
          </div>
          <h2 className='font-bold text-2xl'>Filtrar por:</h2>
          <ul className="mt-4 px-2 space-y-2 font-medium">
            <li>
              <h3>Precio:</h3>
              <label htmlFor="range-price" className="block text-sm font-medium text-gray-900 ">${price}</label>
              <input onChange={handlePriceChange} id="range-price" type="range" value={price} max={200} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer " />
            </li>
            <li>
              <h3>Popularidad:</h3>
              <div className='flex items-center justify-between'>
                {
                  RADIO_ELEMENTS.map(radio => (
                    <RadioItem key={radio.value} {...radio} onChange={handlePopularityChange} checked={popularity === radio.value} />
                  ))
                }
              </div>
            </li>
          </ul>
          <button className='bg-primary_color-400 text-white rounded-lg px-4 py-2' onClick={handleReset}>Reiniciar</button>
        </div>
      </aside>
    </div>
  )
}
