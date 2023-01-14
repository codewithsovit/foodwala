
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import  React from 'react';
import ReactDOM from 'react-dom/client';    
import HomeLayout from './Layout.js'
//const element = React.createElement("h1",{},"Hello world")

const App = ()=> {
    return <HomeLayout/>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);