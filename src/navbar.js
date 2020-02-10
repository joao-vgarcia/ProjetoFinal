import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            cor: " ",
            cor2: "",
            cor3: "",
            cor4: "",
            cor5: "",
            cor6: "",
            cor7: "",
            borda: "45px "
        }
    }

    mudacor0(){
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#160C71" })
    }
    mudacor1() {
        this.setState({ cor: "#160C71" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#160C71" })
    }
    mudacor2() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#160C71" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#160C71" })
    }
    mudacor3() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#160C71" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#160C71" })
    }
    mudacor4() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#160C71" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#160C71" })
    }
    mudacor5() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#160C71" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#160C71" })

    }
    mudacor6() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#24D372" })
        this.setState({ cor7: "#160C71" })
    }
    mudacor7() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#1A09BC" })
    }

    
    render() {
     
            return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
                        <Link className="navbar-brand py-2" to="/home" onClick={this.mudacor0.bind(this)} >Faz um<br /> bico</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active mr-lg-4" to="/busca" onClick={this.mudacor1.bind(this)} style={{ backgroundColor: this.state.cor, borderRadius: this.state.borda }}>Contrate um serviço</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active mr-lg-4" to="/home"  onClick={this.mudacor2.bind(this)} style={{ backgroundColor: this.state.cor2, borderRadius: this.state.borda }}>Como funciona</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active mr-lg-4" to="/home"  onClick={this.mudacor3.bind(this)} style={{ backgroundColor: this.state.cor3, borderRadius: this.state.borda }}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active mr-lg-4" to="/categorias" onClick={this.mudacor4.bind(this)} style={{ backgroundColor: this.state.cor4, borderRadius: this.state.borda }}>Categorias</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active mr-lg-4" to="/faq" onClick={this.mudacor5.bind(this)} style={{ backgroundColor: this.state.cor5, borderRadius: this.state.borda }}>Perguntas frequentes</Link>
                                    </li>
                                </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item" >
                                    <Link to="/login" className="btn " id="loginbot" style={{ backgroundColor: this.state.cor7 }} onClick={this.mudacor7.bind(this)}>Login</Link>
                                    <Link to="/cadastrese" className="btn" id="cta" style={{ backgroundColor: this.state.cor6 }} onClick={this.mudacor6.bind(this)}>Cadastre-se</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            )
        }
        }
        




export default Navbar;