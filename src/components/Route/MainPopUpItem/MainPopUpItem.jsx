import React from 'react';
import './MainPopUpItem.scss'

const Mainpopupitem = (props) => {
    return (
        <div className='MainPopUpItem'>
            <h3>{props.gamename}</h3>
            <p>{props.gamedesct}</p>
        </div>
    );
}

export default Mainpopupitem;
