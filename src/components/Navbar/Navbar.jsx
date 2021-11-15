import React from 'react';
import './Navbar.scss'
import NavbarItem from './Navbar__item/Navbar__item';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavbarItem src='#' act='Главное меню' pic='http://placekitten.com/200/300' alt='main'/>
            <NavbarItem src='#' act='Блекджек' pic='http://placekitten.com/200/300' alt='bj'/>
            <NavbarItem src='#' act='Слоты' pic='http://placekitten.com/200/300' alt='slots'/>
            <NavbarItem src='#' act='Предсказания' pic='http://placekitten.com/200/300' alt='prediction'/>
            <NavbarItem src='#' act='В разработке' pic='http://placekitten.com/200/300' alt='soon'/>
        </div>
    );
}

export default Navbar;
