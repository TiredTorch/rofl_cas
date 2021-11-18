import React, { Component } from 'react';
import './styles/Main.scss'
import Mainpopupitem from './MainPopUpItem/MainPopUpItem';

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            PopUp : 'PopUp hidden'
        }
    }

    togglePopUp() {
        var css = (this.state.PopUp === 'PopUp hidden') ? 'PopUp show' : 'PopUp hidden'
        this.setState({PopUp : css});
    }

    render() {
        return (
            <div className='Main'>
                <div className="greetings">
                    <h2>Рофлан Казиныч</h2>
                    <p>Лучшее казино в СНГ</p>
                    <button onClick={this.togglePopUp.bind(this)}>Начать</button>
                </div>
                <div className={this.state.PopUp}>
                    <h2>Правила Игр</h2>
                    <p>Нажмите на иконки чтобы начать игру</p>
                    <div className="wrapper">
                        <Mainpopupitem gamename='Блекджек' gamedesct='Соберите 21 одно очко считая номиналы карт'/>
                        <Mainpopupitem gamename='Слоты' gamedesct='Выбейте 2 или 3 рисунка подряд'/>
                        <Mainpopupitem gamename='Предсказания' gamedesct='Думайте о своем вопросе и трясите шар для ответа'/>
                        <Mainpopupitem gamename='В разработке' gamedesct='lorem ipsum dolor'/>
                    </div>
                    <button onClick={this.togglePopUp.bind(this)}>
                        Скрыть справку
                    </button>
                </div>
            </div>
        );
    }
}

export default Main;
