import React, { Fragment } from  'react';
import ReactDOM from 'react-dom';
import Button from './button'
import "./style.css"

const element = 'Digital Innovation'
const element2 = <h1>Olá Turma</h1>

function soma(a,b){
    alert(a+b);
}

function primeiroJSX(){
    return(
        <div className='teste'>
            Juliano Amorim - Introdução ao ReactJS
            <h1>Soma: {soma(10,20)}</h1>
        </div>
    )
}

const App = () => {
    return  (
        <div className='App'>
            Olá Mundo {primeiroJSX()}
        </div>
    )
}

function App2(){
    return(
        <div>
            {element}
            {element2}
        </div>   
    )
}

const App3 = () => {
    return(
        <div className='App'>
            Hello World!
            <Button onClick={() => soma(10,20)} name="Juliano Amorim"/>
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App3/>, rootElement)