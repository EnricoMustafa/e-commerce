import { Fragment } from 'react';
import {
Title,
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
                    <Title>
                        SurfShop
                    </Title>
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