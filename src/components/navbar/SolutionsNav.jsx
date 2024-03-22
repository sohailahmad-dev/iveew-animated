import React, { useState } from 'react'
import './Naved.css'
import img6 from '../../assets/imgs/img6.png'
import img7 from '../../assets/imgs/img7.png'
import img8 from '../../assets/imgs/img8.png'

import { Grid, Modal } from '@mui/material'

export default function SolutionsNav({ showNote }) {
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
                                        <div className="naved-heading">Solutions</div>
                                    </Grid>
                                    <Grid item xs={3} />
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={img6} alt="img6" width='100%' />
                                            <div className="naved-solution-text">SMB - Starting with 1-10 locations</div>
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={img7} alt="img6" width='100%' />
                                            <div className="naved-solution-text">SME -Multi -Loc - Starting  11 -30 <br /> locations</div>
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-solution-card">
                                            <img src={img8} alt="img6" width='100%' />
                                            <div className="naved-solution-text">Enterprise - 31 -+ Locations</div>
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