import React, { Component } from 'react'; //importanto do react
import "./cadastrese.css";//importando o arquivo css
import { Redirect } from 'react-router-dom'; //importando a função de redirecionar uma página

class Form extends Component {//inicio da classe formulario de cadastro
    //metodo construtor com as variaveis usadas
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            sexo: "",
            celular: "",
            estado: "",
            senha: "",
            redirecionar:false //variavel redirecionar serve para verificar se já foi feito login
        }
    }
    //metodos para instanciar os objetos
    //as funções já estão com o bind(this)
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSexoChange = (event) => {
        this.setState({
            sexo: event.target.value
        })
    }
    handleCelularChange = (event) => {
        this.setState({
            celular: event.target.value
        })
    }
    handleSenhaChange = (event) => {
        this.setState({
            senha: event.target.value
        })
    }
    //fim
    //metodo para redirecionar
    red= e => {
    //quando chama esse metodo ele coloca o redirecionar como true
    //então quando chamar é pq foi feito o cadastro e segue para a página dentro da rota que o redirecionar encaminhar
        this.setState({redirecionar:true})

        e.preventDefault()
    }
    render() {
        if(this.state.redirecionar){
            //Quando rederizar a primeira vez ele vai ver que não foi feito o cadastro false
            //então vai passar para o else
            //quando o cadastro for feito ele redireciona com a rota para a pagina do cliente

            return <Redirect to="/perfilcliente"/>
            //o direcionamento fica dentro do return
        }else{
        return (
            //todo o codigo é renderizado aqui dentro, no final o botão chama os valores
            <div>
                <div className="tudo"> {/**div dentro da div pra não ocorrer erros de render */}
                {/**Primeiro container apenas com o titulo */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="h1cad">Seu cadastro</h1>
                                <h3 className="h3cad">Preencha seu cadastro, leva pouco tempo!</h3>
                            </div>
                        </div>
                    </div>
                    {/**Formulário para fazer o cadastro */}
                    <form className="formulario container">
                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div> <div className="d-block"><br /></div>
                        {/**Linha com o método para salvar nome */}
                        <div className="form-row">

                            <label className="col-10 mx-auto texto">Nome Completo</label>
                            <input type="text"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                className="form-control-lg col-10 mx-auto"
                                placeholder="Nome Completo"
                            />
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**linha para salvar email */}
                        <div className="form-row">
                            <label className="col-10 mx-auto texto ">Email</label>
                            <input type="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                className="form-control-lg col-10 mx-auto"
                                placeholder="E-mail" />
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**Linha para o sexo */}
                        <div className="form-row">
                            <label className="col-10 mx-auto texto">Sexo</label>
                            <select value={this.state.sexo} onChange={this.handleSexoChange} className="col-10 mx-auto form-control-lg">
                                <option value=""></option>
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**Linha para celular */}
                        <div className="form-row">
                            <label className="col-10 mx-auto  texto">Celular</label>
                            <input type="number"
                                value={this.state.celular}
                                onChange={this.handleCelularChange}
                                placeholder=" (XX) XXXXX-XXXX"
                                className="form-control-lg col-10 mx-auto" />
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**Linha para estado */}
                        <div className="form-row">
                            <label className="col-10 mx-auto texto">Estado</label>
                            <select className="form-control-lg col-10 mx-auto">
                                <option value=""></option>
                                
                                <option value="RJ">Rio de Janeiro</option>
                               
                                <option value="SP">São Paulo</option>
                                
                            </select>
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**Linha para o cep
                         * Se usarmos uma api não vamos precisar de muito mais codigos
                         * apenas manipular o json para criar as coisas
                         */}
                        <div className="form-row">
                            <label className="col-10 mx-auto texto">CEP</label>

                            <input type="number"
                                value={this.state.cep}
                                onChange={this.handleSenhaChange}
                                className="form-control-lg col-10 mx-auto" />

                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**Linha para salvar a senha */}
                        <div className="form-row">
                            <label className="col-10 mx-auto texto">Senha</label>
                            <input type="password"
                                value={this.state.senha}
                                onChange={this.handleSenhaChange}
                                className="form-control-lg col-10 mx-auto" />
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div>

                        {/**Devemos validar a senha */}
                        <div className="form-row">
                            <label className="col-10 mx-auto texto">Confirmar Senha</label>
                            <input type="password"
                                className="form-control-lg col-10 mx-auto" />
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>

                        {/**Linha do botão que chama a função
                         * Dentro do botão deve ter todos os metodos para criar um usuário
                         */}
                        <div className="row justify-content-center">
                            <button type="submit" className="btn btn-block botaocad col-10" onClick={this.red.bind(this)}>Continuar</button>
                        </div>

                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>
                         {/**Acaba o form */}
                    </form>


                            {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                    <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block"><br /><br /><br /></div>
                </div>

            </div>
        )
    }}

}
export default Form //exporta a classe