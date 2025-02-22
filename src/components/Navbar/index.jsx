import { Fragment } from 'react';
import './Navbar.css'
function Navbar(){
    return (
        <Fragment>
            
            <ul className="ContainerList">
                <li>Produto</li>
                <li>Sobre nos</li>
                <li>Login</li>
            </ul>
            
        </Fragment>
    )
}

export default Navbar;