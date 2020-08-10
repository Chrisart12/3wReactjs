import React, { Component } from 'react'

class CountTwo extends Component {
    constructor(props) {
        super(props)

        this.stopCountTwo = null

        this.state = {
            myCountTwo: 0
        }
    }

    incrementTwo = () => {
        this.stopCountTwo =  setInterval(() => {

            this.setState(prevState => ({
                myCountTwo: prevState.myCountTwo + 2
            }))
            
        }, 1000);

    }

    resetAddTwo = () => {
        this.setState({
            myCountTwo: 0
        })
    }

    stopAddTwo = () => {
        clearInterval(this.stopCountTwo)
    }
    
    render() {
        
        const { myCountTwo } = this.state
        let resetBtnAddOne;
        if(myCountTwo === 0) {
            resetBtnAddOne = ""
        } else {
            resetBtnAddOne =  <button className="btn btn-info" onClick={this.resetAddTwo} >RESET</button>
        }
        return (
            <div>
                <h1>{myCountTwo} </h1>
                 <button className="btn btn-primary" onClick={ this.incrementTwo } >ADD 2</button>
                <button className="btn btn-danger" onClick={this.stopAddTwo} >STOP</button>
                 {  resetBtnAddOne }
            </div>
        )
    }
}

export default CountTwo
