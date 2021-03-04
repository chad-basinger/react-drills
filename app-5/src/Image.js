import React, {Component} from 'react'
import './App.css'

class Image extends Component {
    render(){
        return (
            <div>
                <img className='img' src={this.props.url} alt='logo'/>
            </div>
        )
    }
}

export default Image;