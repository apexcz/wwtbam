import React, {Component, Fragment} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Question.css';
import Header from "../../Header/Header";
import { getHomePath } from "../../../Logic";
import Loader from "../../Loader/Loader";

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
        const { question } = this.state;

        return (
            question === null ? <Loader /> :
            <Fragment>
                <Header/>
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{question.description}</h1>
                        <hr/>
                        <h5>Options</h5>
                        <div>
                            {
                                Object.keys(question.options).map((letter ,idx) => {
                                    return (
                                        <div key={letter}>
                                            <div className="diamond-left"/>
                                            <div className="square">
                                                <p className="content p-3">{letter} - {question.options[letter]}</p>
                                            </div>
                                            <div className="diamond-right"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Link to={getHomePath()}>
                    <i className="font-awesome-home fa fa-home"/>
                </Link>
            </Fragment>
        )
    }
}

export default Question;
