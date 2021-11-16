import React, { Component } from 'react';
import './styles/Slots.scss'
import Window from './SlotMachineWindow/Window'

class Slots extends Component {
    elems = [
        'http://placekitten.com/200/400', 
        'http://placekitten.com/300/400', 
        'http://placekitten.com/1000/1000',
        'http://placekitten.com/500/300', 
        'http://placekitten.com/600/300'
    ]

    constructor(props) {
        super(props);
        
        this.state = {
            Machine: "Window notWorked",
            butt: '',
            logValue: 'Ставка = 20$',
            tempElems: [
                'http://placekitten.com/100/300',
                'http://placekitten.com/100/300',
                'http://placekitten.com/100/300'
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
            this.setState({logValue: '3 в ряд! Получите 40$.'})
        }else if(this.state.tempElems[0] === this.state.tempElems[1] || this.state.tempElems[2] === this.state.tempElems[1]){
            this.setState({logValue: '2 в ряд! Получите 30$.'})
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
                    <button className={this.state.butt} onClick={this.startSlots}>Крутить автомат</button>
                </div>
            </div>
        );
    }
}

export default Slots;
