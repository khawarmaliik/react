import React, {Component} from 'react';
import './App.css';
import LoginForm from "./Component/LoginForm";
import axios from 'axios';

class App extends Component {

  getEmployee = (e) => {
    
    let params = {
      userName : e.target.elements.username.value,
      password : e.target.elements.password.value
    }
    console.log(`Username is: ${params.username} and Passowrd is : ${params.password}`);

    axios.post('http://localhost:8085/Authentication/authenticate',params,
     {
        'Content-Type': 'application/json'
      })
  }

  render(){
  return (
    <div className="App">
    <header className="App-header">Login From Here</header>
    <LoginForm getEmployee={this.getEmployee}/>
    </div>
  );
}
}
export default App;