import { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import {

} from '../Home/Home.Style'
import Carousel from '../../components/Carousel'

function Home(){
    return (
        <Fragment>
            <Navbar/>
            <Carousel/>
        </Fragment>
    )
}

export default Home;