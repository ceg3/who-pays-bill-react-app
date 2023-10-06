import React, {useContext} from 'react'
import { AppContext } from '../context/index';

// This component was added to make Stage1 component look cleaner
const PlayerList = () => {

    const context = useContext(AppContext);
    const {state, deletePlayer, next} = context

    const classNames = `list-group-item d-flex
    justify-content-between
    align-items-center list-group-item-action`;

    const content = state.players.map((player, idx) => (
        <li key={idx} className={classNames}>
            {player}
            <span className="badge badge-danger" onClick={() => deletePlayer(idx)}>
            X
            </span>
        </li>
    ));

    return (
        <>
        <hr />
        <div>
            <ul className="list-group">
                {content}
            </ul>
            <div className="action_button" onClick={() => next()}>
                NEXT
            </div>
            </div>
        </>
    );
}

export default PlayerList