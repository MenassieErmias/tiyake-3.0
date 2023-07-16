// React Imports
import { useState } from "react";


// Pages Imports
import Home from "./Pages/Home/Home";




function App() {

  // General App States
  const [loggedIn, setLoggedIn] = useState(false); 


  return (
    <div className="App">
      <Home
        loggedIn = {loggedIn}
        
      />
    </div>
  );
}

export default App;
