import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Footer from './components/Footer/Footer'

const App = () => {
  const services = [
    'Строительных объектов',
    'Жилых Комплексов',
    'Бизнес Центров',
  ]

  const nav = [
        { name: 'Главная', link: '/' },
        { name: 'О нас', link: '/about' },
        { name: 'Услуги', link: '/services' },
        { name: 'Контакты', link: '/contacts' },
    ]

  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      <Header setMenuActive={setMenuActive} menuActive={menuActive} nav={nav} />
      <Menu menuActive={menuActive} nav={nav}/>

      <Routes>
        <Route path='/' element={<Home services={services} />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
