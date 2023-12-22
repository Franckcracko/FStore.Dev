import { useEffect, useState } from 'react'
import { getProduct } from '../api/products'
import { useParams } from 'react-router-dom'
import { useCartStore } from '../stores/useCartStore'

export const useProductFetching = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState()
  const cart = useCartStore((state) => state.cart)

  useEffect(() => {
    const getProductsFiltered = async () => {
      try {
        setIsLoading(true)
        const { data } = await getProduct(params.id)
        const productIndex = cart.findIndex((p) => p.id === data.id)
        if (productIndex > -1) {
          data.MAX_STOCK = cart[productIndex].MAX_STOCK
        }
        setProduct(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    getProductsFiltered()
  }, [params.id])

  return { isLoading, product }
}
