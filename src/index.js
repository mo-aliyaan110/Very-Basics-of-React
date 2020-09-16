import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/footer'

const App = () =>{
    return(
        <div>
            <Header/>
            <h1> My first React app </h1>
            <Footer year="2021" month="January"/>
        </div>
    )
}

ReactDOM.render(<App/> , document.getElementById('root'))