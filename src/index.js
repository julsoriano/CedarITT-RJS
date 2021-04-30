import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './AppFunc';
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route } from "react-router-dom";

/* Important !!! See https://www.sitepoint.com/react-router-complete-guide/ Implicit Passing of Props
   If the Route tag below has been coded as: <Route path="/" component={App} /></Route>
     it would not pass the match, location and history as props and this program will not work
*/
ReactDOM.render(
  <Router>
      <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
// ReactDOM.render(<App />, document.querySelector('#root'));

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
