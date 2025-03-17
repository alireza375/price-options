import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold'>Vite + React</h1>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
