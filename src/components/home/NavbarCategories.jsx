import { Link, useParams } from 'react-router-dom'
import { categories } from '../../config'

export const NavbarCategories = () => {
  const params = useParams()

  return (
    <div className='mx-auto max-w-xl'>
      <ul className='flex justify-between'>
        {
          categories.map(category => (
            <li key={category.value}>
              <Link className={`font-bold ${params.id === category.value ? 'text-primary_color-400' : 'text-primary_color-400/40'} hover:text-primary_color-400 transition duration-300`} to={`/category/${category.value}`}>{category.label}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
