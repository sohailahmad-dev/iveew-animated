import React from 'react'
import EastIcon from '@mui/icons-material/East';

export default function Card1({ img, heading }) {
    return (
        <div>
            <img src={img} alt="img6" width='100%' />
            <div className='home-card1-heading'>{heading}</div>
            <div className="home-card1-content">Get the only complete financial stack designed to help start and scale your business.</div>
            <div className="home-card-btnTxt">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
        </div>
    )
}
