import { Fragment } from 'react';
import {
ContainerNav,
BoxElements,
ContainerList,
ListNav,
} from '../Navbar/Navbar.styles'
function Navbar(){
    return (
        <Fragment>
            <ContainerNav>
                <BoxElements>
                    <h1>
                        SurfShop
                    </h1>
                    <ContainerList>
                        <ListNav>Produto</ListNav>
                        <ListNav>Sobre nos</ListNav>
                        <ListNav>Login</ListNav>
                    </ContainerList>
                </BoxElements>
            </ContainerNav>
        </Fragment>
    )
}

export default Navbar;