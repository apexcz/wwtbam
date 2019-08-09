import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class Question2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: null,
        };
    }

    async componentDidMount(){
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
            <Button className="btn-option">A Options</Button>
        );
    }
}

export default Question2;