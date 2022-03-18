import React from 'react'

import { Section } from '../../GlobalStyles/globalstyles'
import TestimonialData from '../Data/TestimonialData'
// import { Container, Article, Image } from './Testimonials.styles'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


// Swiper.use([Navigation, Pagination]);
const Testimonials = () => {
  //   console.log(TestimonialData)
  //   const [avatar, FullName, Review] = TestimonialData
  //   console.log(avatar)
  return (
    <Section>
      <h5>Testimonials</h5>
      <h2>Name</h2>
      <Swiper
        className='container'
        spaceBetween={40}
        slidesPerView={1}
       
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {TestimonialData.map((el, idx) => {
          return (
            <SwiperSlide key={idx} className='article'>
              <div className='Image'>
                <img src={el.avatar} alt=''></img>
              </div>
              <h5>{el.FullName}</h5>
              <small>{el.Review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Section>
  )
}

export default Testimonials
