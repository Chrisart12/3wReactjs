import React, { Component } from 'react'

class Square extends Component {
    render() {
        const {square, background } = this.props
        return (
            <div>
                <div style={{ width: "200px",  
                            height: "200px", border: "2px solid #64ffda", backgroundColor: background, 
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "30px"}}>
                    { square }
                </div>
            </div>
        )
    }
}

export default Square
