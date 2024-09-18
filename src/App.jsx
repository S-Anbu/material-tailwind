import './App.css'
import { Cards } from './components/Cards'
import { NavbarWithSolidBackground } from './components/NavbarWithSolidBackground'

function App() {

  return (
    <>
      <div className=''>
        <NavbarWithSolidBackground />
        <div className='mt-5 px-2 grid gap-y-2  md:grid-cols-2 lg:grid-cols-3'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        </div>
      </div>
    </>
  )
}

export default App
