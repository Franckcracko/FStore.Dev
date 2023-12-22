import { StoreIcon } from '../icons/StoreIcon'

const Input = ({ id, label, placeholder, required = false, type = 'text', setValue, value }) => {
  const handleInput = (e) => {
    setValue(prevState => {
      const newState = prevState.map(el => el.id === id ? { ...el, value: e.target.value } : el)
      return newState
    })
  }
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 ">{label}</label>
      <input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} onChange={handleInput} value={value} required={required} />
    </div>
  )
}
export const PersonalDataForm = ({
  inputsDataBasic,
  setInputsDataBasic,
  dataPaymentMethod,
  handleDataPaymentMethod,
  acceptTerms,
  setAcceptTerms
}) => {
  return (
    <form >
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        {inputsDataBasic.map(input => <Input key={input.id} {...input} setValue={setInputsDataBasic} />)}
      </div>

      <div>
        <h2 className="mb-4 text-lg font-bold">Metodo de Pago</h2>
        <div className="relative">
          <label htmlFor="card-name-input" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre Propietario de la Tarjeta</label>
          <input type="text" id="card-name-input" name='cardNameInput' value={dataPaymentMethod.cardNameInput.value} onChange={handleDataPaymentMethod} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  " placeholder="Francisco Jv." required />
        </div>
        <div className="relative">
          <label htmlFor="card-number-input" className="block mb-2 text-sm font-medium text-gray-900 ">Numero de Tarjeta</label>
          <input type="text" id="card-number-input" name='cardNumberInput' value={dataPaymentMethod.cardNumberInput.value} onChange={handleDataPaymentMethod} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  " placeholder="4242 4242 4242 4242" pattern="^4[0-9]{12}(?:[0-9]{3})?$" required />
          <div className="absolute -inset-y-8 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg fill="none" className="h-6 text-[#1434CB] " viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z" /></svg>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="relative max-w-sm col-span-2">
            <label htmlFor="card-expiration-input" className="block mb-2 text-sm font-medium text-gray-900 ">Fecha de expiración</label>
            <div className="absolute inset-y-12 start-0 flex items-center ps-3.5 pointer-events-none">
              <StoreIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input id="card-expiration-input" name='cardExpirationInput' value={dataPaymentMethod.cardExpirationInput.value} onChange={handleDataPaymentMethod} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 " placeholder="12/23" required />
          </div>
          <div className="col-span-1">
            <label htmlFor="cvv-input" className="block mb-2 text-sm font-medium text-gray-900 ">CVV</label>
            <input type="number" id="cvv-input" name='cvvInput' value={dataPaymentMethod.cvvInput.value} onChange={handleDataPaymentMethod} min="100" max="999" pattern="[0-9]{3}" title="3 dígitos" inputMode="numeric" maxLength="3" aria-label="CVV" aria-labelledby="cvv-label" aria-invalid="false" aria-required="true" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="CVV" required />
          </div>
        </div>
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(prevState => !prevState)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Estoy de acuerdo con los  <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">términos y condiciones</a>.</label>
      </div>
    </form>

  )
}
