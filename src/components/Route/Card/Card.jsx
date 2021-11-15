import React from 'react';
import './Card.scss'

const Card = (props) => {
    return (
        <div className='Card' style = {
            {top: `${props.top}vh`,
            left: `${props.left}vw`,
            background: `url(${props.bg}) no-repeat`,
            backgroundSize: `10vw 30vh`,
            }}>

        </div>
    );
}

export default Card;
