import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import Practice from './Practice/App';
import Async from './Async/Async';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const container =  document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(<Async/>);

