import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import Congrat from './Congrat';

const Input = (props) => {
    const [guessWord, setGuessWord] = useState('');

    const contest = props.success ? (
        <Congrat success={props.success} />
    ) : (
        <Form>
            <Form.Group controlId="guessWord">
                <Form.Label>Guess Word :</Form.Label>
                <Form.Control 
                    data-test='input'
                    type="text" 
                    placeholder="Enter your guess word" 
                    value={guessWord}
                    onChange={(e) => setGuessWord(e.target.value)}
                    />
            </Form.Group>
            <Button data-test='submit' variant="primary" type="submit">
              Submit
            </Button>
        </Form>
    );

    return(
        <div data-test='component-input'>
            {contest}
        </div>
    );
}

const mapStateToProps = ({success}) => {
    return {success};
}

export default connect(mapStateToProps)(Input);