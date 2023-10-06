import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

const AppContext = React.createContext()


//  This component contains context storage and
//  the logic for this game.
function AppProvider({children}) {

    const initialState = {
        stage: 1,
        players: [],
    };

    const [state, setState] = useState(initialState)

    const addPlayer = (name) => {
        const newState = {...state}
        newState.players.push(name)
        setState(newState);
    };

    const deletePlayer = (idx) => {
        const newState = { ...state };
        newState.players.splice(idx, 1);
        setState(newState);
    };

    const next = (idx) => {
        const { players } = state;

        if (players.length < 2) {
        toast.error('You need more than one player', {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
        });
        } else {
            const newState = { ...state };
            newState.stage = 2;
            newState.result =
                newState.players[
                    Math.floor(Math.random() * newState.players.length)
                ];
            setState(newState);
        }
    };

    const generateLooser = () => {
        const { players } = state;
        const newState = { ...state };
        newState.result = players[Math.floor(Math.random() * players.length)];
        setState(newState);
    };

    const resetGame = () => {
        setState({
            stage: 1,
            players: [],
            result: '',
        });
    };


    return (
        <>
            <AppContext.Provider
            value={{
                state,
                addPlayer,
                deletePlayer,
                next,
                generateLooser,
                resetGame,
            }}
            >
            {children}
            </AppContext.Provider>
            <ToastContainer />
        </>
    );
}
export default AppProvider;
export {AppContext};