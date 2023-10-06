
import React, {useContext} from 'react'
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";
import {AppContext} from "./context/index"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './style/App.css';


function App() {

  const context = useContext(AppContext)

  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill ?</h1>
        {context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
      </div>
    </div>
  );
}

export default App;
