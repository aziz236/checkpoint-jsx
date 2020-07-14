
 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import welcomeword from "./welcomeword.png"


function App() {
 
  return (
    <div>

<div className="title">  
 
 <h1 className="title red">Bounahs Aziz
</h1>  

     <br/>  

       <img className="imgstyle" src={welcomeword} alt="Welcome" /> 
       <br/> 
       <img className="imgstyle2" src="/beautyword.png" alt="Beauty" /> 
          
</div>  

<video width="100%" height="500px" controls>  
<source src="video.mp4" type="video/mp4"/>
  
 

</video> 
        </div>
  );
}

export default App;

