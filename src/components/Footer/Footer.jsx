import Logo from '../../assets/Logo-with-text.png'
import PhoneIcon from '../../assets/Phone.png'
import EmailIcon from '../../assets/Email.png'

const Footer = () => {
  return (
    <footer className='w-full h-60 bg-linear-to-t from-[#020202] to-[#161616] py-10'>
      <div className='w-[90%] h-full mx-auto flex items-center justify-between flex-col md:flex-row text-white'>
        <div className='flex items-center justify-between w-full md:w-[50%]'>
          <img src={Logo} alt="logo" />

          <div className='flex justify-between'>
            <div className='mr-10'>
              <p>ГЛАВНАЯ</p>
              <p>О НАС</p>
            </div>
            <div>
              <p>УСЛУГИ</p>
              <p>КОНТАКТЫ</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between w-full md:w-[50%]'>
          <button className='w-[150px] h-[45px] bg-[#F9D019] text-xs text-[#474751] font-bold py-2 px-4 rounded-full cursor-pointer button' onClick={() => console.log('work')}>
            Оставить заявку
          </button>

          <div className='flex flex-col justify-center'>
            <span className='flex items-center'>
              <img src={PhoneIcon} alt="phoneIcon" />
              <span className='ml-2'>8(777)880-08-20</span>
            </span>
            <span className='flex items-center'>
              <img src={EmailIcon} alt="emailIcon" />
              <span className='ml-2'>tburmaganov@mail.ru</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer