import { useProductsStore } from '../stores/useProductsStore'

export const useFilterProducts = () => {
  const products = useProductsStore((state) => state.products)
  const sortProducts = useProductsStore((state) => state.sortProducts)
  const filterProducts = useProductsStore((state) => state.filterProducts)
  const resetProducts = useProductsStore((state) => state.resetProducts)

  return { products, sortProducts, filterProducts, resetProducts }
}
