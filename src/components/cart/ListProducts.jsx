import { ItemProduct } from './ItemProduct'

export const ListProducts = ({ cart }) => {
  return (
    <ul>
      {cart.map(item => (
        <ItemProduct key={item.id} {...item} />
      ))}
    </ul>
  )
}
