import React, { useState } from 'react'
import './Naved.css'
import resource1 from '../../assets/imgs/resource1.png'
import resource2 from '../../assets/imgs/resource2.png'
import resource3 from '../../assets/imgs/resource3.png'
import resource4 from '../../assets/imgs/resource4.png'
import resource5 from '../../assets/imgs/resource5.png'
import resource6 from '../../assets/imgs/resource6.png'
import EastIcon from '@mui/icons-material/East';



import { Grid, Modal } from '@mui/material'

export default function ResourcesNav({ showNote }) {
    let [show, setShow] = useState(true)
    let [hovered, setHovered] = useState('');

    return (
        <>
            <Modal open={show} >
                <div className='productsNav' onClick={() => setShow(false)} style={{ top: showNote ? '100px' : '65px' }} >
                    <div className='navedContent'  >
                        <div className="productsNav-inner">
                            <div className="naved-innerBox">
                                <Grid container spacing={5}>
                                    <Grid item xs={9}>
                                        <div className="naved-heading">Resources</div>
                                    </Grid>
                                    <Grid item xs={3} />
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={resource1} alt="img6" width='100%' />
                                            <div className="naved-resource-text">Tags, plastic cards, hanging <br />  tags, wristbands</div>
                                            <div className="home-card-btnTxt ml-20">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={resource2} alt="img6" width='100%' />
                                            <div className="naved-resource-text ">restaurants, check-in hotels, <br /> Information, events, sports betting</div>
                                            <div className="home-card-btnTxt ml-20">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={resource3} alt="img6" width='100%' />
                                            <div className="naved-resource-text">Beacons, wifi, mesh 5.0</div>
                                            <div className="home-card-btnTxt ml-20">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={3} />
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={resource4} alt="img6" width='100%' />
                                            <div className="home-card-btnTxt ml-20 mm">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={resource5} alt="img6" width='100%' />
                                            <div className="home-card-btnTxt ml-20 mm ">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={resource6} alt="img6" width='100%' />
                                            <div className="home-card-btnTxt ml-20 mm">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                                        </div>
                                    </Grid>
                                </Grid>

                            </div>
                            {/* bottom bar  */}
                            <div className="productsNav-bottom">Control all your spend before it happens, all in one place. <span> Get Started</span></div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}