import React, { Component } from 'react'

class CountOne extends Component {
    constructor(props) {
        super(props)
        this.stopCountOne = null

        this.state = {
            countOne: 0
        }
    }

    addOne = () => {
        this.stopCountOne =  setInterval(() => {

            this.setState({
                countOne: ++this.state.countOne
            })
            // this.setState(prevState => ({
            //     countOne: prevState.CountOne
            // }))

        }, 1000);
        
    }

    stopAddOne = () => {
        clearInterval(this.stopCountOne)
    }

    resetAddOne = () => {
    
        this.setState({
            countOne: 0
        })
    }
    
    render() {
        const { countOne } = this.state

        let resetBtnAddOne;

        if(countOne === 0) {
            resetBtnAddOne = ""
        } else {
            resetBtnAddOne =  <button className="btn btn-info" onClick={this.resetAddTwo} >RESET</button>
        }

        return (
            <div>
                <h1>{countOne} </h1>
                <button className="btn btn-primary" onClick={this.addOne} >ADD 1</button>
                <button className="btn btn-danger" onClick={this.stopAddOne} >STOP</button>
                { resetBtnAddOne}

            </div>
        )
    }
}

export default CountOne
