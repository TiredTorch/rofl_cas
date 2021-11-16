import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar__item.scss'

const NavbarItem = (props) => {
    return (
        <div className='Navbar__item'>
            <Link to={props.src}>
                <img src={props.pic} alt={props.alt} />
            </Link>
            <div className="popUp">
                {props.act}
            </div>
        </div>
    );
}

export default NavbarItem;
