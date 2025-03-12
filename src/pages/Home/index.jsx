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
    ContainerBtn,
    CardBtn,
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
            <CardImg src='public/image.png'/>
            <CardTitle>Titulo produto 1</CardTitle>
            <ContainerBtn>
            <CardPrincing>
              R$1500,00
            </CardPrincing>
            <CardBtn>Comprar</CardBtn>
            </ContainerBtn>
          </Cards>
          <Cards>
            <CardImg src='public/image.png'/>
            <CardTitle>Titulo produto 1</CardTitle>
            <ContainerBtn>
            <CardPrincing>
              R$1500,00
            </CardPrincing>
            <CardBtn>Comprar</CardBtn>
            </ContainerBtn>
          </Cards>
          <Cards>
            <CardImg src='public/image.png'/>
            <CardTitle>Titulo produto 1</CardTitle>
            <ContainerBtn>
            <CardPrincing>
              R$1500,00
            </CardPrincing>
            <CardBtn>Comprar</CardBtn>
            </ContainerBtn>
          </Cards>
        </ProductsContainer>
      </Fragment>
    );
}

export default Home;