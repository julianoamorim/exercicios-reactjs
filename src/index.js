import React from  'react';
import ReactDOM from 'react-dom';
import Aplicacao from './aplicacao';

/*import Button from './button';
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

class App4 extends Component{  //Estado e Ciclo de Vida
    constructor(props){
        super(props)

        this.state = {
            clock: 1000,
            copo: 'Agua'
        }
    }

    componentDidMount(){ //apos renderizar a pagina executa a funcao
        window.setTimeout(() =>{
            this.setState({
                copo: 'suco'
            })
        },3000)
        
    }

    alterarCopo = () => {
        this.setState({   //altera o valor do state
            copo: 'refrigerante1'
        })
        //this.state.copo = 'refrigerante2'
    }

    render(){
        //const {clock, copo} = this.state;
        return(
            <div>
                <h1>{this.state.clock}</h1>
                <button onClick={() => this.alterarCopo()}><h1>{this.state.copo}</h1></button>
            </div>
        )
    }
}
*/
const rootElement = document.getElementById("root");
ReactDOM.render(<Aplicacao/>, rootElement);