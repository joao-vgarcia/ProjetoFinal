import "./login.css";
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
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
        this.setState({redirecionar:true})
        e.preventDefault()
    }


    render() {
        if(this.state.redirecionar){
            return <Redirect to="/home"/>
        }else{
            return (

                <div>
    
                    <div className="container-fluid logincont">
                        <div className="d-none d-md-block"><br /></div>
                        <div className="d-block d-md-block"><br /></div>
                        <div className="d-block d-md-block"><br /></div>
                        <div className="row">
                            <div className="col-5 mx-auto ">
                                <h1 className="loginTitulo">Login</h1>
                            </div>
                        </div>
                        <div className="d-none d-md-block"><br /></div>
                        <div className="d-block d-md-block"><br /></div>
    
                        <div className="formPesq container contt">
                            <form onSubmit={this.submeterForm} className="form-group">
                                <div className="d-none d-md-block"><br /></div>
                                <div className="d-block d-md-block"><br /></div>
                                <div className="form-row">
    
                                    <label className="col-10 mx-auto texto">Email</label>
                                    <input className="col-10 mx-auto form-control-lg" type="email" value={this.state.email} onChange={this.alterarUsername} placeholder="Digite seu email" />
    
                                </div>
                                <div className="d-none d-md-block"><br /></div>
                                <div className="form-row">
    
                                    <label className="col-10 mx-auto texto">Senha</label>
                                    <input className="col-10 mx-auto form-control-lg" type="password" value={this.state.password} onChange={this.alterarPassword} placeholder="Digite sua senha" />
    
                                </div>
                                <div className="d-none d-md-block"><br /></div>
                                <div className="d-block d-md-block"><br /></div>
    
                                <div className="row">
                                    <button className="enviar btn envbtn col-5 mx-auto" type="submit" value="Entrar">Entrar</button>
                                </div>
                                <div className="d-none d-md-block"><br /></div>
                                <div className="d-block d-md-block"><br /></div>
                                <div className="row justify-content-right">
                                    <Link className="esqueci col-sm-12 col-md-12 mx-auto" to="/home"><b>Esqueci minha senha</b></Link>
                                </div>
                                <div className="d-none d-md-block"><br /></div>
                                <div className="d-block d-md-block"><br /></div>
    
    
    
                            </form>
    
                        </div>
                        <div className="d-none d-md-block"><br /></div>
                        <div className="d-block d-md-block"><br /></div>
                    </div>
                </div>
    
            )
        }
        
    }


}

export default Login
