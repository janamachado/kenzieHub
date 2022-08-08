
import './App.css';

import Routes from './Routes/index'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <div className="App">

        <>
        <ToastContainer/>
          <Routes />
        </>

    </div>
  );
}

export default App;
