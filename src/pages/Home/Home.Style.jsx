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
flex-wrap: wrap;
`;


export const Cards = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 4px;
height: 50%;
border: 1px solid black;
border-radius: 10px 10px 0px 0px;
`;

export const CardImg = styled.img`
border-radius: 10px 10px 0px 0px;
height: 25rem;
`;

export const CardTitle = styled.p`
width: 100%;
text-align: start;
padding-left:20px;
`;

export const CardPrincing = styled.p`
font-size: 20px;
text-align: start;
padding: 10px;
`;

export const ContainerBtn = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
`;

//colocar hover e dar mais vida para pagina 
export const CardBtn = styled.button`
background-color: #2192FF;
height: 35px;
border: solid #c0c0c0 1px;
padding: 4px;
width: 80px;
color: #fff;
cursor: pointer;
`;