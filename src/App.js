
 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import welcomeword from "./welcomeword.png"
import video from "./video.mp4";

function App() {
 
  return (
    <div>

<div className="title">  
 
 <h1 className="title red">Bounahs Aziz
</h1>  

     <br/>  
<div className="imagesinline">
       <img className="imgstyle" src={welcomeword} /> <br/> 

       <img className="imgstyle2" src="/beautyword.png" /> 
       </div>     
</div>  

<video width="100%" height="500px" controls>  
<video src={video} />

</video> 
        </div>
  );
}

export default App;
