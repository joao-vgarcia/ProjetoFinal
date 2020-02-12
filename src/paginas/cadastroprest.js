import React, { Component } from 'react'; //importanto do react
import "./cadastroprest.css";//importando o arquivo css
import { Redirect } from 'react-router-dom'; //importando a função de redirecionar uma página

class Form extends Component {//inicio da classe formulario de cadastro
    //metodo construtor com as variaveis usadas
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            sexo: "",
            celular: "",
            estado: "",
            senha: "",
            userdate: "",
            cpf: "",
            cep: "",
            categoria:0,
            esp1:"",
            esp2:"",
            esp3:"",
            categoriaFinal :"",
            especializacao :"",
            redirecionar: false,
            redirecionarCli: false,
            redirecionarPrest : false
        }
    }
    alterarUsername = e => {
        this.setState({ email: e.target.value })
        // console.log(this.state.username)
    }
    alterarPassword = e => {
        this.setState({ password: e.target.value })
    }
    submeterFormLogin = e => {
        
        this.setState({ redirecionar: true })
        e.preventDefault()
    }
    submeterFormPrestador = e =>{
        this.setState({redirecionarPrest : true})
    }
    submeterFormCliente = e =>{
        this.setState({redirecionarCli : true})
    }
    aletrarEspecializacao = (e) =>{
        if(e.target.value == 1){
            this.setState({
                esp1 : "Front-end",esp2:"Back-end",esp3:"Fullstack", categoriaFinal : "informatica"
            })
        }else if(e.target.value == 2){
            this.setState({
                esp1 : "Photoshop",esp2:"Design web",esp3:"Paint", categoriaFinal:"design"
            })
        }


    }

    fixarEsp = e =>{
        this.setState({especializacao : e.target.value})
    }
    cpf = (event) => {
        this.setState({
            cpf: event.target.value
        })
    }
    cep = (event) => {
        this.setState({
            cep: event.target.value
        })
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleUserdateChange = (event) => {
        this.setState({
            userdate: event.target.value
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
    red = e => {
        //quando chama esse metodo ele coloca o redirecionar como true
        //então quando chamar é pq foi feito o cadastro e segue para a página dentro da rota que o redirecionar encaminhar
        this.setState({ redirecionar: true })

        e.preventDefault()
    }
    render() {
        if(this.state.redirecionar){
            //Quando rederizar a primeira vez ele vai ver que não foi feito o cadastro false
            //então vai passar para o else
            //quando o cadastro for feito ele redireciona com a rota para a pagina do cliente

            return <Redirect to="/perfilprest"/>
            //o direcionamento fica dentro do return
        }else{
        return (
            //todo o codigo é renderizado aqui dentro, no final o botão chama os valores
            <div>
                <div className="tudo "> {/**div dentro da div pra não ocorrer erros de render */}
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
                    <div className="mx-auto">
                                    <form className=" formulario container-fluid" style={{ backgroundColor: "white" }}>
                                    <div className="d-none d-md-block"><br /></div>
                                   
                                   
                                    {/**Linha com o método para salvar nome */}
                                    <div className="form-row">
                                         <div className="d-none d-md-block"><br /></div>
                                        <label className="col-sm-12 col-md-5 texto">Nome Completo</label>
                                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} className="form-control-lg col-sm-12 col-md-7" placeholder="Nome Completo" />
                                    </div>
                                    <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de idade */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Data de nascimento</label>
                                        <input type="date" value={this.state.userdate} onChange={this.handleUserdateChange} className="form-control-lg col-sm-12 col-md-7" />
                                    </div>

                                    <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de cpf */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">CPF</label>
                                        <input type="number" value={this.state.cpf} onChange={this.cpf} className="form-control-lg col-sm-12 col-md-7" placeholder="CPF" />
                                    </div>


                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**linha para salvar email */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Email</label>
                                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control-lg col-sm-12 col-md-7" placeholder="E-mail" />
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Linha para o sexo */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Sexo</label>
                                        <select value={this.state.sexo} onChange={this.handleSexoChange} className="col-sm-12 col-md-7 form-control-lg">
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
                                        <label className="col-sm-12 col-md-5 texto">Celular</label>
                                        <input type="number"
                                            value={this.state.celular}
                                            onChange={this.handleCelularChange}
                                            placeholder=" (XX) XXXXX-XXXX"
                                            className="form-control-lg col-sm-12 col-md-7" />
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Linha para estado */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Estado</label>
                                        <select className="form-control-lg col-sm-12 col-md-7">
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
                                        <label className="col-sm-12 col-md-5 texto">CEP</label>

                                        <input type="number"
                                            value={this.state.cep}
                                            onChange={this.cep}
                                            className="form-control-lg col-sm-12 col-md-7"
                                            placeholder="XXXXX-XXX" />

                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Linha para salvar a senha */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-5 texto">Senha</label>
                                        <input type="password"
                                            value={this.state.senha}
                                            onChange={this.handleSenhaChange}
                                            className="form-control-lg col-sm-12 col-md-7" />
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>
                                    {/**formulário com os switchs para escolher se quer um cadastro de cliene ou prestado de serviços */}
                                      

                                        <div id='formProf'>{/**Formulario que colapsa
                                         * caso o usuário deseje ser prestador o formulario aparece, caso contrário ele some
                                         */}

                                            <div className="form-row">
                                                <label className="col-sm-12 col-md-5 texto">Categoria</label>
                                                <select className="form-control-lg col-sm-12 col-md-7" onChange={this.aletrarEspecializacao}>
                                                    <option value={0}></option>
                                                    <option value={1}>Informática</option>
                                                    <option value={2}>Design</option>

                                                </select>
                                            </div>
                                            <div className="d-none d-md-block"><br /></div>

                                            <div className="form-row">
                                                <label className="col-sm-12 col-md-5 texto">Especialidade</label>
                                                <select className="form-control-lg col-sm-12 col-md-7" onChange={this.fixarEsp}>
                                                    <option value=""></option>
                                                    <option value={1}>{this.state.esp1}</option>
                                                    <option value={2}>{this.state.esp2}</option>
                                                    <option value={3}>{this.state.esp3}</option>

                                                </select>
                                            </div>
                                        </div>
                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
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

            </div>
        )
    }}

}
export default Form //exporta a classe