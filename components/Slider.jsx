/* eslint import/no-unresolved: 2 */
import React from 'react';
// Import Swiper React components
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved, import/no-duplicates
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
// eslint-disable-next-line import/no-unresolved, import/no-duplicates
import { Autoplay } from 'swiper/modules';
import image1 from '../public/image1.jpg';
import image2 from '../public/image2.jpg';
import image3 from '../public/image3.jpg';
import image4 from '../public/image4.jpg';
import image5 from '../public/image5.jpg';
import image6 from '../public/image6.jpg';
import image7 from '../public/image7.jpg';
import image8 from '../public/image8.jpg';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/navigation';

export default function Slider() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image
          src={image1}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Image
          src={image2}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Image
          src={image3}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Image
          src={image4}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image5}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Image
          src={image6}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <Image
          src={image7}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={image8}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </SwiperSlide>
    </Swiper>
  );
}
