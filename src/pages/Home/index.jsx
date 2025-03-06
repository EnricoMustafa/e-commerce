import { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
    CarouselContainer, 
    ImageSlide,
    ProductsContainer,
    TitleSection,
    Cards,
    CardImg,
    CardTitle,
    CardPrincing,
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
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
        >
          <ImageSlide>Image 1</ImageSlide>
          <ImageSlide>Image 2</ImageSlide>
          <ImageSlide>Image 3</ImageSlide>
        </CarouselContainer>
          <TitleSection>Produto</TitleSection>
        <ProductsContainer>
          <Cards>
            <CardImg/>
            <CardTitle>Titulo produto 1</CardTitle>
            <CardPrincing>
              Preço
            </CardPrincing>
          </Cards>
          <Cards>
            <CardImg/>
            <CardTitle>Titulo produto 2</CardTitle>
            <CardPrincing>
              Preço
            </CardPrincing>
          </Cards>
          <Cards>
          <CardImg/>
            <CardTitle>Titulo produto 3</CardTitle>
            <CardPrincing>
              Preço
            </CardPrincing>
          </Cards>
        </ProductsContainer>
      </Fragment>
    );
}

export default Home;