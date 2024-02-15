
import Navbar from './components/Navbar';
// import About from './About'; 
import TextForm from './components/TextForm';
import React , {useState} from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


  function App() {
    const [mode,setMyMode]=useState("light");
    const [alert,setAlert]=useState(null)

    const showAlert=(messege,type)=>{
      setAlert({
        msg : messege ,
        type : type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
    }

    const toggleMode=()=>{
      if(mode==="light"){
        setMyMode("dark") ;
        document.body.style.backgroundColor = "#042743" ;
        showAlert("Dark Mode has Enabled  " , "success : ") ;
        document.title = "Textutils : Dark Mode" ;
      }else{
        setMyMode("light") ;
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode has Enabled  " , "success : ") ;
        document.title = "Textutils : Light Mode" ;
      }
    }

    return (
      <>
      {/* // <Router> */}
          <Navbar  title="TextUtils"  mode={mode} toggleMode={toggleMode} about="About" home ="Home" />
          <Alert alert= {alert} />
        
          <div className="container">
          {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>

          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
      
      
      </>
    );
  }

export default App;
