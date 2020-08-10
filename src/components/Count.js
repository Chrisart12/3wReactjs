import React, { Component } from 'react'


class Count extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            countOne: 0,
            countTwo: 0
        }
    }

    addOne = () => {
        this.stopCountOne =  setInterval(() => {

            this.setState({
                countOne: ++this.state.countOne
            })

        }, 1000);
        
    }

    incrementTwo = () => {
        this.stopCountTwo = setInterval(() => {
            this.setState(prevState => ({
                countTwo: prevState.countTwo + 2
            }))
            
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

    resetAddTwo = () => {
        this.setState({
            myCountTwo: 0
        })
    }

    stopAddTwo = () => {
        clearInterval(this.stopCountTwo)
    }
    
    render() {
        
        const { countOne } = this.state
        const { countTwo } = this.state

        let resetBtnAddOne;

        if(countOne === 0) {
            resetBtnAddOne = ""
        } else {
            resetBtnAddOne =  <button className="btn btn-info" onClick={this.resetAddTwo} >RESET</button>
        }

        let resetBtnAddTwo;
        if(countTwo === 0) {
            resetBtnAddTwo = ""
        } else {
            resetBtnAddTwo =  <button className="btn btn-info" onClick={this.resetAddTwo} >RESET</button>
        }

       

        return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <h1>{countOne} </h1>
                    <button className="btn btn-primary" onClick={this.addOne} >ADD 1</button>
                    <button className="btn btn-danger" onClick={this.stopAddOne} >STOP</button>
                    {resetBtnAddOne}
                </div>
                <div>
                    <h1>{countTwo} </h1>
                    <button className="btn btn-primary" onClick={ this.incrementTwo } >ADD 2</button>
                    <button className="btn btn-danger" onClick={this.stopAddTwo} >STOP</button>
                    {resetBtnAddTwo}
                </div>
            </div>
        )
    }
}

export default Count
