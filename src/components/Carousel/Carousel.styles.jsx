import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const CarouselContainer = styled(Swiper)`
  width: 100%;
  height: 80vh;

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }

  .swiper-pagination-bullet {
    background-color: white;
  }
`;

export const ImageSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background:#000;
  color: white;
`;