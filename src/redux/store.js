let store = {
    _state: {
        userName: 'dfgdfg',
        userMoney: ''
    },
    setName (name) {
        this._state.userName = name;
    },

    setMoney(money) {
        this._state.userMoney = money;
    },

    getName () {return this._state.userName},
    getMoney () {return this._state.userMoney},
}

export default store;