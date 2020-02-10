import React, { Component } from 'react';
import "./perfilcliente.css";

import homem from '../imagens/homem.png'
import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdSchedule } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';


class Perfilcliente extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="container">
                        <div className="d-block"><br /><br /></div>
                        <h1 className="presth1">Seu perfil</h1>

                    </div>
                    <div className="d-block"><br /><br /></div>

                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="clienteh4 card-tittle">Seu nome aqui</h4>
                                        <h4 className="clienteh4 card-text"><IoIosStar /> 4.5</h4>
                                        <hr />
                                        <h4 className="clienteh4 card-text">Confirmado</h4>
                                        <h4 className="clienteh4 card-text"><IoIosCheckmarkCircle /> Email</h4>
                                        <h4 className="clienteh4 card-text"><IoIosCheckmarkCircle /> Celuar</h4>
                                    </div>
                                </div>
                            </div>


                            <div className="col-sm-12 col-md-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="clienteh3 card-title">Detalhes</h3>
                                        <h4 className="clienteh4 card-text">Primeiro nome:</h4>
                                        <p>Seu nome</p>
                                        <h4 className="clienteh4 card-text">Sobrenome:</h4>
                                        <p>Seu sobrenome</p>
                                        <h4 className="clienteh4 card-text">Nascimento:</h4>
                                        <p>DD/MM/AAAA</p>
                                        <h4 className="clienteh4 card-text">Sexo:</h4>
                                        <p>Feminino</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                    <h3 className="clienteh3 card-title">Contato</h3>
                                        <h4 className="clienteh4 card-text">Celular:</h4>
                                        <p>(11)91234-5678</p>
                                        <h4 className="clienteh4 card-text">Local:</h4>
                                        <p>Osasco-SP</p>
                                        <h4 className="clienteh4 card-text">Email:</h4>
                                        <p>email@email.com</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="d-block"><br /></div>

                    <div className="container">
                        <div className="row justify-content-between">
                            <button type="button" className="btn btn-block col-sm-12 col-md-3 btnCancelar">Cancelar</button>
                            <button type="button" className="btn btn-block col-sm-12 col-md-3 btnSalvar">Salvar</button>
                        </div>
                    </div>
                    <div className="d-block"><br /><br /></div>
                </div>
            </div>
        )
    }
}
export default Perfilcliente