import React, { Component } from 'react'; //importando react
import './faq.css'; //importando estilos css
import {GoChevronDown} from "react-icons/go" //icones do react importados

class FAQ extends Component { //classe faq
//sem método construtor ainda
    render() {
        return (
            <div> {/**div completa */}

                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block"><br /><br /><br /></div>

                {/**container para armazenar as perguntas */}
                <div className='container-fluid'>

                    {/**linha apenas para o cabeçalho */}
                    <div className="row justify-content-center">
                        <div className="d-none d-md-block"><br /><br /><br /></div>
                        <div className="col-12">
                            <h1 className="h1faq">Perguntas frequentes</h1>
                        </div>
                    </div>

                    {/**coloca quebra de linha dependendo do tamanho da tela */}
                    <div className="d-block"><br /><br /><br /></div>

                    {/**Linha do botão
                     * Daqui pra baixo cada linha é um botão
                     */}
                    <div className="row justify-content-center">
                        <div className="col-9">
                            {/**Botão collapse
                             * Quando clica o botão expande
                             */}
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#pq"><p>Por que usar o Faz um bico?<GoChevronDown className="float-right"/></p></button>
                             {/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
                              * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                              * Precisamos arrumar as perguntas frequentes
                              * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                              * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                              */}
                            <div id="pq" class="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                        <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#confiavel"><p>O serviço é confiável?<GoChevronDown className="float-right"/></p></button>

                            <div id="confiavel" class="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                        <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#profissional"><p>Como contrato um porfissional?<GoChevronDown className="float-right"/></p></button>

                            <div id="profissional" class="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                        <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#servicos"><p>Como ofereço meus serviços?<GoChevronDown className="float-right"/></p></button>

                            <div id="servicos" class="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                        <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#senha"><p>Esqueci minha senha, o que eu faço?<GoChevronDown className="float-right"/></p></button>

                            <div id="senha" class="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                        <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#pagar"><p>Preciso pagar para usar o serviço?<GoChevronDown className="float-right"/></p></button>
                            <div id="pagar" class="collapse">
                                Lorem ipsum dolor text....
                            </div>
                        </div>
                    </div>

                    <hr />
                    

                </div>

                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-block"><br /><br /><br /></div><div className="d-none d-md-block"><br /><br /><br /></div>


            </div>



        )
    }
}
export default FAQ; //exporta a classe faq

