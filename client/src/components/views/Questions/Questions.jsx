import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
          questions: null,
        };
    }

    async componentDidMount() {
        const questions = (await axios.get('http://localhost:8083/questions')).data;
        this.setState({
            questions,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.questions === null && <p>Loading questions...</p>}
                    {
                        this.state.questions && this.state.questions.map(question => (
                            <div key={question.id} className="col-sm-12 col-md-4 col-lg-3">
                                <Link to={`/question/${question.id}`}>
                                    <div className="card text-white bg-success mb-3">
                                        <div className="card-header">Score: {question.point}</div>
                                        <div className="card-body">
                                            <h3 className="card-text">{question.description}</h3>
                                            <p className="card-text">{question.options.A}</p>
                                            <p className="card-text">{question.options.B}</p>
                                            <p className="card-text">{question.options.C}</p>
                                            <p className="card-text">{question.options.D}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Questions;
