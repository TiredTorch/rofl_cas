import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/BJ.scss'
import Card from './Card/Card'

import Six from '../../img/cards/six.png'
import Seven from '../../img/cards/seven.png'
import Eight from '../../img/cards/eight.png'
import Nine from '../../img/cards/nine.png'
import Ten from '../../img/cards/ten.png'
import Jack from '../../img/cards/jack.png'
import Queen from '../../img/cards/queen.png'
import King from '../../img/cards/king.png'
import Ace from '../../img/cards/ace.png'


class Bj extends Component {
    cards= [
        {value: 6, pic: Six},
        {value: 7, pic: Seven},
        {value: 8, pic: Eight},
        {value: 9, pic: Nine},
        {value: 10, pic: Ten},
        {value: 2, pic: Jack},
        {value: 3, pic: Queen},
        {value: 4, pic: King},
        {value: 11, pic: Ace}
    ]

    constructor(props) {
        super(props);
        
        this.state = {
            userPoints: 0,
            dillerPoints: 0,

            userCardAmount : 0,
            dillerCardAmount: 0,

            dillerPos: 0,
            userPos: 0,

            userCards: [],
            dillerCards: [],

            popUpActive: 'PopUp Active',

            popUpTitle: 'Добро пожаловать в Блекджек',
            popUpDescription: 'Введите ставку чтобы начать'
        }
        this.takeCard = this.takeCard.bind(this);
    }
    
    startBJ = () => {
        this.takeCard(true)
        setTimeout(() => {
            this.takeCard(false)
        }, 500)
        setTimeout(() => {
            this.takeCard(true)
        }, 1000)
        setTimeout(() => {
            this.checkPoints(false);
        }, 1500)
    }

    takeCard = (user) => {
        let cardIndex = Math.floor(Math.random() * 9)

        if(user){
            let tempLeft = 15 + (this.state.userPos * 5);

            this.setState({userCards: [
                ...this.state.userCards,
                <Card top='60' left={tempLeft} bg={this.cards[cardIndex].pic}/>
            ]})
            this.setState({userPos: this.state.userPos + 1, userPoints: this.state.userPoints + this.cards[cardIndex].value})
        }else{
            let tempLeft = 60 - (this.state.dillerPos * 5);
            this.setState({dillerCards: [
                ...this.state.dillerCards,
                <Card top='5' left={tempLeft} bg={this.cards[cardIndex].pic}/>
            ]})
            this.setState({dillerPos: this.state.dillerPos + 1, dillerPoints: this.state.dillerPoints + this.cards[cardIndex].value})
           
        }
        setTimeout(() => {
            this.checkPoints(false);
        }, 500)
    }

    togglePopUp = () => {
        var css = (this.state.popUpActive === 'PopUp Active') ? 'PopUp notActive' : 'PopUp Active';
        this.setState({popUpActive: css});
    }

    enemyTurn = () => {
        if(this.state.dillerPoints < 17){
            this.takeCard(false);
            setTimeout(() => {
                this.enemyTurn();

            }, 300)
        }
    }

    checkPoints = (finish) => {
        if(this.state.userPoints > 21){
            this.finishBJ("У вас перебор!", "Вы проиграли, попробуйте снова")
        }else if (finish){
            this.enemyTurn();
            setTimeout(() => {
                if(this.state.dillerPoints > 21){
                    this.finishBJ("У диллера перебор!", "Вы победили, попробуйте снова")
                }else if(this.state.dillerPoints > this.state.userPoints){
                    this.finishBJ("У диллера больше!", "Вы проиграли, попробуйте снова")
                }else if(this.state.dillerPoints === this.state.userPoints){
                    this.finishBJ("Ничья!", "Банк возвращен, попробуйте снова")
                }else{
                    this.finishBJ("У вас больше!", "Вы победили, попробуйте снова")
                }
            }, 2000)
            
            
        }
    }
    finishBJ = (title, description) => {
        console.log('fdfgfd')
        this.setState({
            popUpTitle: title,
            popUpDescription: description
        })
        this.setState({
            userPoints: 0,
            dillerPoints: 0,

            userCardAmount : 0,
            dillerCardAmount: 0,

            dillerPos: 0,
            userPos: 0,

            userCards: [],
            dillerCards: [],

        })
        this.togglePopUp();
    }

    render() {
        return (
            <div className='BJ'>
                {this.state.dillerCards}
                {this.state.userCards}
                <div className="deck" onClick={() => this.takeCard(true)} >Ещё</div>
                <div className="enough" onClick={() => this.checkPoints(true)}>Хватит</div>
                <div className={this.state.popUpActive}>
                    <h2>{this.state.popUpTitle}</h2>
                    <p>{this.state.popUpDescription}</p>
                    <a onClick={() => {this.togglePopUp(); this.startBJ()}}>Сделать ставку</a>
                    <Link to="/">В меню</Link>
                    <input type="text" />
                </div>
            </div>
        );
    }
}

export default Bj;