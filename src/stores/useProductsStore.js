import { create } from 'zustand'

export const useProductsStore = create((set) => ({
  initialProducts: [],
  products: [],
  setProducts: (products) => {
    set({ initialProducts: products, products })
  },
  sortProducts: (sort) => {
    set((state) => {
      const products = [...state.initialProducts]
      const SORT_ACTIONS = {
        asc: (a, b) => a.price - b.price,
        desc: (a, b) => b.price - a.price
      }

      if (!SORT_ACTIONS[sort]) return { products }

      const productsSorted = products.sort(SORT_ACTIONS[sort])
      return { products: productsSorted }
    })
  },
  filterProducts: (max) => {
    set((state) => {
      const products = [...state.initialProducts]
      const productsFiltered = products.filter((product) => product.price <= max)
      return { products: productsFiltered }
    })
  },
  resetProducts: () => {
    set((state) => ({ products: state.initialProducts }))
  }
}))
