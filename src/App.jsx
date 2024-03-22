import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import SelectBox from './/components/selectBox/SelectBox'
import './static/colors/Colors.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Slider from './components/slider/Slider'
import SliderSimple from './components/sliderSimple/SliderSimple'
import Testimonial from './components/testimonial/Testimonial'
import AppRouter from './config/AppRouter'



function App() {

  const reviews = [
    {
      id: '01'
    },
    {
      id: '02'
    },
    {
      id: '03'
    },
    {
      id: '04'
    },
    {
      id: '05'
    },
  ]


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
