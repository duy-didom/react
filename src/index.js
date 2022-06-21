import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './greeting';
import Footer from './greetingfooter';
import MyButton from './button';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
const elem1 = document.getElementById("greeting1");
root.render(
    <React.Fragment>
        <Greeting fullName="DuyNguyen" />
        <br />
        <Greeting fullName="Nguyen Duy" />
        <hr/>
        <Footer copyright ="By Duy Nguyen" nowdate = {Date().toLocaleString()}/>
        <br />
        <MyButton />
    </React.Fragment>
)
reportWebVitals();
