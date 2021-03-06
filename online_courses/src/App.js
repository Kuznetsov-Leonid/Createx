import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/HomeBuild/HomePaje.css';
import './components/CoursesBuild/Courses(Style).css';
import Core from '../src/components/core';
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
            {isLoading==true?<Loading/>:<Core/>}
          </div>
        </>
  );
}

export default App;

