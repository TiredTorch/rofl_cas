import React, { Component } from 'react';
import './styles/Ball.scss'

class Ball extends Component {
    advices = [
        "Хз челик", "Это очевидно", "Отлетаешь", 'Зачем спрашиваешь'
    ]

    constructor(props) {
        super(props);
        
        this.state = {
            shake: 'ball__area',
            advice: {
                see: 'ballTextArea see',
                text: 'Загадай'
            }
        }
    }
    

    shake = () => {
        var css1 = (this.state.shake === 'ball__area') ? 'ball__area shake' : 'ball__area';
        var css2 = (this.state.advice.see === 'ballTextArea') ? 'ballTextArea see' : 'ballTextArea';
        
        let temp = {
            see: css2,
            text: ''
        }
        this.setState({advice: temp})
        
        this.setState({shake : css1});
    }
    showAdvice = () => {
        let temp = {
            see: this.state.advice.see,
            text: this.advices[Math.floor(Math.random() * (this.advices.length))],
        }
        this.setState({advice: temp})
    }

    render() {
        return (
            <div className='Ball'>
                <div className={this.state.shake} onClick={() => {
                    this.shake();
                    setTimeout(() => {
                        this.shake();
                        this.showAdvice();
                    }, 1000)
                }}>
                    <div className={this.state.advice.see}>
                        {this.state.advice.text}
                    </div>
                </div>
            </div>
        );
    }
}

export default Ball;
