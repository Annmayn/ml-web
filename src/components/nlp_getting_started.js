import React, {Component} from 'react';
import './nlp_getting_started.css';
import axios from 'axios';


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
        let body = [this.state.value];
        axios.post("https://kaggle-deploy.herokuapp.com/nlp-getting-started/predict", {"text":body}).then(response => {
            document.getElementById('prediction').textContent = response.data.result;
        })
        // axios.post("https://kaggle-deploy.herokuapp.com/nlp-getting-started/predict", {"text":body}).then(response => {
        //     console.log("r:",response)
        //     document.getElementById('prediction').textContent = response;
        // })
    }

    render(){
        return (
            <div className="row">
                <div className="column">
                    <h5 className="center">NLP Getting Started</h5>
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