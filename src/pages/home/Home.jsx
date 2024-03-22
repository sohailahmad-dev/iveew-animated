import React, { useRef, useState } from 'react';
import './Home.css';
import NavBar from '../../components/navbar/Navbar';
import { Grid } from '@mui/material';
import Btn from '../../components/btn/Btn';
import CheckIcon from '@mui/icons-material/Check';
import companies from '../../assets/imgs/companies.png';
import companies1 from '../../assets/imgs/companies1.png';
import img1 from '../../assets/imgs/img1.png';
import img2 from '../../assets/imgs/img2.png';
import img3 from '../../assets/imgs/img3.png';
import img4 from '../../assets/imgs/img4.png';
import img5 from '../../assets/imgs/img5.png';
import img6 from '../../assets/imgs/img6.png';
import img7 from '../../assets/imgs/img7.png';
import img8 from '../../assets/imgs/img8.png';
import img9 from '../../assets/imgs/img9.png';
import img10 from '../../assets/imgs/img10.png';
import img11 from '../../assets/imgs/img11.png';
import img12 from '../../assets/imgs/img12.png';
import img13 from '../../assets/imgs/img13.png';
import img14 from '../../assets/imgs/img14.png';
import img15 from '../../assets/imgs/img15.png';
import img16 from '../../assets/imgs/img16.png';
import img21 from '../../assets/imgs/img21.png';
import img22 from '../../assets/imgs/img22.png';
import img23 from '../../assets/imgs/img23.png';
import img24 from '../../assets/imgs/img24.png';
import prev from '../../assets/imgs/prev.png';
import next from '../../assets/imgs/next.png';
import { CardLeft } from './CardLeft';
import Card1 from './Card1';
import { CardRight } from './CardRight';
import EastIcon from '@mui/icons-material/East';
import PricingCard from './PricingCard';
import Footer from '../../components/footer/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from 'typewriter-effect'

export default function Home() {
    let [hideModal, setHideModal] = useState(true)
    const bannerFacilities = ['Messaging', 'Merchandising', 'Market Segmentation', 'Personalization', 'Wallet Booking & Communication', 'QR Code Generator', 'Chatbot AI', 'Loyalty', 'GeoFencing', 'Customer Recognition', 'Vouchers & Gift Cards', 'Inspirations', 'Asset Tracking', 'RFID Platforms']
    const pricingData = [{
        heading: "SMB-Essentials \n Per Location",
        btnLabel: "Open an account - for free",
        features: ['Messaging', 'Market Segmentation', 'Personalization', 'Reputation Management', 'Geofencing', 'Chatbot AI', 'QR Platform (Limited)']
    },
    {
        heading: "SME - Premium \n Per Location",
        btnLabel: "Contact sales",
        features: ['Booking/Purchase Confirmation', 'Blast-M', 'Message -360', 'Loyality Integration', 'Customer Recognition', 'Voucher & Gift Cards'],
        specialNote: "Everything in Essential plus:",
    },
    {
        heading: "Enterprise \n Per Location",
        btnLabel: "Contact sales",
        features: ['All Platforms', 'Inspirtations', 'Asset Tracking', 'RFID', 'QR Platform (Unlimited)'],
        specialNote: 'Everything in Premium plus:',
    }
    ]
    const sliderData = [
        {
            img: img21,
            heading: 'Messaging: \n The modern way to do T&E',
            content: 'It took a joint technology partnership and an overhaul of the entire process to create Brex travel, but business travel is finally good again.'
        },
        {
            img: img22,
            heading: 'Merchandising: \n expense management',
            content: 'See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.'
        },
        {
            img: img23,
            heading: 'QR Management: \n automated and integrated',
            content: 'How modern companies approach procurement as part of a unified spend management system.',

        },
        {
            img: img24,
            heading: '5 ways AI can accelerate \n expense management',
            content: 'See how an AI expense assistant can make compliance effortless for employees and drive unprecedented efficiency across your org.'
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    let sliderRef = useRef(null);
    return (
        <>
            <NavBar hideModal={hideModal} />
            <div onMouseEnter={() => setHideModal(!hideModal)}>
                {/* section 1 banner section  */}
                <section className='home-banner-box'>
                    <Grid container spacing={5}>
                        <Grid item sm={8} >
                            <div className="home-banner-heading-box">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 50,
                                        strings: ['The AI Powered tools to connect customers and guests.'],
                                        wrapperClassName: 'home-banner-heading'
                                    }}
                                />
                                <Btn label='Get Started' />
                            </div>
                        </Grid>
                        <Grid item sm={4} >
                            <div className="home-banner-right">
                                {bannerFacilities.map(item => (
                                    <div key={item}><CheckIcon fontSize='small' /> {item}</div>
                                ))}
                            </div>
                        </Grid>
                    </Grid>
                </section>
                {/* section 2  */}
                <section className='home-sec2-box padding'>
                    <div className="global-heading1" data-aos="fade-up" >Empower all to spend <br />confidently.</div>
                    <div className="home-sec2-content global-text1">As a finance leader, you love control. But most company spend happens outside your team. So how do you empower everyone — everywhere — to spend wisely? Top companies are doing just that with iVeeW.
                    </div>
                    <div className='home-sec2-imgs' >
                        <img className='home-sec-2-img' src={companies} alt="companies" />
                        <img className='home-sec-2-img' src={companies1} alt="companies" />
                    </div>
                </section>
                {/* section 3  */}
                <section className='home-sec3-box padding'>
                    <div className="global-heading1" data-aos="fade-up">Consolidate all spending onto <br /> one platform.</div>
                    <div className="global-text1 home-sec2-content">Everything you need to control spend before it happens and empower teams confidently.</div>
                    <div className="">
                        <Grid container spacing={3}>
                            <Grid item md={2.4} sm={6} xs={12}>
                                <img src={img1} alt="img1" className='home-sec3-img' />
                            </Grid>
                            <Grid item md={2.4} sm={6} xs={12}>
                                <img src={img2} alt="img2" className='home-sec3-img' />
                            </Grid>
                            <Grid item md={2.4} sm={6} xs={12}>
                                <img src={img3} alt="img3" className='home-sec3-img' />
                            </Grid>
                            <Grid item md={2.4} sm={6} xs={12}>
                                <img src={img4} alt="img4" className='home-sec3-img' />
                            </Grid>
                            <Grid item md={2.4} sm={6} xs={12}>
                                <img src={img5} alt="img5" className='home-sec3-img' />
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* section 4  */}
                <section className='home-sec4-box padding'>
                    <div className="global-heading1" data-aos="fade-up" >Spend smarter at every stage <br /> of growth.</div>
                    <div className='margin-home'>
                        <Grid container spacing={5}>
                            <Grid item md={4} sm={6} xs={12}>
                                <Card1 img={img6} heading="SMB - Starting with 1-10 locations" />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Card1 img={img7} heading="SMB - Starting with 1-10 locations" />
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <Card1 img={img8} heading="SMB - Starting with 1-10 locations" />
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* section 5  */}
                <section className="home-sec5-box padding">
                    <div className="global-heading1" data-aos="fade-up">Give your resources team <br /> superpowers</div>
                    <div className="global-text1 home-sec2-content">Maximize every resource with AI-powered controls, payments, and accounting.</div>
                    <div className="sec5-cards-box">
                        <CardLeft
                            img={img9}
                            heading="RFID software revolutionizes "
                            content="Set budgets and allocate spend limits with auto-enforced 
                    controls that empower employees to spend wisely. Track and 
                    adjust in real time to keep everyone on budget and maximize 
                    impact."
                        />
                        <CardRight
                            img={img10}
                            heading="QRMAJI Delivers codes"
                            content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                        />
                        <CardLeft
                            img={img11}
                            heading="Beacons, wifi, mesh, 5.0"
                            content="Set budgets and allocate spend limits with auto-enforced 
                    controls that empower employees to spend wisely. Track and 
                    adjust in real time to keep everyone on budget and maximize 
                    impact."
                        />
                        <CardRight
                            img={img12}
                            heading="Geofencing your property"
                            content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                        />
                        <CardLeft
                            img={img13}
                            heading="GX-Guest management"
                            content="Set budgets and allocate spend limits with auto-enforced controls that empower employees to spend wisely. Track and adjust in real time to keep everyone on budget and maximize impact."
                        />
                        <CardRight
                            img={img14}
                            heading="Segmentation marketing"
                            content="Make expenses a breeze for employees and managers with automated receipts, an AI-powered expense assistant, in-app travel bookings and itinerary changes. All in a five-star mobile app."
                        />
                    </div>
                    <div>
                        <Grid container spacing={5} mt={15}>
                            <Grid item sm={5} xs={12} >
                                <img src={img15} alt="img" width="100%" data-aos="flip-left" />
                            </Grid>
                            <Grid item sm={6} xs={12} mt={7} >
                                <img src={img16} alt="img" width='250px' />
                                <div className="home-sec5-author-text">
                                    “iVeeW has been a major gain for us in efficiency for T&E. It’s easy for employees to understand where and how to spend.”
                                </div>
                                <div className="home-sec5-author-name">— Mike Kim, Vice President of Finance, DoorDash</div>
                                <div className="home-card-btnTxt">Click Here <EastIcon fontSize='small' sx={{ color: '#F56B3F' }} /></div>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* section 6  */}
                <section className="home-sec6-box">
                    <div className="padding">
                        <Grid container>
                            <Grid item sm={5} xs={12}>
                                <div className="home-sec6-heading">The AI Powered tools  to connect customers  and guests</div>
                                <div className="home-sec6-content">Learn how our spend platform can increase the strategic impact of  your finance team and future-proof your company.</div>
                                <Btn label='Get Started' />
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* section 7  */}
                <section>
                    <div className="home-sec7-box padding">
                        <div className="global-heading1" data-aos="fade-up">Everything you need to <br /> spend smart.</div>
                        <div className='margin-home'>
                            <Grid container spacing={5}>
                                {
                                    pricingData.map(item => (
                                        <Grid item md={4} sm={6} xs={12}
                                            key={item.heading}>
                                            <PricingCard
                                                heading={item.heading}
                                                features={item.features}
                                                btnLabel={item.btnLabel}
                                                note={item?.specialNote}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                        <div className="home-sec7-bgBox">
                            <div className="home-sec7-heading">Looking for more global features?</div>
                            <div className="home-sec7-content">Check out our enterprise solution — it has everything you need to manage multi-entity travel, expenses, and procurement in real time, on one platform, around the world.</div>
                            <Btn label="Explore our global enterprise solution" className='home-sec7-btn' />
                        </div>
                    </div>
                </section>
                {/* section 8  */}
                <section className="home-sec8-box padding">
                    <div className="global-heading1" data-aos="fade-up" >Insights on AI- powered iveew chatbot.</div>
                    <div className='home-slider margin-home' >
                        <Slider
                            ref={slider => {
                                sliderRef = slider;
                            }}
                            {...settings}>
                            {sliderData.map(item => (
                                <div className="sliderItem" key={item.heading}>
                                    <img src={item.img} alt="img" />
                                    <div className="sliderItem-heading" style={{ whiteSpace: 'pre-line' }} >{item.heading}</div>
                                    <div className="sliderItem-content">{item.content}</div>
                                </div>
                            ))}
                        </Slider>
                        <div className='slider-navigation'>
                            <img onClick={() => sliderRef.slickPrev()} src={prev} alt="prev" />
                            <img onClick={() => sliderRef.slickNext()} src={next} alt="next" />
                        </div>
                    </div>
                </section>
                {/* Footer  */}
                <Footer />
            </div>
        </>
    )
}
