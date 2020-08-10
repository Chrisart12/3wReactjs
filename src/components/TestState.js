import React, { Component } from 'react'

class TestState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            date: Date.now()
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
        let myCount = setInterval(() => {
            this.setState(prevState => ({
                date: prevState.date + 1
            }))

         }, 1000);
       }

       

      componentWillMount() {
          clearInterval(this.myCount)
          console.log('je suis dans le component componentWillMount')
      }

    
    
      componentDidMount() {
        this.start()
      }
    
    render() {
        const {date} = this.state
        return (
            <div>
                <h1>{date}</h1>
            </div>
        )
    }
}

export default TestState
