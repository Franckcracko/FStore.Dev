import { useEffect, useState } from 'react'
import { getProducts } from '../api/products'
import { useProductsStore } from '../stores/useProductsStore'
import { useParams, useSearchParams } from 'react-router-dom'

export const useProductsFetching = () => {
  const [searchParams] = useSearchParams()

  const setProducts = useProductsStore((state) => state.setProducts)

  const findProducts = (products, query) => {
    const productsFiltered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    return productsFiltered
  }
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getProductsFiltered = async () => {
      try {
        setIsLoading(true)
        const { data } = await getProducts(params.id)
        setProducts(searchParams.has('query_search')
          ? findProducts(data, searchParams.get('query_search'))
          : data
        )
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getProductsFiltered()
  }, [params.id, searchParams])

  return { isLoading }
}
