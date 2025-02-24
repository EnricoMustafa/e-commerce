import { Fragment } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { 
    CarouselContainer, 
    ImageSlide,
 } from './Carousel.styles';


function Carousel() {
  return (
    <Fragment>
      <CarouselContainer
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        >
         <ImageSlide>Image 1</ImageSlide>   
         <ImageSlide>Image 2</ImageSlide>   
         <ImageSlide>Image 3</ImageSlide>   
     </CarouselContainer>

    </Fragment>
  )
}

export default Carousel;
