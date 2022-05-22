import React,{State, useState} from 'react'
import './App.css'

//tabela
const tabelaIMC=()=>{
  return(
    <table border='1' style={{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Classificação</th><th>IMC</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo do peso</td>
          <td>Abaixo de 18,5</td>
        </tr>
        <tr>
          <td>Peso Normal</td>
          <td>Entre 18,5 a 24,9</td>
        </tr>
        <tr>
          <td>Sobrepeso</td>
          <td>Entre 25 a 29,9</td>
        </tr>
        <tr>
          <td>Obesidade grau |</td>
          <td>Entre 30 a 34,9</td>
        </tr>
        <tr>
          <td>Obesidade grau ||</td>
          <td>Entre 35 a 39,9</td>
        </tr>
        <tr>
          <td>Obesidade grau ||| ou Mórbida</td>
          <td>Maior que 40</td>
        </tr>
      </tbody>
    </table>
  )
}



//Componente (coletar peso)
const fpeso=(p,sp)=>{
  return(
    <div>
      <label>Peso</label>
      <input type='text' value={p} onChange={(e)=>sp(e.target.value)}></input>
    </div>
  )
}

//Componente (coletar altura)
const faltura=(a,sa)=>{
  return(
    <div>
      <label>Altura</label>
      <input type='text' value={a} onChange={(e)=>sa(e.target.value)}></input>
    </div>
  )
}

//Função que calcula o IMC
const fcalcular=(p,a,sr)=>{
  const calc=()=>{
    sr(p/(a*a))
  }
  
  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

//Componente para mostrar o resultado
const fresultado=(r)=>{
  return(
    <div>
      <p>Resultado: {r}</p>
    </div>
  )
}

export default function App(){
  const[peso,setPeso]=useState(0)
  const[altura,setAltura]=useState(0)
  const[resultado,setResultado]=useState(0)

  return(
    <div id='container'>
      <h1>Calcule seu IMC</h1>
      <div id='divinput'>
      {fpeso(peso,setPeso)}
      {faltura(altura,setAltura)}
      </div>
      {fcalcular(peso,altura,setResultado)}
      <div id='divresultado'>{fresultado(resultado)}</div>
      {tabelaIMC()}
    </div>
  )
}