
import React, {useState}  from  'react'

export default function Textform(props){
  
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = ullu.toUpperCase();
    setCont(newText)
}
  const handleItClick =() => {
    console.log('Button Was Click' + ullu);
    let newText = ullu.toItalicCase();
    setCont(newText);
  }
  const handleLoClick =() => {
    console.log('Button Was Click' + ullu);
    let newText = ullu.toLowerCase();
    setCont(newText);
  }
  const handleOnChange =(event) =>{
    console.log('Value Change');  
    setCont(event.target.value);
  }
  const handleClick =(event) =>{
    console.log('Button Was CLick' + ullu);  
    let newText = ullu.toClear();
    setCont(newText);
  }
  const [ullu,setCont] = useState();  
    return(
      <>
      <form>
          <h1>{props.heading}</h1>
        <div className="mb-3">
    <textarea className="form-control" value={ullu} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-danger mx-2" onClick={handleUpClick} > Convert To Upercase</button>
      <button className="btn btn-success mx-2" onClick={handleLoClick} > Convert To Lowercase</button>
      <button className="btn btn-info mx-2" onClick={handleClick} > Clear Text</button>
      <button className="btn btn-dark mx-2" onClick={handleItClick}>Convert to Italic</button>
      <button className="btn btn-secondary mx-2" onClick={handleItClick}>Convert to Bold</button>
      <button className="btn btn-warning mx-2" onClick={handleItClick}>Remove Extra Space</button>




      </form>
      <div className="container my-4">
        <h1>Your Text Summary</h1>
        {/* <p>{ullu.split(" ").length}word and {ullu.length} charcter</p> */}
        {/* <p>{0.008 * ullu.split(" ").length} Minute Take To read</p> */}
        <h2>Preview Your Text</h2>
        <p>{ullu}</p>
      </div>
      </>
    );
}