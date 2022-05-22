import React from 'react'

export default class Carro extends React.Component{
    constructor(props){
        super(props)
        this.modelo='Golf'
        this.state={ligado:false,velocidadeAtual:0}

        this.ld=this.ligarDesligar.bind(this)
    }

    //Ciclo de vida de um componente

    ligarDesligar(){
        //this.setState({ligado:!this.state.ligado})
        this.setState(
            (state)=>({
                ligado:!state.ligado
            })
        )

    }

    acelerar(){
        this.setState(
            (state,props)=>({
                velocidadeAtual:state.velocidadeAtual+props.fator
            }))
    }

    //chamado quando o componente é criado apos o render
    componentDidMount(){
        console.log('O carro foi criado')
    }

    //chamado TODA VEZ que o componente é atualizado
    componentDidUpdate(){
        console.log('O carro foi atualizado')
    }

    //chamado TODA VEZ que o componente tirado do DOM
    componentWillUnmount(){
        console.log('O carro foi removido')
    }

    render(){
        return(
            <div>
                <h1>Meu carro</h1>
                <p>modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado?"Sim":"Não"}</p>
                <p>Velocidade: {this.state.velocidadeAtual}</p>
                <button onClick={this.ld}>{this.state.ligado?"Desligar":"Ligar"}</button>
                <button onClick={()=>this.acelerar()}>Acelerar</button>

                
            </div>
        )
    }
}