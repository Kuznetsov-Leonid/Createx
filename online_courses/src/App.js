import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Wiew from "./pajes/wiew";
import Loading from "./components/loadin";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect (() =>{
    setTimeout(() =>{
      setIsLoading(false);
    }, 1000)
    
  })
return (
        <>
          <div>
            {isLoading==true?<Loading/>:<Wiew/>}
          </div>
        </>
  );
}

export default App;

