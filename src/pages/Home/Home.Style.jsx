import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../assets/image.png'

export const CarouselContainer = styled(Swiper)`
  width: 100%;
  height: 90vh;

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

export const TitleSection = styled.h1`
display: flex;
justify-content: center;
margin: 0 auto;
margin-top: 6%;
width: 10%;
`;

export const ProductsContainer = styled.section`
display:flex;
justify-content: space-around;
margin-top: 4%;
`;


export const Cards = styled.div`
border: 1px solid black;
width: 20%;
text-align: center;
`;

// Consertar a manipulação de imagem dos cards pois o tamanho da imagem esta maior e não ta responsivo
export const CardImg = styled.div`
background-image: url("image.png");
height: 500px;

`;

export const CardTitle = styled.p`
text-align: start;
font-size: 20px;
padding: 10px;
`;

export const CardPrincing = styled.p`
font-size: 20px;
text-align: start;
padding: 10px;
`;