import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/imagens/logo1.svg';
import './Footer.css';
import facebook from '../src/imagens/facebook.svg';
import instagram from '../src/imagens/instagram.PNG';
import youtube from '../src/imagens/youtube.PNG';
import twitter from '../src/imagens/twitter.PNG';
import linkedin from '../src/imagens/linkedin.PNG';
import { MdCopyright } from 'react-icons/md';
class Footer extends Component {
    render() {
        return (
            
                <div className="container-fluid ">
                    <div className="d-none d-sm-none d-md-block d-lg-block">
                    <div className="row ">
                        <div className="col-md-4">
                            <p><MdCopyright /> 2020 Bico</p>
                        </div>
                        <div className="col-md-6" id="logo">
                            <p><img src={logo} className=' logo'/>Faz um bico</p>
                        </div>
                        <div className="col-md-2">
                            <p className='fote'> <img src={facebook} className=' social'/> <img src={instagram} className=' social' /><img src={twitter} className=' social' /><img src={linkedin} className=' social' /><img src={youtube} className=' social' /></p>
                        </div>
                    </div>

                    </div>
                    
                    <div className="d-block d-sm-block d-md-none d-lg-none">
                    <div className="row">
                        <div className="d-block d-sm-block d-md-none col-12">
                            <p className='fote'><MdCopyright /> 2020 Bico</p>
                        </div>
                        </div>
                        <div className="row d-block d-sm-block d-md-none d-lg-none">
                        <div className="d-block d-sm-block d-md-none col-12">
                            <p className='fote'><img src={logo} className=' logo' />Faz um bico</p>
                        </div>
                        </div>
                        <div className="row d-block d-sm-block d-md-none d-lg-none">
                        <div className="d-block d-sm-block d-md-none col-12">
                           <p className='fote'> <img src={facebook} className=' social'/> <img src={instagram} className=' social' /><img src={twitter} className=' social' /><img src={linkedin} className=' social' /><img src={youtube} className=' social' /></p>
                        </div>
                    </div>
                    </div>
                    

                    <hr />

                    <div className="row">
                        <div className="col-6">
                            <Link className="nav-link active mr-lg-4 aas" to="/home">Home</Link>
                        </div>
                        <div className="col-6">
                            <Link className="nav-link active mr-lg-4" to="/faq">Quem somos</Link>
                        </div>
                        
                        <br /><br />
                    </div>
                    
                </div>




        
        )
    }
}

export default Footer;

//colocar codigo a seguir para social da imagem antes de Faz um bico
//<a class="navbar-brand"><img src="" alt="Logo" style="width:40px;"></img></a>

//colocar para fazer os links dentro da navbar
//precisa fazer o impor *nome* from './pagina
//<Link className="nav-link" to="/*nome*" >Contato</Link>
//import facebook from '../src/imagens/facebook.PNG';  //linha 5
//<img src={facebook} className=' social'/> // linha 29
//