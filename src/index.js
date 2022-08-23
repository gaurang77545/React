import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const a = 10
const newelement = <h1>Hello {2 + 2}{a}</h1>//With JSX.Allow HTML in react file
//2+2 gives 4 so you can pass 4 inside h1 tag
//You can pass any valid html expression in {}
const olist = <ol><li>Name</li><li>Age</li></ol>
const divelement = <div><p>Hello</p><p>World</p></div>
// If we have multiple p tags we must have one parent tag
const root = ReactDOM.createRoot(document.getElementById('root'));
const newelement2 = React.createElement("h1", {}, "newproject")//Without JSX.Takes time
//new project is paased into h1 tag.Second argument is optional
//Whole HTML code must me rendered in one parent element and passed into root.render
const fragementele = <><h1 className='test'>Hello</h1><h1>World</h1></>
// Test in index.css
//If we don't want to use parent tag we can use fragement .We don't wanna use div we use an empty tag
//If we create div we use some space
const man = 10
var value = "Hello"
if (man <= 3) {
  value = "Good"
} else {
  value = "bad"
}
const condele = <div>{value}</div>
const condele2 = <div>{man == 10 ? 'Login' : 'Logout'}</div>
// You can write expressions as well inside {}
//   {/* We are executing App function from App.js */}
root.render(
  //condele2
  <React.StrictMode>
    <App />


  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
