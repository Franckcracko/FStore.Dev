import { useState } from 'react'
import { SearchIcon } from '../icons/SearchIcon'
import { HomeIcon } from '../icons/HomeIcon'
import { Link, useNavigate } from 'react-router-dom'
import { CartICon } from '../icons/CartIcon'
import { categories } from '../../config'

export const Navbar = () => {
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)
  const [valueSearch, setValueSearch] = useState('')

  const handleSearch = () => {
    if (valueSearch.length <= 0) {
      return navigate('/')
    }
    navigate(`/?query_search=${valueSearch}`)
  }

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-primary_color-600 border-primary_color-400">
        <div className="px-3 py-3 lg:px-12 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={() => setShow(prevState => !prevState)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link to='/' className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">FStore.Dev</span>
              </Link>
            </div>
            <div className={`${active ? 'ring-2 ring-gray-400' : ''} max-md:hidden min-w-[200px] lg:min-w-[400px] rounded-md p-2 pl-3 flex bg-white`}>
              <input
                type="text"
                placeholder='Buscar...'
                value={valueSearch}
                onChange={(e) => setValueSearch(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className='outline-none appearance-none flex-1'
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
              />
              <button onClick={handleSearch} className='flex  border-l pl-3 pr-2 text-center'>
                <SearchIcon className=' h-[24px]' />
              </button>
            </div>
            <div className="flex items-center gap-x-6">
              <Link
                to={'/cart'}
                className="max-md:hidden flex text-sm bg-transparent rounded-md focus:ring-4 focus:ring-gray-600"
              >
                <CartICon className=' h-8 w-8 text-white hover:text-gray-200' />
              </Link>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <aside className={`bg-primary_color-600 border-primary_color-400 fixed md:hidden top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  border-r  ${show ? 'translate-x-0' : '-translate-x-full'} `} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-primary_color-600 ">
          <ul className="space-y-2 font-medium pt-4">
            <li>
              <div className='w-full flex gap-x-2 px-2'>
                <input
                  type="text"
                  placeholder='Buscar...'
                  value={valueSearch}
                  onChange={(e) => setValueSearch(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className='max-w-[150px] p-1 rounded-md flex-1 ring-4 appearance-none outline-none ring-gray-400 '
                  onFocus={() => setActive(true)}
                  onBlur={() => setActive(false)}
                />
                <button onClick={handleSearch} className='flex bg-blue-500  text-white p-2 rounded text-center'>
                  <SearchIcon className=' h-[24px]' />
                </button>
              </div>
            </li>
            <li>
              <Link to="/" className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group">
                <HomeIcon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Inicio</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/cart'}
                className="flex items-center p-2  rounded-lg text-white  hover:bg-gray-700 group"
              >
                <CartICon className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                <span className="ms-3">Carrito</span>
              </Link>
            </li>
            <li>
              <div className='p-2  border-gray-600 border-t'>
                <h2 className='mb-3 text-lg font-bold text-white'>Categorias</h2>
                <ul className='ms-2 grid gap-y-2'>
                  {categories.map(category => (
                    <li key={category.value}>
                      <Link className={' text-sm   text-white  '} to={`/category/${category.value}`}>{category.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>

    </div>
  )
}
