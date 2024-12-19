import { Container } from 'postcss'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTop(true);
            } else {
                setIsTop(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header>
            <nav className={`fixed top-0 w-full ${isTop ? 'bg-tranparent p-4' : 'bg-blue-500 p-2'}  z-40`}>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col justify-center text-center'>
                        <div className='text-white text-4xl font-bold'>G2P</div>
                        <div className='text-white text-xl font-bold'>Pool Villa</div></div>
                    <div className='md:hidden'>
                        <button id='menu-toggle' className='text-white' onClick={toggleMenu}>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                                className='w-6 h-6'>
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className='pr-8 hidden md:flex space-x-8 text-xl font-bold'>
                        <li><Link to='home' spy={true} smooth={true} offset={50} duration={500} href="#" className='text-white' >HOME</Link></li>
                        <li><Link to='type' spy={true} smooth={true} offset={50} duration={500} href="#" className='text-white' >HOUSE-TYPE</Link></li>
                        <li><Link to='location' spy={true} smooth={true} offset={50} duration={500} href="#" className='text-white' >LOCATION</Link></li>
                        <li><Link to='/' spy={true} smooth={true} offset={50} duration={500} href="#" className='text-white' >CONTACT</Link></li>
                    </ul>
                </div>
                {isMenuOpen ? (<ul className='flex-col md:hidden'>
                    <li className='py-2'><a href="#" className='text-white'>HOME</a></li>
                    <li className='py-2'><a href="#" className='text-white'>HOUSE-TYPE</a></li>
                    <li className='py-2'><a href="#" className='text-white'>LOCATION</a></li>
                    <li className='py-2'><a href="#" className='text-white'>CONTACT</a></li>
                </ul>) : null}
            </nav>
        </header>
    )
}