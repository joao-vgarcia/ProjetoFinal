import "./login.css";
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
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
            redirecionar: false
        }
    }
    alterarUsername = e => {
        this.setState({ email: e.target.value })
        // console.log(this.state.username)
    }
    alterarPassword = e => {
        this.setState({ password: e.target.value })
    }
    submeterForm = e => {
        console.log("email: " + this.state.email)
        console.log("Password: " + this.state.password)
        this.setState({ redirecionar: true })
        e.preventDefault()
    }
    aletrarEspecializacao = (e) =>{
        if(e.target.value == 1){
            this.setState({
                esp1 : "Front-end",esp2:"Back-end",esp3:"Fullstack", categoriaFinal : "informatica"
            })
        }else if(e.target.value == 2){
            this.setState({
                esp1 : "Photoshop",esp2:"Desing web",esp3:"Paint", categoriaFinal:"desing"
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
        if (this.state.redirecionar) {
            return <Redirect to="/perfilcliente" />
        } else {
            return (
                    <div className="container-fluid logincont">
                        <div className="d-none d-md-block"><br /></div>
                        <div className="formPesq container">
                            <div className="row">
                                <div className="col-md-6">
                                    <form onSubmit={this.submeterForm} className="form-group">
                                    <div className="row justify-content-center">
                                        <h1 className="loginTitulo">Login</h1>
                                    </div>
                                    <div className="form-row justify-content-center d-none d-md-block">
                                        <div className="input-group mb-3 justify-content-center">

                                            <input className="col-sm-12 col-md-5 form-control-md" type="email" value={this.state.email} onChange={this.alterarUsername}  id="inputs" placeholder="Digite seu email" /><br/>
                                            </div>

                                            <div className="row">
                                            <input className="col-sm-12 col-md-4 form-control-md" type="password" value={this.state.password} onChange={this.alterarPassword} id="inputs" placeholder="Digite sua senha" />
                                            </div>
                                            <div className="input-group-append">
                                                <button className=" btn envbtn" type="submit" value="Entrar">Entrar</button>
                                            </div>
                                        </div>
                                        <div className="d-none d-md-block"><br /></div>
                                        <div className="row justify-content-center">
                                            <Link className="esqueci col-2" to="/home"><b>Esqueci minha senha</b></Link>
                                        </div>

                                    <div className="form-row d-block d-sm-none">
                                        <input className="col-12  form-control-lg" type="email" value={this.state.email} onChange={this.alterarUsername} placeholder="Digite seu email" />
                                        <div><br /></div>
                                        <input className="col-12  form-control-lg" type="password" value={this.state.password} onChange={this.alterarPassword} placeholder="Digite sua senha" />
                                        <div><br /></div>
                                        <button className="col-12 btn envbtn" type="submit" value="Entrar">Entrar</button>
                                        <div><br /></div>
                                    </div>


                                    <div className="d-none d-md-block"><br /></div>

                                </form>
                                </div>
                                <div className="col-md-6">
                                    <form className="container" style={{ backgroundColor: "white" }}>
                                    <div className="row">
                                        <h1 className="loginTitutlo col-12"> Cadastre-se </h1>
                                    </div>
                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div> <div className="d-block"><br /></div>
                                    {/**Linha com o método para salvar nome */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-3 texto">Nome Completo</label>
                                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} className="form-control-lg col-sm-12 col-md-7" placeholder="Nome Completo" />
                                    </div>
                                    <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de idade */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-3 texto">Data de nascimento</label>
                                        <input type="date" value={this.state.userdate} onChange={this.handleUserdateChange} className="form-control-lg col-sm-12 col-md-7" />
                                    </div>

                                    <div className="d-none d-md-block"><br /></div>
                                    {/**Linha para cadastro de cpf */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-3 texto">CPF</label>
                                        <input type="number" value={this.state.cpf} onChange={this.cpf} className="form-control-lg col-sm-12 col-md-7" placeholder="CPF" />
                                    </div>


                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**linha para salvar email */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-3 texto">Email</label>
                                        <input type="email" value={this.state.email} onChange={this.handleEmailChange} className="form-control-lg col-sm-12 col-md-7" placeholder="E-mail" />
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>

                                    {/**Linha para o sexo */}
                                    <div className="form-row">
                                        <label className="col-sm-12 col-md-3 texto">Sexo</label>
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
                                        <label className="col-sm-12 col-md-3 texto">Celular</label>
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
                                        <label className="col-sm-12 col-md-3 texto">Estado</label>
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
                                        <label className="col-sm-12 col-md-3 texto">CEP</label>

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
                                        <label className="col-sm-12 col-md-3 texto">Senha</label>
                                        <input type="password"
                                            value={this.state.senha}
                                            onChange={this.handleSenhaChange}
                                            className="form-control-lg col-sm-12 col-md-7" />
                                    </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div>
                                    {/**formulário com os switchs para escolher se quer um cadastro de cliene ou prestado de serviços */}
                                        <div className="form-row col-sm-12 col-md-12">
                                            <div className="custom-control custom-switch custom-control-inline">
                                            <input type="radio" className="custom-control-input" id="profissional" name="check" data-toggle='collapse' data-target="#formProf" value="cadPrestador"/>
                                            <label className="custom-control-label textoo" for="profissional">Sou um profissional e quero vender meus serviços</label>
                                        </div>
                                        </div>
                                        <div className="d-none d-md-block"><br /></div>
                                        <div className="form-row col-sm-12 col-md-12 ">
                                            <div className="custom-control custom-switch custom-control-inline">
                                            <input defaultChecked type="radio" className="custom-control-input" id="clieentee" name="check" data-toggle='collapse' data-target="#formProf" value="cadCliente"/>
                                            <label className="custom-control-label textoo" for="clieentee">Sou cliente e quero contratar ótimos profissionais</label>
                                        </div>
                                        </div>

                                        <div id='formProf' className='collapse'>{/**Formulario que colapsa
                                         * caso o usuário deseje ser prestador o formulario aparece, caso contrário ele some
                                         */}

                                            <div className="form-row">
                                                <label className="col-sm-12 col-md-3 texto">Categoria</label>
                                                <select className="form-control-lg col-sm-12 col-md-7" onChange={this.aletrarEspecializacao}>
                                                    <option value={0}></option>
                                                    <option value={1}>Informática</option>
                                                    <option value={2}>Desing</option>

                                                </select>
                                            </div>

                                            <div className="form-row">
                                                <label className="col-sm-12 col-md-3 texto">Especialidade</label>
                                                <select className="form-control-lg col-sm-12 col-md-7" onChange={this.fixarEsp}>
                                                    <option value=""></option>
                                                    <option value={1}>{this.state.esp1}</option>
                                                    <option value={2}>{this.state.esp2}</option>
                                                    <option value={3}>{this.state.esp3}</option>

                                                </select>
                                            </div>
                                        </div>
                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>

                                <div className="row justify-content-center">
                                                <button type="submit" className="btn btn-block botaocad col-10" onClick={this.red.bind(this)}>Continuar</button>
                                            </div>

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>
                                    {/**Acaba o form */}
                                </form>
                                </div>
                            </div>
                        {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                        <div className="d-none d-md-block"><br /><br /><br /></div><div className="d-block"><br /><br /><br /></div>
                    </div>

                </div>


            )
        }

    }


}

export default Login
