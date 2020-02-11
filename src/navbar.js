import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logo1.svg';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            cor: " ",
            cor2: "",
            cor3: "",
            cor4: "",
            cor5: "#32329C",
            cor6: "#67EBA2",
            cor7: "#67EBA2",
            borda: "30px "
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

    mudacor3() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#160C71" })
        this.setState({ cor4: "#32329C" })
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

    mudacor7() {
        this.setState({ cor: "#32329C" })
        this.setState({ cor2: "#32329C" })
        this.setState({ cor3: "#32329C" })
        this.setState({ cor4: "#32329C" })
        this.setState({ cor5: "#32329C" })
        this.setState({ cor6: "#67EBA2" })
        this.setState({ cor7: "#3CB371" })
    }


    render() {

            return (
                <div>

                    <nav className="navbar navbar-expand-lg navbar-dark p-3 mb-2 bg-white text-dark" id="branco">
                        <p className='logomenu'><img src={logo} className=' logo' /></p>
                        <Link className="logoescrito" to="/home" onClick={this.mudacor0.bind(this)} >Faz um bico</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                <ul className="navbar-nav mx-auto">

                                    <li className="nav-item" >
                                        <Link className="nav-link" to="/home"  onClick={this.mudacor3.bind(this)}  >Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/faq" onClick={this.mudacor5.bind(this)} >Quem somos</Link>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item" >
                                        <Link to="/login" className="btn " id="loginbot" style={{ backgroundColor: this.state.cor2 }} onClick={this.mudacor7.bind(this)}>Entrar</Link>

                                    </li>
                                </ul>
                        </div>
                    </nav>
                </div>
            )
        }
        }





export default Navbar;