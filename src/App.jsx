import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter basename="/">
      <Routes >
        <Route path="/" element={<main ><h1 className='text-2xl'>Hello</h1></main>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
