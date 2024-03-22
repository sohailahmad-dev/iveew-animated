import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/imgs/iveewLogo.jpeg'
import Btn from "../btn/Btn";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './Navbar.css'
import ProductsNav from "./ProductsNav";
import SolutionsNav from "./SolutionsNav";
import ResourcesNav from "./ResourcesNav";






export default function NavBar({ active, hideModal }) {
    let [menu, setMenu] = useState(false);
    let [activeMenu, setActiveMenu] = useState('navLinks');
    let [activeLink, setActiveLink] = useState('')
    let [showNote, setShowNote] = useState(true);

    let [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 800);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            setShowNote(currentScroll <= 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        (menu === false) ? setActiveMenu('navLinks') : setActiveMenu("navLinks active")
    }, [menu])

    useEffect(() => {
        setActiveLink('')
    }, [hideModal])

    const onCursorEnter = (val) => {
        if (val) setActiveLink(val);
        setShowNote(false);
        setMenu(false);

    }




    return (
        <div className="navBar-Parent">
            <div className="navBar-note" style={{ display: showNote ? 'block' : 'none' }}>🚀 The Winter '24 Release is here — with smarter bill pay, spend limits, and more </div>
            <div className="navBar">
                <div className="icon">
                    {(menu === false) ? <MenuIcon onClick={() => setMenu(!menu)} /> : <CloseIcon onClick={() => setMenu(!menu)} />}
                </div>
                <img onClick={() => navigate('/')} src={logo} className="logo-nb" />
                <div className="nb-links-box">
                    <div className={activeMenu}>
                        <div
                            className="link-nb"
                            onMouseEnter={() => onCursorEnter('Products')}
                            onClick={() => onCursorEnter('Products')}
                        >Products
                            {activeLink === 'Products' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => onCursorEnter('Solutions')}
                            onClick={() => onCursorEnter('Solutions')}
                        >Solutions
                            {activeLink === 'Solutions' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => onCursorEnter('Resources')}
                            onClick={() => onCursorEnter('Resources')}
                        >Resources
                            {activeLink === 'Resources' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />}
                        </div>
                        <div
                            className="link-nb"
                            onMouseEnter={() => onCursorEnter('Pricing')}
                            onClick={() => onCursorEnter('Pricing')}
                        >Pricing
                            {/* {activeLink === 'Pricing' ? <KeyboardArrowUpIcon fontSize="small" sx={{ color: '#F56B3F' }} /> : <KeyboardArrowDownIcon fontSize="small" />} */}
                        </div>
                        {isMobile && <>
                            <div
                                className="link-nb1"
                                onClick={onCursorEnter}
                            >Sign In</div>
                            <Btn
                                onClick={onCursorEnter}
                                className='navBtn' label="Get Started" />
                        </>}

                    </div>
                    <div className='navLinks'>
                        <div
                            className="link-nb1"
                            onClick={() => onCursorEnter}
                        >Sign In</div>
                        <Btn
                            className='navBtn' label="Get Started"
                            onClick={() => onCursorEnter}
                        />
                    </div>
                </div>
                {activeLink === 'Products' && <ProductsNav showNote={showNote} />}
                {activeLink === 'Solutions' && <SolutionsNav showNote={showNote} />}
                {activeLink === 'Resources' && <ResourcesNav showNote={showNote} />}
            </div>
        </div >
    )
} 