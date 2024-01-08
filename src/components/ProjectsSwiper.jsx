import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import TicTacToe from './TicTacToe/TicTacToe'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ProjectsSwiper = () => {

    const swiperSlideContClass = `
        w-[90%] max-w-[500px] mx-auto h-[80vh]
        p-5 border-b-[40px] border-transparent`

    return (
        <div className='
            bg-zinc-900/30 
            mt-20 mx-auto py-10 
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
                        <TicTacToe/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={swiperSlideContClass}>
                        <p>slide 03</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ut doloremque, optio tempore impedit accusantium. Distinctio neque ad alias officiis doloribus, laborum deserunt minus nam iusto ullam! Ducimus, cupiditate tempore.</p></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={swiperSlideContClass}>
                        <p>slide 04</p>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ut doloremque, optio tempore impedit accusantium. Distinctio neque ad alias officiis doloribus, laborum deserunt minus nam iusto ullam! Ducimus, cupiditate tempore.</p></div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={swiperSlideContClass}>
                        <p>slide 05</p><p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ut doloremque, optio tempore impedit accusantium. Distinctio neque ad alias officiis doloribus, laborum deserunt minus nam iusto ullam! Ducimus, cupiditate tempore.</p></div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default ProjectsSwiper