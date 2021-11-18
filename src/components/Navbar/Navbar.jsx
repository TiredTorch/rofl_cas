import React from 'react';
import './Navbar.scss'
import NavbarItem from './Navbar__item/Navbar__item';
import Account__item from './Account__item/Account__item'

import MainPic from '../../img/logo.png'
import CardsPic from '../../img/cards.png'
import SlotPic from '../../img/slot.png'
import BallPic from '../../img/ball.png'
import SoonPic from '../../img/coming.png'

const Navbar = (props) => {
    return (
        <div className='Navbar'>
            <NavbarItem src='/rofl_cas' act='Главное меню' pic={MainPic} alt='main'/>
            <NavbarItem src='/bj' act='Блекджек' pic={CardsPic} alt='bj'/>
            <NavbarItem src='/slots' act='Слоты' pic={SlotPic} alt='slots'/>
            <NavbarItem src='/ball' act='Предсказания' pic={BallPic} alt='prediction'/>
            <NavbarItem src='/rofl_cas' act='В разработке' pic={SoonPic}  alt='soon'/>
            <Account__item name={props.name} setName={props.setName} money={props.money}/>
        </div>
    );
}

export default Navbar;
