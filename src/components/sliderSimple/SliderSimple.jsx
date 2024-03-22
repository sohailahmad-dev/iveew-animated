import React, { useEffect, useState } from 'react';
import img9 from '../../assets/img/img9.jpeg'
import './SliderSimple.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function SliderSimple({ slides = ['https://tse4.mm.bing.net/th?id=OIP.JHYK9aw5p3Q4kqrGAKjP8gHaEc&pid=Api&P=0&h=220', 'https://tse3.mm.bing.net/th?id=OIP.sfhCq8XCnmtjiYWp8pa5JAHaDt&pid=Api&P=0&h=220', 'https://tse1.mm.bing.net/th?id=OIP.U1fJRukK2yNbU0sT2rVdFgHaEc&pid=Api&P=0&h=220'] }) {

    let [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = () => {
        (currentSlide === (slides.length - 1)) ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
    }

    useEffect(() => {
        let interval = setInterval(changeSlide, 3000);
        return () => clearInterval(interval);
    })

    const handlePreviousSlide = () => {
        if (currentSlide === 1) {
            setCurrentSlide(slides.length)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const handleNextSlide = () => {
        if (currentSlide === slides.length) {
            setCurrentSlide(1)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }


    return (
        <>
            <div className='sliderStyle'>
                <div className='slideStyle' >
                    <img src={slides[currentSlide]} className='slide-rightImg' data-aos="fade-left" />
                    <div className="slider-arrows">
                        <div onClick={handlePreviousSlide} className='slider-arrow-left'>
                            <ArrowBackIosIcon fontSize='large' />
                        </div>
                        <div onClick={handleNextSlide} className='slider-arrow-right'>
                            <ArrowForwardIosIcon fontSize='large' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

