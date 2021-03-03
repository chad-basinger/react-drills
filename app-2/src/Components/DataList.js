import React, {Component} from 'react'

class DataList extends Component {
    constructor(){
        super();

        this.state = {
            foods: ['ice cream', 'pizza', 'candy corn', 'pickles', 'corn dogs']
        };
    }

    render(){
        let foodsList = this.state.foods.map((e, index) => {
            return <h2 key={index}>{e}</h2>
        })
        return (
            <div className= 'App'>{foodsList}</div>
        )
    }
}

export default DataList;