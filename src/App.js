import React from "react";
import Menu from "./components/Menu";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './components/config'
import "./App.scss";
function App() {
  const [user]=useAuthState(auth)
  return ( 
    <div>
      <Menu user={user}/>
    </div>
   );
}

export default App;
