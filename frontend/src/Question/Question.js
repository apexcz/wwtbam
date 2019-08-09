import React, { Component } from 'react';
import axios from 'axios';

class Question extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: null,
        };
    }

    async componentDidMount() {
        const {match :{ params } } = this.props;
        const question = (await axios.get(`http://localhost:8083/questions/${params.questionId}`)).data;
        this.setState({
            question,
        });
    }

    render() {
        const {question} = this.state;
        if (question === null) return <p>Loading...</p>

        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{question.description}</h1>
                        <br/>
                        <h5>Options</h5>
                        {
                            Object.keys(question.options).map((letter ,idx) => {
                                console.log(letter);
                            return (<p className = "lead" key = {letter} > {question.options[letter]} < /p>)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;