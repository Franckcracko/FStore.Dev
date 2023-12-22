import { useEffect, useState } from 'react'
import { useCartStore } from '../../stores/useCartStore'
import { CartOffIcon } from '../icons/CartOffIcon'
import { Accordion } from './Accordion'
import { ListProducts } from './ListProducts'
import { PersonalDataForm } from './PersonalDataForm'
import Swal from 'sweetalert2'

const INPUTS = [
  { id: 'street', label: 'Calle', placeholder: 'Antonio Abrego', value: '' },
  { id: 'colony', label: 'Colonia', placeholder: 'La Polvorín', value: '' },
  { id: 'city', label: 'Ciudad', placeholder: 'Cd. Madero', value: '' },
  { id: 'state', label: 'Estado/Provincia', placeholder: 'Baja California', value: '' },
  { id: 'postal_code', label: 'Código postal', placeholder: '44000', value: '' },
  { id: 'country', label: 'País', placeholder: 'México', value: '' },
  { id: 'tel', label: 'Teléfono', placeholder: '55-555-5555', type: 'tel', pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}', value: '' }
]

const initialStateInputsPaymentMethod = {
  cardNameInput: { value: '' },
  cardNumberInput: { value: '' },
  cardExpirationInput: { value: '' },
  cvvInput: { value: '' }
}

export const Cart = () => {
  const cart = useCartStore((state) => state.cart)
  const resetCart = useCartStore((state) => state.resetCart)

  const [inputsDataBasic, setInputsDataBasic] = useState(INPUTS)
  const [enabled, setEnabled] = useState(false)
  const [dataPaymentMethod, setDataPaymentMethod] = useState(initialStateInputsPaymentMethod)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const handleDataPaymentMethod = (e) => {
    const { name, value } = e.target
    setDataPaymentMethod({
      ...dataPaymentMethod,
      [name]: { value }
    })
  }

  const handleBuyButton = async () => {
    await Swal.fire({
      title: 'Realizando Compra!',
      html: 'Procesando..',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: async () => {
        await Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Muchas Gracias por comprar en nuestra tienda :D',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    setInputsDataBasic(INPUTS)
    setDataPaymentMethod(initialStateInputsPaymentMethod)
    setAcceptTerms(false)
    resetCart()
  }

  useEffect(() => {
    setEnabled(
      inputsDataBasic.every((input) => input.value.length > 0) &&
      Object.values(dataPaymentMethod).every((el) => el.value.length > 0) &&
      acceptTerms &&
      cart.length >= 0
    )
  }, [inputsDataBasic, dataPaymentMethod, cart, acceptTerms])

  return (
    <main >
      <article className='md:mx-auto bg-white rounded-md max-w-2xl gap-x-4 flex flex-wrap mt-6 p-4 shadow'>
        <section className='flex-1'>`
          {cart.length > 0
            ? <>
              <Accordion open summary={'Revisar Productos'} title={1}>
                <ListProducts cart={cart} />
              </Accordion>
              <Accordion summary={'Revisar Productos'} title={2}>
                <PersonalDataForm
                  acceptTerms={acceptTerms}
                  setAcceptTerms={setAcceptTerms}
                  inputsDataBasic={inputsDataBasic}
                  setInputsDataBasic={setInputsDataBasic}
                  dataPaymentMethod={dataPaymentMethod}
                  handleDataPaymentMethod={handleDataPaymentMethod}
                />
              </Accordion>
            </>
            : <div className='h-full flex flex-col justify-center items-center pb-6 text-gray-500'>
              <CartOffIcon className='w-16 h-16' />
              <h2>No hay productos en el carrito</h2>
            </div>
          }
        </section>
        <section className='md:w-[200px] border-gray-300 border-l max-md:border-none md:p-3'>
          <div className='border-gray-300 border-b pb-2 mb-4'>
            <button
              className='disabled:bg-green-200 rounded-md text-center shadow bg-green-500 text-white font-bold w-full py-2 hover:bg-green-400 transition-colors text-sm'
              disabled={!enabled}
              onClick={handleBuyButton}
            >
              COMPRAR AHORA
            </button>
            <p className='mt-2 text-[0.5rem] text-center'>
              Al realizar tu compra, estás aceptando nuestra <a className='text-blue-500' href="#">política de privacidad</a>. Puedes revisar todos los detalles en nuestra página web o <a className='text-blue-500' href="#">contactarnos</a> si tienes alguna pregunta. Queremos que te sientas seguro/a y confiado/a al elegir
              FStore.Dev.
            </p>
          </div>
          <div className='border-gray-300 border-b pb-2 mb-4 '>
            <h2 className='mb-3 text-lg font-bold'>Resumen del Pedido</h2>
            <ul className='grid gap-y-1'>
              <li className='flex justify-between text-xs'>
                <h3 >Productos:</h3>
                <span >$ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
              </li>
              <li className='flex justify-between text-xs'>
                <h3 >Envio:</h3>
                <span >$ 19.00</span>
              </li>
              <li className='flex justify-between text-xs'>
                <h3 >Total:</h3>
                <span >$ {(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 190).toFixed(2)}</span>
              </li>
            </ul>
          </div>
          <div className=' mb-4 '>
            <h2 className='mb-3 text-lg font-bold'>Canjear Cupon</h2>
            <div className='flex gap-x-2'>
              <input type="text" aria-describedby="cupon-field" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Ingresar Cupon..." />
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
                <span className="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </section>
      </article>
      <style>
        {`
        body {
          background-color: #EDEDED;
        }
        `}
      </style>
    </main>
  )
}
