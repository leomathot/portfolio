import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import TicTacToeVsCode from './TTTVsCode/TicTacToeVsCode'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProjectsSwiper = () => {

    const swiperSlideContClass = `
        bg-gradient-to-br
        from-teal-800/70
        via-purple-900/70 
        to-sky-800/70
        shadow-md shadow-zinc-900/50
        w-full md:w-[90%] max-w-[600px] 
        min-h-[590px] 
        mx-auto mt-2 mb-2 p-1 pb-10`

    return (
        <div className='
            
            mt-20 mx-auto py-10  px-2
            w-full md:w-[90%]
            text-center'>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{
                    '--swiper-pagination-color': '#fff8',
                    '--swiper-navigation-color': '#fff8',
                }}
            >
                <SwiperSlide>
                    <div className={swiperSlideContClass}>
                        <TicTacToeVsCode/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={swiperSlideContClass}>
                        <p>slide 02</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ut doloremque, optio tempore impedit accusantium. Distinctio neque ad alias officiis doloribus, laborum deserunt minus nam iusto ullam! Ducimus, cupiditate tempore.</p></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={swiperSlideContClass}>
                        <p>slide 03</p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ut doloremque, optio tempore impedit accusantium. Distinctio neque ad alias officiis doloribus, laborum deserunt minus nam iusto ullam! Ducimus, cupiditate tempore.</p></div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default ProjectsSwiper