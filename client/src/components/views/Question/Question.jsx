import React, {Component, Fragment} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "../../Header/Header";
import './Question.css';

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
            <Fragment>
                <Header />
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{question.description}</h1>
                        <hr/>
                        <h5>Options</h5>
                        <div>
                            {
                                Object.keys(question.options).map((letter ,idx) => {
                                    return (
                                        <Fragment>
                                            <div>
                                                <div className="diamond-left"/>
                                                <div className="square">
                                                    <p className="content p-3" key={letter}>{letter} - {question.options[letter]}</p>
                                                </div>
                                                <div className="diamond-right"/>
                                            </div>
                                        </Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Question;
