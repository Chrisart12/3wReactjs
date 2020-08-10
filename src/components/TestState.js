import React, { Component } from 'react'

class TestState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: Date.now(),
            myCount: ""
        }
    }

    // start = () => {
    //    let myCount = setInterval(() => {
    //        this.setState({
    //         date: this.state.date + 1
    //        })
    //     }, 1000);
    //   }
  

    start = () => {
        
        this.setState({
            myCount: setInterval(() => {
                this.setState(prevState => ({
                    date: prevState.date + 1
                }))
    
             }, 1000)
        })
      
       }

       

    //   componentWillMount() {
    //       clearInterval(this.myCount)
    //       console.log('je suis dans le component componentWillMount')
    //   }

      componentDidMount() {
        this.start()
      }

    stopTimer = () => {
        console.log("je suis ici")
        clearInterval(this.state.myCount)
    }
      

      myClick = () => {
          console.log('je suis dans la fonction myClick')
      }
    
    render() {
        const {date} = this.state
        return (
            <div className="text-center" >
                <h1>{date}</h1>
                <button  className="btn btn-primary" onClick={this.myClick}>CLIQUER</button>
                <button  className="btn btn-danger" onClick={this.stopTimer}>STOP TIMER</button>
            </div>
        )
    }
}

export default TestState
