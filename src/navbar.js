import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logo1.svg';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            cor5: "white",
            cor6: "white",
            cor7: "white",
            borda: "30px ",
            fonte5 : "#32329C",
            fonte6 : "#32329C",
            fonte7:"#32329C"
        }
    }

    mudacor0(){
      
        this.setState({ cor5: "white", fonte5 : "#32329C" })
        this.setState({ cor6: "white", fonte6: "#32329C" })
        this.setState({ cor7: "white", fonte7: "#32329C" })
    }

    mudacor3() {
        
        this.setState({ cor5: "#67EBA2", fonte5:"#32329C" })
        this.setState({ cor6: "white", fonte6: "#32329C" })
        this.setState({ cor7: "white", fonte7: "#32329C" })
    }

    mudacor5() {
     
        this.setState({ cor5: "white" , fonte5:"#32329C"})
        this.setState({ cor6: "#67EBA2", fonte6: "#32329C" })
        this.setState({ cor7: "white", fonte7: "#32329C" })

    }

    mudacor7() {
       
        this.setState({ cor5: "white" , fonte5: "#32329C"})
        this.setState({ cor6: "white" , fonte6: "#32329C"})
        this.setState({ cor7: "#67EBA2", fonte7 : "#32329C" })
    }


    render() {

            return (
                <div>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-white text-dark" id="branco">
                        <p className='logomenu'><img src={logo} className=' logo' /></p>
                        <Link className="logoescrito" to="/home" onClick={this.mudacor0.bind(this)} >Faz um bico</Link>
                        <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#collapsibleNavbar"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
                                <ul className="navbar-nav mx-auto">

                                    <li className="nav-item" >
                                        <Link className="nav-link" to="/home" style={{backgroundColor:this.state.cor5, borderRadius: this.state.borda, color: this.state.fonte5}}  onClick={this.mudacor3.bind(this)}  >Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/faq" style={{backgroundColor:this.state.cor6, borderRadius: this.state.borda, color: this.state.fonte6}} onClick={this.mudacor5.bind(this)} >Quem somos</Link>
                                    </li>
                                    <li className="nav-item" >
                                        <Link to="/login" className="nav-link" style={{ backgroundColor: this.state.cor7, borderRadius: this.state.borda, color: this.state.fonte7}} onClick={this.mudacor7.bind(this)}>Entre ou cadastre-se</Link>

                                    </li>
                                </ul>
                        </div>
                    </nav>
                </div>
            )
        }
        }





export default Navbar;