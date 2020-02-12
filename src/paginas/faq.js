import React, { Component } from 'react'; //importando react
import './faq.css'; //importando estilos css
import { GoChevronDown } from "react-icons/go" //icones do react importados
import jvg from "../imagens/jvg.png"
import camilam from "../imagens/camilam.PNG"
import jenifer from "../imagens/djenifer.PNG"
import vinicius from "../imagens/vinicius.PNG"
import yasmin from "../imagens/yasmin.PNG"

class FAQ extends Component { //classe faq
    //sem método construtor ainda
    render() {
        return (
            <div> {/**div completa */}

                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-block"><hr /></div>
                {/**container de quem somos com os cards missão visao e valores */}
                <div className="container ">
                    <h1>Quem somos?</h1>
                    <div className="container">
                        {/**container da linha 1 */}
                        <div className="row justify-content-around">
                            {/**coluna da esquerda */}
                            <div className="col-sm-12 col-md-3 cartao">
                                <p className="num">Missão</p>
                                <p className="titulo">Comunidades</p>
                                <p >Fortalecer economias locais por meio da oferta e demanda de prestações de serviços nas comunidades.</p>
                            </div>
                            {/**coluna do meio */}
                            <div className="col-sm-12 col-md-3 cartao">
                                <p className=" num">Visão</p>
                                <p className=" titulo">Prosperidade</p>
                                <p >Ser referência nas prestações de serviços das cidades brasileiras, com o objetivo de inspirar comunidades a construir um futuro com economias locais mais integradas e prósperas.</p>
                            </div>
                            {/**coluna da direita */}
                            <div className="col-sm-12 col-md-3 cartao">
                                <p className=" num">Valores</p>
                                <p className=" titulo">Empoderar</p>
                                <p >Empoderar comunidades; Facilitar as relações profissionais nas cidades brasileiras; Atender demandas locais; Divulgar prestadores de serviços regionais; Desburocratizar prestações de serviços.</p>
                            </div>
                        </div>
                    </div>
                </div>







                <div className="d-block"><hr /></div>
                {/**container do onde estamos com os perfis do linkedin */}
                <div className="container ">
                    <h1>Onde estamos?</h1>
                    <div className="container">
                        {/**container da linha 1 */}
                        <div className="row justify-content-around">
                            {/**coluna da esquerda camila */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={camilam} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Camila Moraes</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/camila-moraes-208311157/" target="blank" className="btn btn-primary">Perfil linkedin</a>
                                </div>
                            </div>
                            {/**coluna do centro jenifer */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={jenifer} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Djenifer Rezende</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/djenifer-rezende-31706096/" target="blank" className="btn btn-primary">Perfil linkedin</a>
                                </div>
                            </div>
                            {/**coluna final joao */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={jvg} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">João Vitor Garcia</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-garcia-b4a952126/" target="blank" className="btn btn-primary">Perfil linkedin</a>
                                </div>
                            </div>
                            {/**coluna esquerda vinicius */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={vinicius} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Vinicius Gonçalves</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/vncsgonca23/" target="blank" className="btn btn-primary">Perfil linkedin</a>
                                </div>
                            </div>
                            {/**coluna final yasmin */}
                            <div className="card" style={{ width: "330px", marginTop: "20px" }}>
                                <img className="card-img-top" src={yasmin} alt="Card image" />
                                <div className="card-body">
                                    <h4 className="card-title">Yasmin Lira</h4>
                                    <p className="card-text">Estudante de programação Recode-PRO</p>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>React Native</li>
                                        <li>Nodejs</li>
                                        <li>SQL - MySQL</li>
                                        <li>HTML | CSS</li>
                                        <li>Bootstrap 4</li>
                                    </ul>

                                    <a href="https://www.linkedin.com/in/yasmimlira/" target="blank" className="btn btn-primary">Perfil linkedin</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>






                {/**container para armazenar as perguntas */}
                <div className="d-block"><br /></div>
                <div className='container'>

                    {/**linha apenas para o cabeçalho */}
                    <div className="row justify-content-center">
                        <div className="d-none d-md-block"><br /><br /><br /></div>
                        <div className="col-12">
                            <h1 className="h1faq">Perguntas frequentes</h1>
                        </div>
                    </div>

                    {/**coloca quebra de linha dependendo do tamanho da tela */}
                    <div className="d-block"><hr /></div>

                    {/**Linha do botão
                     * Daqui pra baixo cada linha é um botão
                     */}
                    <div className="row justify-content-center">
                        <div className="col-9">
                            {/**Botão collapse
                             * Quando clica o botão expande
                             */}
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#pq"><p>Por que usar o Faz um bico?<GoChevronDown className="float-right" /></p></button>
                            {/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
                              * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                              * Precisamos arrumar as perguntas frequentes
                              * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                              * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                              */}
                            <div id="pq" className="collapse">
                                <p>Porque somos uma empresa que busca atender as necessidades
nossos clientes com excelência e sempre priorizando a qualidade
e rapidez nas prestações, tendo em vista, o fortalecimento econômico
de sua comunidade pois você irá contratar um prestador de qualidade
e o mais próximo possível de você.</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#confiavel"><p>O serviço é confiável?<GoChevronDown className="float-right" /></p></button>

                            <div id="confiavel" class="collapse">
                                <p> Sim. Todas as negocioações e transações acontecem dentro da
nossa rede. Protegida e garantida para que você, usuário,
tenha seu problema resolvido sem precisar se preocupar com
demais burocrácias.Fazemos e pensamos isso para garantirmos a melhor
das experiências em prestação de serviços!  </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#profissional"><p>Como contrato um porfissional?<GoChevronDown className="float-right" /></p></button>

                            <div id="profissional" class="collapse">
                                <p>Primeiro, cadastre-se em nosso site e escolha a opção "Quero ser um cliente". Insira suas informações básicas e específicas
para entendermos quais são suas necessidades. E assim, após tudo ser preenchido e aprovado
você estará pronto(a) para pesquisar e selecionar quais serviços ou profissionais quer.   </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#servicos"><p>Como ofereço meus serviços?<GoChevronDown className="float-right" /></p></button>

                            <div id="servicos" class="collapse">
                                <p> Primeiro, cadastre-se em nosso site e escolha a opção "Quero ser um prestador". Insira suas informações básicas e específicas
para entendermos quais são os serviços que você quer prestar. E assim, após tudo ser preenchido e aprovado você estará pronto(a)
para ser contratado(a).  </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#senha"><p>Esqueci minha senha, o que eu faço?<GoChevronDown className="float-right" /></p></button>

                            <div id="senha" class="collapse">
                                <p> Você deverá acessar a página Entrar e clicar no link "Esqueci minha senha" localizado abaixo do espaço de email e senha. Deverá informar
o email cadastrado e em seguida receberá um email em sua caixa de entrada com o novo link para cadastrar uma nova senha.  </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="row justify-content-center">
                        <div className="col-9">
                            <button className="btn btn-block" type="button" data-toggle="collapse" data-target="#pagar"><p>Preciso pagar para usar o serviço?<GoChevronDown className="float-right" /></p></button>
                            <div id="pagar" class="collapse">
                                <p>Sim. Você será taxado(a) por uma porcetagem fixa quando contratar ou prestar um serviço e realizar ou receber o pagamento. Mas não se preocupe é
apenas um valor simbólico para mantermos um serviço bom e de qualidade para você usuário.   </p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    {/**Acabou as linhas de botão */}

                </div>

                {/**coloca quebra de linha dependendo do tamanho da tela */}
                <div className="d-block"><br /><br /><br /></div><div className="d-none d-md-block"><br /><br /><br /></div>


            </div>



        )
    }
}
export default FAQ; //exporta a classe faq

