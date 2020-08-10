import React, { Component } from 'react'

 class ListDragon extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              choice: "toto"
         }
     }
     
    render() {
        return (
            <div>
                 <ul>
                        <li>Apalala</li>
                        <li>Balaur</li>
                        <li>Bolla</li>
                        <li>Nessie</li>
                    </ul>
            </div>
        )
    }
}

export default ListDragon
