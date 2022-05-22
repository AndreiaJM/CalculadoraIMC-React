import React from 'react'

export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            curso:'Curso de React',
            canal:'CFB cursos',
            ativo:true,
            nome:this.props.nomeAluno
        }
        let ld=this.ativarDesativar.bind(this)
    }

    //função para manipular o state
    ativarDesativar(){
        this.setState(
            state=>({ativo:!state.ativo})
        )
    }


    componentDidMount(){
        console.log("O componente foi criado")
    }
    componentDidUpdate(){
        console.log('O componente foi atualizado')
    }
    componentWillUnmount(){
        console.log('O componente foi removido')
    }

    render(){
        return(
            <>
            <h1>Componentes de classe</h1>
            {/*sem o bind*/}
            <button onClick={()=>this.ativarDesativar()}>{this.ativo?'Desativar':'Ativar'}</button>
            {/*com o bind*/}
            <button onClick={this.ld}>{this.ativo?"Desligar":"Ligar"}</button>
            </>
        )
    }
}