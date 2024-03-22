import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SelectBox from './/components/selectBox/SelectBox'
import './static/colors/Colors.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AppRouter from './config/AppRouter'



function App() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      // offset: 20
    })
  }, [])

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
