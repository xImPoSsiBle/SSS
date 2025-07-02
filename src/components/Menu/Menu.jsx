import { Link } from 'react-router-dom'
import './Menu.css'

const Menu = ({ menuActive, nav }) => {
  return (
    <div className={`${menuActive ? 'menu active' : 'menu'} md:hidden`} onClick={e => e.stopPropagation()}>
      <div className='menu__container'>
        <div className='flex flex-col items-center justify-center text-white gap-5 mt-10'>
          {nav.map((item, index) => (
            <Link to={item.link} key={index}>
              <h1 className='text-3xl font-bold'>
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu