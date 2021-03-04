import React, {Component} from 'react'
import './App.css'

class Image extends Component {
    constructor(){
        super();
        this.state = {
            cat: './cat.jpg'
        }
    }
    render(){
        return (
            <div>
                <img className='img' src={this.props.cat} alt='logo'/>
            </div>
        )
    }
}

export default Image;