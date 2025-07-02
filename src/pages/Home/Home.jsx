import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import './Home.css'
import Logo from '../../assets/logo.png'
import Features1 from '../../assets/features-1.png'
import Features2 from '../../assets/features-2.png'
import Features3 from '../../assets/features-3.png'
import Features4 from '../../assets/features-4.png'
import ServiceItems from '../../components/ServiceItems/ServiceItems'
import ServiceIcon1 from '../../assets/Service-1.png'
import ServiceIcon2 from '../../assets/Service-2.png'
import ServiceIcon3 from '../../assets/Service-3.png'
import ServiceIcon4 from '../../assets/Service-4.png'
import ServiceIcon5 from '../../assets/Service-5.png'
import ServiceIcon6 from '../../assets/Service-6.png'
import OfficeBg from '../../assets/Office.png'
import WarehouseBg from '../../assets/Warehouse.png'
import ConstructionBg from '../../assets/ConstructionSites.png'
import MedicalBg from '../../assets/Medical.png'
import BankBg from '../../assets/Bank.png'
import ResidentalBg from '../../assets/Residental.png'
import ShoppingCenterBg from '../../assets/ShoppingCenter.png'
import ShopBg from '../../assets/Shop.png'
import IndustrialBg from '../../assets/Industrial.png'
import { div } from 'framer-motion/client'

const Home = ({ services }) => {

    const features = [
        {
            icon: Features1,
            title: "Честность",
            description: "Мы открыты и прозрачны в работе с клиентами, соблюдаем договорённости без скрытых условий.",
        },
        {
            icon: Features2,
            title: "Профессиональность",
            description: "У нас команда специалистов с опытом и знаниями, обеспечивающая охрану на высоком уровне.",
        },
        {
            icon: Features3,
            title: "Надёжность",
            description: "Мы обеспечим Вас стабильностью, оперативностью и бесперебойной защитой 24/7 при любых обстоятельствах.",
        },
        {
            icon: Features4,
            title: "Ответственность",
            description: "У нас строгое выполнение обязательств и мы готовы нести полную ответственность за безопасность объекта.",
        },
    ];

    const places = [
        { name: 'Офис', bg: OfficeBg },
        { name: 'Склад', bg: WarehouseBg },
        { name: 'Строительные площадки', bg: ConstructionBg },
        { name: 'Медицинские учреждения', bg: MedicalBg },
        { name: 'Банк', bg: BankBg },
        { name: 'Жилой комплекс', bg: ResidentalBg },
        { name: 'Торговая площадка', bg: ShoppingCenterBg },
        { name: 'Магазин', bg: ShopBg },
        { name: 'Объекты промышленного характера', bg: IndustrialBg },
    ]




    return (
        <main className='bg-[#161616]'>
            <section className='h-[100vh] w-full flex items-center justify-center hero bg-contain'>
                <div className='w-[70%] flex flex-col-reverse md:flex-row items-center justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className='flex flex-col items-center md:block'
                    >
                        <h1 className='text-center md:text-left text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold text-[#A3A3A3] w-[300px] lg:w-[500px]'>
                            Надежная охрана ваших объектов – 24/7
                        </h1>

                        <Link to='/contacts'>
                            <button className='w-[240px] h-[70px] bg-[#F9D019] text-[20px] text-[#474751] font-bold py-2 px-4 rounded-full mt-10 cursor-pointer button' onClick={() => console.log('work')}>
                                Оставить заявку
                            </button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] shrink-0"
                    >
                        <img
                            src={Logo}
                            alt="logo"
                            className="w-full h-full object-contain"
                            style={{ maskImage: `url(${Logo})`, WebkitMaskImage: `url(${Logo})`, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat', maskPosition: 'center', WebkitMaskPosition: 'center' }}
                        />
                        <div className="shine"></div>
                    </motion.div>
                </div>
            </section>

            <section className='mt-10 text-white'>
                <h1 className='text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D9D9D9] to-[#999999] h-13'>
                    Почему мы?
                </h1>

                <div className='lg:w-[90%] w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 gap-30 mt-10'>
                    {features.map((feature, index) => (
                        <div key={index} className='bg-[#222222] h-[400px] xl:w-[300px] lg:h-[350px] lg:w-[250px] xl:h-[400px] xl:w-[300px] flex flex-col p-5 rounded-xl hover:scale-105 duration-300'>
                            <img src={feature.icon} alt={feature.title} className='w-[70px] h-[70px]' />
                            <div className='mt-[40px]'>
                                <h2 className='text-xl font-bold'>{feature.title}</h2>
                                <span className='block w-20 border bg-[#F9D019] my-[30px]'></span>
                                <p className='w-[225px] xl:w-[225px]'>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='w-[90%] mx-auto text-white mt-40'>
                <ServiceItems firstImage={ServiceIcon1} firstImageTitle='Физических лиц' title='Оказание охранных услуг для: ' secondImage={ServiceIcon2} secondImageTitle='Юридических лиц' />
                <ServiceItems firstImage={ServiceIcon3} firstImageTitle='Длительные договора' title='Мы заключаем договора:' secondImage={ServiceIcon4} secondImageTitle='Договора на разовые оказание услуг' />
                <ServiceItems firstImage={ServiceIcon5} firstImageTitle='Типовые  проекты, разработанные специалистами компании' title='Заказчику могут быть предложены:' secondImage={ServiceIcon6} secondImageTitle='Эксклюзивные индивидуальные решения' />
            </section>

            <section className='mt-10 flex flex-col items-center'>
                <h1 className='text-4xl font-bold text-center text-[#9C9C9C]'>
                    Охрана стационарных объектов
                </h1>
                <div className='w-[920px] h-[80px] bg-[#F9D01921] flex items-center text-center rounded-2xl'>
                    <span className=' text-[24px] text-white'>
                        это очень сложная и ответственная задача, которая представляет собой целый комплекс охранных мероприятий в основном предусмотрительного характера.
                    </span>
                </div>

                <h1 className='text-2xl font-bold text-center text-[#9C9C9C] my-10'>
                    Мы предлагаем следующие решения для обеспечения Вашей безопасности:
                </h1>

                <div className='w-[90%] mx-auto flex flex-wrap justify-between'>
                    {places.map((place, index) => (
                        <div className='mx-[50px] mb-[60px] flex flex-col items-center'>
                            <div
                                key={index}
                                style={{ backgroundImage: `url(${place.bg})` }}
                                className='bg-contain h-[300px] w-[300px] flex flex-col justify-end p-5 rounded-xl hover:scale-105 duration-300'
                            >
                                <span className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-[#D9D9D9] to-[#999999] text-center'>{place.name}</span>
                            </div>
                            <button className='bg-[#f9d019] w-[150px] h-[40px] rounded-full mt-5 font-[600]'>Перейти</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className='w-[90%] mx-auto flex items-center justify-between'>
                <div className='mt-[200px] h-[500px] w-[500px] flex flex-col items-center justify-center rounded-2xl border border-transparent shadow-[0_0_20px_#f9d001] mb-10 contactDiv'>
                    <h1 className='text-3xl font-bold max-w-[250px] text-center text-[#866E02]'>Оставьте заявку</h1>
                    <h1 className='text-2xl font-bold max-w-[290px] text-center text-[#866E02]'>и мы свяжемся с вами</h1>
                    <input
                        type="text"
                        className='mt-10 border border-white text-[#f9d019] w-[300px] h-[50px] p-3 rounded-full'
                        placeholder='ФИО'
                    />
                    <input
                        type="text"
                        className='mt-10 border border-white text-[#f9d019] w-[300px] h-[50px] p-3 rounded-full'
                        placeholder='Номер телефона'
                    />
                    <input
                        type="text"
                        className='mt-10 border border-white text-[#f9d019] w-[300px] h-[50px] p-3 rounded-full'
                        placeholder='Электронная почта'
                    />
                    <button
                        className='bg-[#866E02] w-[140px] h-[30px] rounded-full mt-5 font-[600] text-white text-xs'
                    >
                        Отправить
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home