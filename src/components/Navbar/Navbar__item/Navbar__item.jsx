import React from 'react';
import './Navbar__item.scss'

const NavbarItem = (props) => {
    return (
        <div className='Navbar__item'>
            <a href={props.src}>
                <img src={props.pic} alt={props.alt} />
            </a>
            <div className="popUp">
                {props.act}
            </div>
        </div>
    );
}

export default NavbarItem;
