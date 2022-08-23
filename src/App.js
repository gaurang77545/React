import logo from './logo.svg';
import './App.css';
import React from 'react';
function Newf(x)
// COmponent name must start with a capital letter
{
  return <h1>Hello {x.name}<TestApp email='asas@gmail' /></h1>
  // Test App is being used here
}


class TestApp extends React.Component
// Class component
//constructor will be called
//Super will be used to execute parent component
{
  constructor() {//Gets executed
    //Runs only first time
    super();
    this.state = { name: 'Roy', email: 'gaurangshah4@gmail.com', 'phone': 7754050674, open: true }
    //Within same component
  }

  // static getDerivedStateFromProps(props,state)
  // {
  //   return {email:props.email}
  // }
  componentDidMount() {//Automatically runs functions
    console.log('Inside componentDidMount')
    // this.changeEmail()
    this.setState({ email: 'changedemail' })
  }
  //   shouldComponentUpdate()
  //   {//Stop components from rendering
  // return true;
  //   }
  // componentDidUpdate() {
  //   console.log('Inside component Did update')
  //   document.getElementById("updateid").innerHTML = this.state.email
  // }
  // componentWillUnmount()
  // {//When details will be removed from DOM
  // }
  changeEmail = () => {//Arrow function
    //This is a user defined function
    this.setState({ email: 'gaur@' })
    //Use set State to change the value of variable
  }
  unmountcomponent = () => {
    this.setState({ open: false })
  }
  render()
  //Runs automatically
  //After any change happens
  {
    let myunmountmethod;
    if (this.state.open) {
      myunmountmethod = <TestApp2 />
    }
    // let a = 10//We can only create a variable here

    // return <div><h1>Hello {this.state.name} {this.state.email}</h1>
    //   <button onClick={this.changeEmail}>Hello</button>
    //   <h1>{a}</h1>
    //   <h1 id="updateid">Orignal ID</h1>
    // </div>
    //return <div>{myunmountmethod}<button onClick={this.unmountcomponent}>Unmount</button></div>
    return <C3 />
  }
}
function C1(props) {
  const styleObject = { color: "red", fontSize: "10px" }
  //Here for css you gotta use Camel case compared to normal css
  const eventobject = (x, y) => {
    alert(x.type)
  }
  const demofunction = () => {
    console.log("Within demo function")
  }
  //e is type of event like click
  return <div><button onClick={(e) => eventobject(e, "Hello")}>EventButton</button>
    <button onClick={demofunction}>EventFunctionButton</button>
    <h1 style={styleObject}>Welcome to {props.companyname.company}{props.companyname.address} </h1>
  </div>
  //style={{color:"red",fontSize:"20px"}}=>Without using styleObject
}

function C2() {

  const companydetails = { company: "Deloitte India", address: " Delhi" }
  return <div><C1 companyname={companydetails} /></div>
}

function C3() {
  const arr = ["Goa", "Lucknow", "Delhi"]
  console.log("Inside C3")
  return <div><ul>{arr.map((value) => <C4 city={value} />)}</ul></div>
}
function C4(props) {
  return <li>{props.city}</li>
}

class TestApp2 extends React.Component {
  componentWillUnmount() {
    alert("Component will be unmounted")
  }
  render() {
    return <h1>Welcome Aboard</h1>
  }
}

function App() {
  return <div> <Newf name="Gaurang" /><h1>hsaj</h1></div>;
  //name is props we are passing
  //You gotta put / after function name
  // This return the h1 tag using Newf function
  //Function Component
  //We are only returning an h1 tag
}
export default App;
// Exports this file anywhere
//App is the name of function you want to export
