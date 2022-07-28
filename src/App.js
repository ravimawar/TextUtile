import React, {useState}  from  'react'
// import './App.css';
//  import About from './componet/About'
import Navbar from './componet/Navbar'
  import Textform from './componet/Textform'
   



function App() {
  const [mode , setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'gray';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};

 
  return (
 <>
  
    
  <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} switch="Enble Dark Mode"/>

  <div className="container my-4" > 
   {/* <About/> */}
        <Textform heading="Enter Text To Anlayz"/> 
  </div>
  
  </>
 );
}

export default App;
