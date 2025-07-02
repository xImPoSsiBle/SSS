import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Header.css'
import Logo from '../../assets/Logo-with-text.png'
import PhoneIcon from '../../assets/Phone.png'
import EmailIcon from '../../assets/Email.png'


const Header = ({ menuActive, setMenuActive, nav }) => {
    const [navActive, setNavActive] = useState(0)

    return (
        <header className="bg-[#161616] text-white h-20 w-full flex items-center fixed top-0 z-50 mb-[60px]">
            <div className="flex justify-between w-[90%] mx-auto">
                <div>
                    <Link to='/'>
                        <img src={Logo} alt='logo' className='w-30' />
                    </Link>
                </div>
                <nav className="hidden md:flex lg:gap-20 gap-10 items-center">
                    {nav.map((item, index) => (
                        <Link to={item.link} key={index} onClick={() => setNavActive(index)}>
                            <span className={navActive === index ? 'border-b-2 border-[#F9D019]' : ''}>{item.name}</span>
                        </Link>
                    ))}
                </nav>
                    
                <div className='hidden md:flex flex-col justify-center'>
                    <span className='flex items-center'>
                        <img src={PhoneIcon} alt="phoneIcon" />
                        <span className='ml-2'>8(777)880-08-20</span>
                    </span>
                    <span className='flex items-center'>
                        <img src={EmailIcon} alt="emailIcon" />
                        <span className='ml-2'>tburmaganov@mail.ru</span>
                    </span>
                </div>

                <nav className='md:hidden flex items-center' onClick={() => setMenuActive(!menuActive)}>
                    <div className={menuActive ? 'burger-btn active' : 'burger-btn'}>
                        <span />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header