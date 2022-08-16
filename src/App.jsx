
import './App.css';

import Routes from './Routes/index'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.min.css"
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer/>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
