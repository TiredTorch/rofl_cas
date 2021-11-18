import React, { Component } from 'react';
import './styles/Slots.scss'
import Window from './SlotMachineWindow/Window'

class Slots extends Component {
    elems = [
        'https://gameinside.ua/wp-content/uploads/2021/01/zobrazhennya_2021-01-05_221945-360x240.png', 
        'http://sun9-78.userapi.com/impf/uUC4eG2gEQBjXFeAnhYQc1zpkpiacFUt6nsBTw/cMODnGcgc1o.jpg?size=604x370&quality=96&sign=e9240578f086cf286489201244975c7c&type=album', 
        'https://i.ytimg.com/vi/aLdIq7XO3U4/maxresdefault.jpg',
        'https://www.meme-arsenal.com/memes/b49bf8ab156ee860455d674486344f62.jpg', 
        'https://www.meme-arsenal.com/memes/e3e12006eff2a7ff5a6df9114524562a.jpg',
        'https://prodota.ru/forum/uploads/profile/photo-189292.jpg'
    ]

    constructor(props) {
        super(props);
        
        this.state = {
            Machine: "Window notWorked",
            butt: '',
            logValue: 'Ставка = 20$',
            tempElems: [
                'https://prodota.ru/forum/uploads/profile/photo-189292.jpg',
                'https://prodota.ru/forum/uploads/profile/photo-189292.jpg',
                'https://prodota.ru/forum/uploads/profile/photo-189292.jpg'
            ]
        }
    }

    startSlots = () => {
        this.setState({logValue: 'Ставка принята'})
        this.toggleWindows()
        
        setTimeout(() => {
            this.fillTempElems()
        }, 500)
        setTimeout(() => {
            this.fillTempElems()
        }, 1000)
        setTimeout(() => {
            this.fillTempElems()
        }, 1500)
        setTimeout(() => {
            this.toggleWindows()
            this.givePoints()
        }, 3000)
    }

    fillTempElems = () => {
        let tttemp = [0, 0, 0]
        for (let index = 0; index < this.state.tempElems.length; index++) {
            var elem = this.elems[Math.floor(Math.random() * (this.elems.length))];
            tttemp[index] = elem;
        }
        this.setState({tempElems: tttemp})
    }

    givePoints = () => {
        if(this.state.tempElems[0] === this.state.tempElems[1] && this.state.tempElems[2] === this.state.tempElems[1]){
            this.setState({logValue: '3 в ряд! Cюда лут! Получите 40$.'})
        }else if(this.state.tempElems[0] === this.state.tempElems[1] || this.state.tempElems[2] === this.state.tempElems[1]){
            this.setState({logValue: '2 в ряд! Cюда лут! Получите 30$.'})
        }else{
            this.setState({logValue: 'Вы проиграли! Ставка 20$.'})
        }
    }

    toggleWindows = () => {
        var css1 = (this.state.Machine === 'Window notWorked') ? 'Window Worked' : 'Window notWorked'
        var css2 = (this.state.butt === '') ? 'hidden' : '';
        
        this.setState({Machine : css1, butt: css2});
    }


    render() {
        return (
            <div className='Slots'>
                <div className="Machine">
                    <Window windowStatus={this.state.Machine} val={this.state.tempElems[0]}/>
                    <Window windowStatus={this.state.Machine} val={this.state.tempElems[1]}/>
                    <Window windowStatus={this.state.Machine} val={this.state.tempElems[2]}/>
                    <div className="bid">
                        {this.state.logValue}
                    </div>
                    <button className={this.state.butt} onClick={this.startSlots}>Грабить казиныч</button>
                </div>
            </div>
        );
    }
}

export default Slots;
