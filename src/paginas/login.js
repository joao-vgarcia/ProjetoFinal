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
        } else if(this.state.redirecionarCli) {
            return <Redirect to="/cadastrese"/>
        }else if(this.state.redirecionarPrest){
            return <Redirect to="/cadastroPrest"/>
        }else{
            return (
                    <div className="container-fluid logincont">
                        <div className="d-none d-md-block"><br /></div>













                        <div className="container">



                            <div className="row justify-content-around">



                                <div className="col-sm-12 col-md-6">
                                    <form onSubmit={this.submeterFormLogin} className="form-group" style={{backgroundColor:"white", borderRadius:"15px", maxWidth:"500px"}}>

                                        <div className="form-row justify-content-center">
                                            <h1 className="loginTitulo">Login</h1>
                                        </div>

                                        <div className="form-row justify-content-center">
                                            <div className="input-group mb-3 justify-content-center">
                                                <input className="col-9 form-control-lg" type="email" value={this.state.email} onChange={this.alterarUsername}  placeholder="Digite seu email" /><br/>
                                            </div>
                                            <div className="input-group mb-3 justify-content-center">
                                                <input className="col-9 form-control-lg" type="password" value={this.state.password} onChange={this.alterarPassword} placeholder="Digite sua senha" />
                                            </div>
                                            <div className="input-group-append">
                                                <button className=" btn btn-block envbtn" type="submit" value="Entrar">Entrar</button>
                                            </div>
                                            <div className="d-none d-md-block"><br /></div>
                                            
                                        </div>
                                        <div className="row justify-content-center">
                                            <Link className="esqueci col-8" to="/home"><b>Esqueci minha senha</b></Link>
                                        </div>
                                        <div className="d-none d-md-block"><br /></div>
                                    </form>
                                
                                </div>


                                <div className="col-sm-12 col-md-4">
                                    <form className="form-group" style={{backgroundColor:"white", borderRadius:"15px", maxWidth:"500px"}}>

                                        <div className="form-row justify-content-center">
                                            <h1 className="loginTitulo">Cadastre-se</h1>
                                            
                                        </div>

                                        <div className="form-row justify-content-center">
                                            <div className="input-group col-10 justify-content-center">
                                                <button className=" btn  btn-block redbtn" type="submit" onClick={this.submeterFormPrestador.bind(this)}  value="Entrar">Prestador de serviços</button>
                                            </div>
                                            <div className="input-group col-10 justify-content-center">
                                            <button className=" btn btn-block redbtn" type="submit" onClick={this.submeterFormCliente.bind(this)}value="Entrar">Clientes</button>
                                            </div>
                                            
                                            <div className="d-none d-md-block"><br /></div>
                                            
                                        </div>
                                      
                                        <div className="d-none d-md-block"><br /></div>
                                    </form>
                                
                                </div>
                                
                                    <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>

                                

                                    {/**Div para inserir uma quebra de linha de acordo com o tamanho da tela */}
                                    <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>
                                    {/**Acaba o form */}
                               
                            </div>
                    </div>


























                    <div className="d-none d-md-block"><br /></div><div className="d-block"><br /></div>

                </div>


            )
        }

    }


}

export default Login
