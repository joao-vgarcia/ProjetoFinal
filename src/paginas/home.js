import React, { Component } from 'react'; //importando componentes do reac
import './home.css'; //importanto estilos pelo css
import { IoIosSearch } from 'react-icons/io'; //importanto icone
//importando imagens pelo diretório de imagens
import seguranca from '../imagens/seguranca.svg'
import mapa from '../imagens/mapa.svg'
import okicone from '../imagens/okicone.svg'
import backk from '../imagens/Background.svg'
import homem from '../imagens/homem.png'
import mulher from '../imagens/mulher.svg'
import android from '../imagens/android.svg'
import ios from '../imagens/ios.svg'
//fim da importação das imagens
class Home extends Component { //criando a classe
    //sem método construtor ainda

    render() {
        return (
            <div> {/**Div que recebe todas as divs */}

                {/**Primeiro container */}
                <div className="container-fluid justify-content-center" >
                    {/**primeira linha com os textos */}
                    <div className="row" id="background">
                        <div className="col-sm-12 col-md-12 col-lg-7">
                            <h1 id="he1" alt="Contrate prestadores de serviços na sua comunidade e fortaleça a economia local">Contrate prestadores de serviços na sua comunidade <br/>e fortaleça a economia local</h1>

                            {/**Quebra de linha mesmo dentro de uma linha
                             * De acordo com a tela aparece a quebra de linha ou não
                             */}
                            <div className="d-none d-md-block"><br /><br /><br /></div>

                            <h2 id="he2">Digite o serviço que precisa e entre em contato com prestadores de serviços da sua região, direto do seu celular</h2>

                            {/**Quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /><br /><br /></div>

                            {/**Formulário para ter o que o cliente está procurando
                             * precisa de ajustes
                             */}
                            <form>
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Do que você precisa?" id="precisa" name="precis" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" >< IoIosSearch /></span>
                                    </div>
                                </div>
                            </form>
                            {/**Fim do formulário */}

                            {/**Quebra de linha de acordo com o tamanho da tela */}
                            <div className="d-none d-md-block"><br /><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>

                            {/**Subtitulos com a imagem e texto */}
                            <h2 id="he2"><img src={seguranca} className="img-fluid" /> Negociação pelo app</h2>


                            <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>


                            <h2 id="he2"><img src={mapa} className="img-fluid" />  Prestadores perto de você</h2>


                            <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>


                            <h2 id="he2"><img src={okicone} className="img-fluid" />   Rápido e fácil de usar</h2>


                            <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block d-sm-block d-md-none"><br /></div>

                        </div>
                        {/**Fim da coluna da esquerda dentro da linha 1 */}

                        {/**Coluna da direita com imagem dentro da linha 1 */}
                        <div className="col-md-12 col-lg-5 d-sm-none d-md-block">
                            <div className="d-block d-sm-block d-md-none"><br /></div>

                            <img src={backk} className="img-fluid" />

                        </div>
                    </div>

                    {/**Fim da primeira linha */}
                </div>


                {/**container */}
                <div className="container-fluid">

                    {/**Quebra de linha de acordo com o tamanho da tela */}
                    <div className="d-none d-md-block"><br /></div><div className="d-none d-md-block"><br /></div>

                    {/**Linha 2 */}
                    <div className="row">

                        <div className="col-12">
                            {/**texto centralizado */}
                            <h1 className="text-center funciona" id="section1">Como funciona</h1>
                        </div>
                    </div>
                </div>
                {/**Fim do container */}


                {/**container */}
                <div className="container">
                    {/**container da linha 1 */}
                    <div className="row justify-content-around">
                        {/**coluna da esquerda */}
                        <div className="col-sm-12 col-md-4 cartao"id="cartao">
                            <p className="num">1</p>
                            <p className="titulo">Cadastre-se</p>
                            <p >Seja você prestador ou cliente, é preciso realizar um rápido cadastro para a segurança de todos os usuários</p>
                        </div>
                        {/**coluna da direita */}
                        <div className="col-sm-12 col-md-4 cartao">
                            <p className=" num">2</p>
                            <p className=" titulo">Busque por um serviço</p>
                            <p className="">Navegue entre as diversas categorias de serviços no app ou procure por algo específico</p>
                        </div>
                    </div>
                </div>
                {/**fim do containe linha 1 */}

                {/**conteiner linha 2 igual o de cima */}
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-sm-12 col-md-4 cartao">
                            <p className=" num">3</p>
                            <p className=" titulo">Negocie com um prestador</p>
                            <p className="">Conecte-se com prestadores pertos de você negocie o serviço direto pelo app</p>
                        </div>
                        <div className="col-sm-12 col-md-4 cartao">
                            <p className=" num">4</p>
                            <p className=" titulo">Tudo pronto</p>
                            <p className="">Depois de negociar você poderá marcar date e horário para o serviço acontecer e realizar o pagamento pelo app</p>
                        </div>
                    </div>
                </div>
                {/**fim do container */}

                <br />{/**quebra de linha fixa */}


                {/**container de 2 linha */}
                <div className="container-fluid">
                    {/**linha azul */}
                    <div className="row seguro align-items-center">
                        {/**colunas da esquerda com quebra de linha de acorda com a tela */}
                        <div className="col-sm-12 col-md-7" >

                            <h1 className="seguro" id="titulofac"> Seguro e confiável</h1>
                            <h2 className="textoseguro">Todo o processo de negociação é feito pelo app, o que garante a segurança dos usuários contra possíveis fraudes</h2>
                            <h2 className="textoseguro">Além disso, prestadores e clientes são avaliados uns pelos outros, aumentando a confiabilidade nas negociações!</h2>
                        </div>
                        {/**coluna da direita com imagem */}
                        <div className="col-md-5">
                            {/**imagem que some em telas menores */}
                            <div className="d-none d-md-block"><img src={homem} className="img-fluid imgseguro" /></div>

                        </div>
                    </div>

                    {/**linha verde */}
                    <div className="row rapido align-items-center" >

                        {/**coluna esquerda com imagem  */}
                        <div className="col-md-5">
                            <div className="d-none d-md-block"><img src={mulher} className="img-fluid" /></div>

                        </div>
                        {/**coluna da esquerda com linhas responsivas */}
                        <div className="col-sm-12 col-md-7 rapido" >

                            <h1 id="titulofac">Rápido e fácil de usar</h1>
                            <h2 className="textorapido">Com poucas ações você consegue buscar e contratar prestadores de serviços na sua região</h2>
                            <h2 className="textorapido">Também é possível filtrar profissionais por distância, serviços oferecidos e mais!</h2>

                        </div>
                    </div>{/**fim da linha verde */}


                </div>{/**fim das duas linhas */}

                {/**container final */}
                <div className="container">

                    {/**linha unica */}
                    <div className="row">
                        {/**coluna da esquerda com uma imagem que some em telas pequenas */}
                        <div className="col-md-6">
                            <div className="d-none d-md-block"><img src="https://image.freepik.com/fotos-gratis/mao-segurando-o-dispositivo-de-smartphone_135649-95.jpg" className="img-fluid" /></div>

                        </div>
                        {/**colunas da direita com linhas responsivas */}
                        <div className="col-sm-12 col-md-6">
                            <div className="d-none d-md-block"><br /><br /><br /> <br /><br /><br /></div>

                            <br />{/**quebra de linha fixa */}

                            <h1 id="baixar"><center>Baixe nosso aplicativo</center></h1>
                            <hr />{/**quebra de linha com um traço */}
                            <h2 className="textobaixar">Faça o Download do app e contrate os serviços que precisa, sem complicações</h2>
                            <h2 className="textobaixar">Disponível para Android e iOS</h2>
                            {/**uma linha dentro de uma linha com duas imagens fixas */}
                            <div className="row">
                                <div className="col-6"><img src={ios} className="img-fluid imagembaixar" /></div>
                                <div className="col-6"><img src={android} className="img-fluid imagembaixar" /></div>
                            </div>







                        </div>

                    </div>

                </div>


            </div>



        )
    }
}
export default Home; //exportando a classe
