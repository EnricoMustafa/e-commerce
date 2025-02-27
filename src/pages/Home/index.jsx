import { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
    CarouselContainer, 
    ImageSlide,
    ProductsContainer,
    Cards,
} from '../Home/Home.Style'


function Home(){
    return (
      <Fragment>
        <Navbar />
        <CarouselContainer
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <ImageSlide>Image 1</ImageSlide>
          <ImageSlide>Image 2</ImageSlide>
          <ImageSlide>Image 3</ImageSlide>
        </CarouselContainer>
        <ProductsContainer>
            <Cards>Produto</Cards>
        </ProductsContainer>
      </Fragment>
    );
}

export default Home;