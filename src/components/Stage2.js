import React, { useContext } from 'react';
import { AppContext } from '../context';

//  This component displays the looser of the game
const Stage2 = () => {
    const context = useContext(AppContext);
    console.log(context.state);

    return (
        <>
            <div className="result_wrapper">
            <h3>The looser is:</h3>
            <div>{context.state.result}</div>
            </div>
            <div className="action_button" onClick={() => context.resetGame()}>
                START OVER
            </div>
            <div
                className="action_button btn_2"
                onClick={() => context.generateLooser()}>
                GET NEW LOOSER
            </div>
        </>
    );
};

export default Stage2;
