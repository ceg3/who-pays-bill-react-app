
import React, {useState, useContext, useRef} from 'react'
import {Button, Form, Alert} from 'react-bootstrap'
import {AppContext} from '../context/index'
import PlayerList from './PlayerList'

const Stage1 = () => {
    const textInput = useRef();
    const [error, setError] = useState([false, '']);
    const context = useContext(AppContext);

  // Validates the input for player name and adds player
  // to context if validated.
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validateInput(value);

        if (validate) {
            setError([false, '']);
            context.addPlayer(value);
            textInput.current.value = '';
        }
    };

    // Validates the input for player name
    const validateInput = (value) => {
        if (value === '') {
        setError([true, 'Sorry, you need to add something']);
        return false;
        }
        if (value.length <= 2) {
        setError([true, 'Sorry, you need 3 char at least']);
        return false;
        }
        return true;
    };

    console.log(context.state);

    return (
        <>
        <Form onSubmit={handleSubmit} className="mt-4">
            <Form.Group>
            <Form.Control
                type="test"
                placeholder="Add player name"
                name="player"
                ref={textInput}
            ></Form.Control>
            </Form.Group>

            {error[0] ? <Alert>{error[1]}</Alert> : null}

            <Button className="miami" type="submit" varient="primary">
            Add Player
            </Button>

            {context.state.players && context.state.players.length > 0 ? (
            <PlayerList />
            ) : null}
        </Form>
        </>
    );
}

export default Stage1