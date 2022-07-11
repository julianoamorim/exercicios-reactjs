import React from 'react';
import Button from './button'

var hasCostumer = true;

var Botao = <button onClick={mostrarEvento}><h1>Mostrar Evento!</h1></button>

function mostrarEvento(e) {
    console.log(e)
    alert("Evento")
}

//lista ordenada
var listaCliente = [
    {
        id: 1,
        nome: "Juliano Amorim"
    },
    {
        id: 2,
        nome: "Mario Amorim"
    },
    {
        id: 3,
        nome: "Jovenilia Oliveira"
    },
    {
        id: 4,
        nome: "Jose Luiz de Souza"
    },
]

var existeCliente = () => {
    return (
        <div>
            <p>Clique abaixo para ver o historio dos clientes.</p>
            <Button name="Historio Clientes" onClick={() => alert("Existe Cliente!")} />
        </div>
    )
}

var naoExisteCliente = () => {
    return (
        <div>
            <p>Clique abaixo para cadastrar o cliente.</p>
            <Button name="Cadastrar Cliente" onClick={() => alert("Cadastrar Cliente!")}></Button>
        </div >
    )
}

//acessar os nomes e chaves(indice) da lista
var renderCliente = (cliente, index) => {
    return(
        <li key={index}>{cliente.nome}</li>
    )
}

const Aplicacao = () => {
    
    return (
        <div className='teste'>
            <h1>Juliano Amorim - Introdução ao ReactJS</h1>
            <h2>Bem Vindo ao curso!</h2>
            <div>{listaCliente.map(renderCliente)}</div><br/>
            {hasCostumer ? existeCliente() : naoExisteCliente()}<br/>
            <h2>Manipulando Eventos!</h2>
            {Botao}
        </div >
    );
};

export default Aplicacao;