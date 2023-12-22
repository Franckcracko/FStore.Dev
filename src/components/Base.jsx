import { Navbar } from './navbar/Navbar'

export const Base = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='pt-16'>
        {children}
      </div>
    </>
  )
}
