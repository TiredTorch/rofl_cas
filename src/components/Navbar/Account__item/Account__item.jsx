import './Account__item.scss'
import React, { Component } from 'react';
import BG1 from './../../../img/bgLog.jpg'
class AccountItem extends Component {
    constructor(props) {
        super(props);
         this.state = {
             isLoggedIn: true,
             title: 'Представься',
             showInfo: 'AccountItem show'
         }
    }
    
    togglePersonalInfo = () => {
        let css = (this.state.showInfo === 'AccountItem show') ? 'AccountItem hidden' : 'AccountItem show';
        this.setState({showInfo: css})
    }

    checkReg = () => {
        if(this.props.name.trim()){
            this.setState({isLoggedIn: true, showInfo: 'AccountItem show'})

        }else{
            this.setState({title: 'Не тупи'})
        }
    }

    render() {
        if(this.state.isLoggedIn){
            return(
                <div className={this.state.showInfo} onClick={() => {this.togglePersonalInfo()}}>
                    <h2>Аккаунт {this.props.name}</h2>
                    <p>Денег: {this.props.money}$</p>
                    <div className="buttons">
                        <button onClick={() => {this.togglePersonalInfo()}}>Закрыть информацию</button>
                        <button onClick={() => {this.setState({isLoggedIn: false})}}>Выйти из аккаунта</button>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='AccountItem'  style={{backgroundImage: `url(${BG1})`}}>
                    <div className="wrapper">
                        <h2>{this.state.title}</h2>
                        <input type="text" placeholder='Ваше имя' value={this.props.name} 
                        onChange = {e => this.props.setName(e.target.value)}/>
                        <button onClick={this.checkReg}>Войти</button>
                    </div>
                </div>
            )
        }
    }
}

export default AccountItem;
