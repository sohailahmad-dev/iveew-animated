import { Grid } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';


export const CardRight = ({ img, heading, content }) => {
    return (
        <div className='card-marginT'>
            <div>
                <Grid container spacing={5}>
                    <Grid item sm={6} xs={12}>
                        <div className="home-card-data">
                            <div className="home-card-heading">{heading}</div>
                            <div className="home-card-content">{content}</div>
                            <div className="home-card-btnTxt">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                        </div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={img} alt="img" width='100%' data-aos="fade-left" />
                    </Grid>
                </Grid >
            </div>
        </div>
    )
}
