import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'

function App() {
  return(
    <>
   <Navbar name="NavBar props"/>
   <Navbar name=" Ruth NavBar" className="nav-bar"/>

   <Herosection />
  </>
  )
}

export default App
