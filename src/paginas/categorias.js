import React, { Component } from 'react'; //importanto os componentes
import "./categorias.css"; //importando css
import { IoIosSearch } from 'react-icons/io'; //importando os icones pelo react-icons
import mulher from '../imagens/mulher.svg' //importando uma imagem
import { Link } from 'react-router-dom'; //importando o link

class Categorias extends Component { //classe
    //sem método construtor ainda
    //render apenas
    render() {
        return (
            <div> {/**Div com tudo */}
                <div className=""> {/**Div de redundancia */}

                    {/**Primeiro container com os titulos  */}
                    <div className="container">

                    {/**div para adicionar quebra de linha de acordo com a tela */}
                    <div className="d-block"><br /><br/></div> 

                        <h1 className="cath1">Várias categorias perto de você</h1>
                        <h4 className="cath4">Não encontrou o que buscava? <br className="d-block d-sm-block d-md-none" />Digite na barra abaixo:</h4>

                        {/**!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                         * Precisamos adicionar a maneira de pesquisar aqui
                         * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                         */}
                        <div className="input-group">
                            <input type="search" className="form-control col-lg-3 col-md-12" placeholder="Do que você precisa?" id="precisa" name="precis" />
                            <div className="input-group-prepend">
                                <span className="input-group-text" >< IoIosSearch /></span>
                            </div>
                        </div>
                    </div>
                    {/**Fim do form */}

                    {/**div para adicionar quebra de linha de acordo com a tela */}
                    <div className="d-block"><br /><br/></div>


                    {/**div com as imagens dentro dos cards
                     * Dentro dessa div temos que importar as imagens de acordo com a categoria
                     * dentro do link precisar indicar a categoria escolhida
                     */}
                    <div className="card-columns container">
                        {/**Primeiro card o link não conecta */}
                        <div class="card">
                            {/**imagem dentro do card top */}
                            <img class="card-img-top img-fluid" src={mulher} alt="Card image"/>
                            <div class="card-body">
                                {/**link precisa ligar dentro da rota com o local destinado para a classe */}
                                <Link to="#" class="btn stretched-link">Eletricidade</Link>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top img-fluid" src={mulher} alt="Card image"/>
                            <div class="card-body">
                                <Link to="#" class="btn stretched-link">Limpeza</Link>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={mulher} alt="Card image"/>
                            <div class="card-body">
                                <Link to="#" class="btn stretched-link">Obras</Link>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={mulher} alt="Card image"/>
                            <div class="card-body">
                                <Link to="#" class="btn stretched-link">Mecânica</Link>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top img-fluid" src={mulher} alt="Card image"/>
                            <div class="card-body">
                                <Link to="#" class="btn stretched-link">Inofrmática</Link>
                            </div>
                        </div>
                        {/**ultimo card */}
                        <div class="card">
                            {/**precisa arrumar a imagem */}
                            <img class="card-img-top img-fluid" src={mulher} alt="Card image"/>
                            <div class="card-body">
                                {/**o link está vinculada a uma página */}
                                <Link to="/prestadoresproximos" class="btn stretched-link">Fotografia</Link>
                            </div>
                        </div>
                    </div>
                    <div className="d-block"><br /><br/></div>{/**div para adicionar quebra de linha de acordo com a tela */}

                </div>
            </div>
        )
    }
}
export default Categorias //exportando