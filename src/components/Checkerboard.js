import React, { Component } from 'react'
import Square from './Square'

class Checkerboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nbSquare: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            background: "red"
        }
    }

    getColor = (square) => {
        const colors = ["#1e88e5", "#6ab7ff", 
        "#005cb2", "#1976d2"]
    
        const index = square % colors.length
        
        return colors[index]
        
    }
    
    render() {
        const {nbSquare } = this.state;

        const square = nbSquare.map(square =>
            <Square key={square} square={square} 
            background= {this.getColor(square)} />
        )

        return (
            <div className="container text-center" >
                <div style={{ display: "flex", flexWrap: "wrap", 
                    height: "800px", width: "800px", alignContent: "flex-start" }}>
                    {square}

                </div>
                
            </div>
        )
    }
}

export default Checkerboard
