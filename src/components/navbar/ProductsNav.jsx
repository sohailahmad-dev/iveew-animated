import React, { useState } from 'react'
import './Naved.css'
import icon1 from '../../assets/imgs/icon1.png'
import icon2 from '../../assets/imgs/icon2.png'
import icon3 from '../../assets/imgs/icon3.png'
import icon4 from '../../assets/imgs/icon4.png'
import icon5 from '../../assets/imgs/icon5.png'
import icon6 from '../../assets/imgs/icon6.png'
import icon7 from '../../assets/imgs/icon7.png'
import icon8 from '../../assets/imgs/icon8.png'
import icon9 from '../../assets/imgs/icon9.png'
import icon10 from '../../assets/imgs/icon10.png'
import icon11 from '../../assets/imgs/icon11.png'
import icon12 from '../../assets/imgs/icon12.png'
import icon13 from '../../assets/imgs/icon13.png'
import icon14 from '../../assets/imgs/icon14.png'
import icon15 from '../../assets/imgs/icon15.png'
import icon16 from '../../assets/imgs/icon16.png'
import icon17 from '../../assets/imgs/icon17.png'
import icon18 from '../../assets/imgs/icon18.png'
import active1 from '../../assets/imgs/active1.png'
import active2 from '../../assets/imgs/active2.png'
import active3 from '../../assets/imgs/active3.png'
import active4 from '../../assets/imgs/active4.png'
import active5 from '../../assets/imgs/active5.png'
import active6 from '../../assets/imgs/active6.png'
import active7 from '../../assets/imgs/active7.png'
import active8 from '../../assets/imgs/active8.png'
import active9 from '../../assets/imgs/active9.png'
import active10 from '../../assets/imgs/active10.png'
import active11 from '../../assets/imgs/active11.png'
import active12 from '../../assets/imgs/active12.png'
import active13 from '../../assets/imgs/active13.png'
import active14 from '../../assets/imgs/active14.png'
import active15 from '../../assets/imgs/active15.png'
import active16 from '../../assets/imgs/active16.png'
import active17 from '../../assets/imgs/active17.png'
import active18 from '../../assets/imgs/active18.png'
import { Grid, Modal } from '@mui/material'

export default function ProductsNav({ showNote }) {
    let [show, setShow] = useState(true)
    let [hovered, setHovered] = useState('');
    const data1 = [
        {
            icon: icon1,
            active: active1,
            label: 'Geo Fence'
        },
        {
            icon: icon2,
            active: active2,
            label: 'Personalization'
        },
        {
            icon: icon3,
            active: active3,
            label: 'Reputation Management'
        },
        {
            icon: icon4,
            active: active4,
            label: 'Message-360'
        },
        {
            icon: icon5,
            active: active5,
            label: 'Message - Segmentation'
        },
        {
            icon: icon6,
            active: active6,
            label: 'Bhast-M'
        },
    ]
    const data2 = [
        {
            icon: icon7,
            active: active7,
            label: 'Chatbot AI'
        },
        {
            icon: icon8,
            active: active8,
            label: 'Booking Engine-Script'
        },

        {
            icon: icon9,
            active: active9,
            label: 'Customer Recognition'
        },
        {
            icon: icon10,
            active: active10,
            label: 'Loyality Integration'
        },
        {
            icon: icon11,
            active: active11,
            label: 'Voucher & Gift Cards'
        },
        {
            icon: icon12,
            active: active12,
            label: 'Event Messaging'
        },
    ]
    const data3 = [
        {
            icon: icon13,
            active: active13,
            label: 'Messaging',
        },
        {
            icon: icon14,
            active: active14,
            label: 'Confirmation & Vouchers',
        },
        {
            icon: icon15,
            active: active15,
            label: 'Merchandising',
        },
        {
            icon: icon16,
            active: active16,
            label: 'Business - Wait Times',
        },
        {
            icon: icon17,
            active: active17,
            label: 'RFID - Making',
        },
        {
            icon: icon18,
            active: active18,
            label: 'QR Platform',
        },

    ]
    return (
        <>
            <Modal open={show}>
                <div className='productsNav' onClick={() => setShow(false)} style={{ top: showNote ? '100px' : '65px' }} >
                    <div className='navedContent'  >
                        <div className="productsNav-inner">
                            <div className="naved-innerBox">
                                <Grid container spacing={2}>
                                    <Grid item sm={5} xs={10}>
                                        <div className="naved-heading">Applications</div>
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid item sm={2} xs={10}>
                                        <div className="naved-heading-desktop">Platform</div>
                                    </Grid>
                                    <Grid item sm={4} xs={12} />
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-items">
                                            {data1.map(item => (
                                                <div className="naved-item" key={item.label} onMouseEnter={() => setHovered(item.label)}>
                                                    <div className="naved-img-box">
                                                        {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                            <img src={item.icon} alt="img" />}
                                                    </div>
                                                    <div className="naved-item-label">{item.label}</div>

                                                </div>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-items">
                                            {data2.map(item => (
                                                <div className="naved-item" key={item.label} onMouseEnter={() => setHovered(item.label)}>
                                                    <div className="naved-img-box">
                                                        {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                            <img src={item.icon} alt="img" />}
                                                    </div>
                                                    <div className="naved-item-label">{item.label}</div>

                                                </div>
                                            ))}
                                        </div>
                                    </Grid>
                                    <Grid item sm={3} xs={12}>
                                        <div className="naved-items">
                                            {data3.map(item => (
                                                <div className="naved-item" key={item.label} onMouseEnter={() => setHovered(item.label)}>
                                                    <div className="naved-img-box">
                                                        {hovered === item.label ? <img src={item.active} alt="img" /> :
                                                            <img src={item.icon} alt="img" />}
                                                    </div>
                                                    <div className="naved-item-label">{item.label}</div>

                                                </div>
                                            ))}
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