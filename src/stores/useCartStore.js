import { create } from 'zustand'
import { persist } from 'zustand/middleware'
export const useCartStore = create(persist(
  (set, get) => ({
    cart: [],
    setProducts: (products) => {
      set({ cart: products })
    },
    removeProduct: (id) => {
      set(() => ({ cart: [...get().cart.filter((product) => product.id !== id)] }))
    },
    addProduct: (product) => {
      set(() => {
        const cart = structuredClone(get().cart)
        const productIndex = cart.findIndex((p) => p.id === product.id)

        if (productIndex > -1) {
          if (cart[productIndex].quantity >= cart[productIndex].MAX_STOCK) { return { cart } }
          cart[productIndex].quantity++
          return { cart }
        }

        return { cart: [...cart, { ...product, quantity: 1 }] }
      })
    },
    updateQuantityProduct: ({ id, quantity }) => {
      set(() => {
        const cart = structuredClone(get().cart)
        const productIndex = cart.findIndex((p) => p.id === id)
        cart[productIndex] = {
          ...cart[productIndex],
          quantity: quantity > 0 ? quantity : 1
        }
        return { cart }
      })
    },
    resetCart: () => {
      set({ cart: [] })
    }
  }),
  {
    name: 'products-storage-fstore_dev'
  }
))
