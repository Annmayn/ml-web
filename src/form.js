import React, {Component} from 'react';
import './form.css';


class NlpGettingStarted extends Component {
    state = {
        'value': ''
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            'value': e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('prediction').textContent = this.state.value
    }

    render(){
        return (
            <div className="row">
                <div className="column">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="text">Text:</label>
                        <br/>
                        <textarea rows="4" cols="50" id="text" onChange={this.handleChange}/>
                        <br />
    
                        <button>Predict</button>
                    </form>
                </div>
                <div className="column">
                    <label htmlFor="prediction">Prediction:</label>
                    <br/>
                    <textarea rows="4" cols="50" id="prediction"/>
                </div>
            </div>
        )
    }
}

export default NlpGettingStarted