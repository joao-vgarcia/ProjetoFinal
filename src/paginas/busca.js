import "./busca.css";                           //importando o css que está dentro do mesmo diretório
import React, { Component } from 'react';  //importando os componentes do react

class Busca extends Component {                 //classe busca
    //método construtor
    constructor() {
        super()
        this.state = {
            profissional: "",
            servico: "",
            data: "",
            local: "",
            detalhe: ""

        }
    }
    //metodos para instanciar os estados /variáveis
    alterarProfissional = e => {
        this.setState({ profissional: e.target.value })
    }
    alterarServico = e => {
        this.setState({ servico: e.target.value })
    }
    alterarData = e => {
        this.setState({ data: e.target.value })
    }
    alterarLocal = e => {
        this.setState({ local: e.target.value })
    }
    alterarDetalhe = e => {
        this.setState({ detalhe: e.target.value })
    }
    //fim dos metodos

    //colocando no console as informações passadas
    submeterForm = e => {
        console.log("Profissional: " + this.state.profissional)
        console.log("Serviço: " + this.state.servico)
        console.log("Data :" + this.state.data)
        console.log("Local:" + this.state.local)
        console.log("Detalhe:" + this.state.detalhe)
        e.preventDefault()
    }

    render() {
        return (
            //div principal
            <div>
                { /* Container azul para fazer o fundo da tela*/}
                <div className="container-fluid conter">                                                         
                     { /* Container azul para fazer o fundo da tela*/}
                    <div className="d-none d-md-block"><br /></div>                         
                    { /* Container azul para fazer o fundo da tela*/}
                    <div className="d-block d-md-block"><br /></div>                        
                    { /* Container azul para fazer o fundo da tela*/}
                    <div className="d-block d-md-block"><br /></div>                        
                   

                    {/* Div com o titulo linkando no css a classe*/}
                    <div className="row">
                        <div className="col-9 mx-auto ">                                                            
                            <h1 className="h1titulo">Descreva o que você precisa e entre em contato com prestadores de serviços proximos a você</h1>
                        </div>
                    </div>

                    {/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}
                    <div className="d-none d-md-block"><br /></div>                         
                    <div className="d-block d-md-block"><br /></div>                        

                    {/**Formulário  inteiro */}
                    <div className="formPesq container">
                        <form onSubmit={this.submeterForm} className="form-group">{/*metodo para aplicar as mudanças no método subeterForm*/}                      
                            <div className="d-none d-md-block"><br /></div><div className="d-block d-md-block"><br /></div>               
                            <div className="form-row">
                                {/**Parte de pesquisa de profissional por categoria */}
                                <label className="col-10 mx-auto texto">Qual profissional?</label>
                                {/*Formulário de input com as opções para ser escolhida */}      
                                <select className="col-10 mx-auto form-control-lg" value={this.state.profissional} onChange={this.alterarProfissional}>{/** Quando selecionado chama o método alterarProfissional, precisa existir os valores com value=** */}
                                    <option value="Encanador">Encanador</option>
                                    <option value="Desenvolvedor">Desenvolvedor</option>
                                    <option value="Faxineira">Faxineira</option>
                                    <option value="Pedreiro">Pedreiro</option>
                                </select>

                            </div>
                            {/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div>

                            {/**Formulário para pesquisa de serviços */}
                            <div className="form-row">

                                <label className="col-10 mx-auto texto">Qual serviço?</label>                               
                                <select className="col-10 mx-auto form-control-lg" value={this.state.servico} onChange={this.alterarServico}>
                                    <option value="pisos">Pisos</option>
                                    <option value="site">Site</option>
                                    <option value="limpeza">Limpeza</option>
                                    <option value="parede">Parede</option>
                                </select>
                                {/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                {/**Atenção, esses formulários precisam ser atualizados
                                * Quando selecionar um profissional deve apenas aparecerem os serviços executados pela categorie
                            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                            </div>
                            
                            <div className="d-none d-md-block"><br /></div>{/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}
                            
                            <div className="form-row">
                                {/**Formulário para colocar uma data  */}
                                <label className="col-10 mx-auto texto">Para quando deseja o serviço?</label>
                                <input className="col-10 mx-auto form-control-lg" type="date" value={this.state.data} onChange={this.alterarData} />

                            </div>

                            <div className="d-none d-md-block"><br /></div>{/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}

                            <div className="form-row">
                                {/**Formulário para local */}
                                <label className="col-10 mx-auto texto">Onde o serviço será realizado?</label>
                                <select className="col-10 mx-auto form-control-lg" value={this.state.local} onChange={this.alterarLocal}>
                                    <option value="Casa">Casa</option>
                                    <option value="apartamento">Apartamento</option>
                                    <option value="jardim">Jardim</option>
                                    <option value="quintal">Quintal</option>
                                </select>

                            </div>
                            <div className="d-none d-md-block"><br /></div>{/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}

                            <div className="form-row">
                                {/**Formulário para entrada de texo, precisa ser validado dentro do banco de dados */}
                                <label className="col-10 mx-auto texto">Detalhe o que você precisa que seja feito</label>
                                <textarea className="form-control col-10 mx-auto " rows="7" onChange={this.alterarDetalhe}></textarea>

                            </div>
                            {/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}
                            <div className="d-none d-md-block"><br /></div><div className="d-block d-md-block"><br /></div>

                            {/**Inputo de botão, tem que ser arrumado para um botão normal ou deixar assim */}
                            <input className="btn botaobusca btn-block col-8 mx-auto" type="submit" value="Continuar" />

                            <div className="d-none d-md-block"><br /></div>
                            <div className="d-block d-md-block"><br /></div>

                        </form>
                    </div>
                    {/**Fim do formulário */}
                    <div className="d-none d-md-block"><br /></div>
                    <div className="d-block d-md-block"><br /></div>
                    <div className="d-block d-md-block"><br /></div>
                    {/*Div para aplicar uma quebra de linha de acordo o tamanho da tela */}
                </div>


            </div>

        )
    }
}

export default Busca //Exportando toda a classe
