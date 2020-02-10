import React, { Component } from 'react';
import "./perfilprestador.css";

import homem from '../imagens/homem.png'
import { Link } from 'react-router-dom';
import { IoIosStar } from 'react-icons/io';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { MdSchedule } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';


class Perfilprest extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="container">
                        <div className="d-block"><br /><br /></div>
                        <h1 className="presth1">Ana Amélia</h1>
                        <h4 className="presth4">Fotografia</h4>
                    </div>
                    <div className="d-block"><br /><br /></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-3">
                                <img src={homem} className="img-fluid"></img>
                            </div>
                            <div className="col-sm-12 col-md-9">
                                <p>Soy de familia gastronómica y náutica. Amo navegar y transmitir conocimientos. Soy la tercer generación náutica en mi familia. Estudie rendí las habilitaciones de Timonel de yate, Patrón de yate vela motor y actualmente estoy cursando la la carrera de Piloto de yate vela motor (habilitación náutica que permite cruzar el Océano y navegar por todo el mundo sin restricciones).</p>
                                <p><IoIosStar /> 4.5  <MdPlace /> 0.6km <MdSchedule /> Há 3 meses na plataforma <IoIosCheckmarkCircle />Pro</p>
                                <div className="d-none d-sm-none d-md-block d-large-block">
                                    <ul className="list-group list-group-horizontal list-group-flush">
                                        <li className="list-group-item">Photoshop</li>
                                        <li className="list-group-item">Video profissional</li>
                                        <li className="list-group-item">Criação de artes</li>
                                        <li className="list-group-item">Consultoria</li>
                                    </ul>
                                </div>

                                <div className="d-block d-sm-block d-md-none d-large-none">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Photoshop</li>
                                        <li className="list-group-item">Video profissional</li>
                                        <li className="list-group-item">Criação de artes</li>
                                        <li className="list-group-item">Consultoria</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-block"><br /></div>
                    <div className="container">
                        <div className="row">
                            <button type="button" className="btn btn-block col-sm-12 col-md-3 btnSolicitar ">Solicitar orçamento</button>
                        </div>
                    </div>
                    <div className="d-block"><br /><br /></div>
                    <div className="container">
                        <div className="row">
                            <h4 className="presth4">Alguns trabalhos realizados <button type="button" className="btn btnSolicitar" data-toggle="collapse" data-target="#mostrarmais" >Mostrar</button></h4>
                        </div>
                    </div>

                    
                    <div id="mostrarmais" className="collapse">
                        <div className="card-columns container">
                            <div className="card crd">
                                <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            </div>

                            <div className="card crd">
                                <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            </div>

                            <div className="card crd">
                                <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            </div>

                            <div className="card crd">
                                <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            </div>

                            <div className="card crd">
                                <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            </div>

                            <div className="card crd">
                                <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            </div>

                        </div>
                        <button type="button" className="btn btnSolicitar" data-toggle="collapse" data-target="#mostrarmais" >Menos</button>


                    </div>

                    <div className="container">
                        <div className="row">
                            <h4 className="presth4">Avaliações dos clientes</h4>
                        </div>

                        <div className="collapse show" id="l">

                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <p>Cliente nome</p>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <p>Avaliação: <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <p>A Mariana prestou um excelente serviço comigo! As fotos ficaram ótimas e ela soube passar confiança e tranquilidade para mim. Indico com certeza!</p>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <p>Serviços contratados</p>
                                    <ul className="list-group list-group-horizontal">
                                        <li className="list-group-item">Photoshop</li>
                                        <li className="list-group-item">Edição de fotos</li>
                                    </ul>

                                </div>
                            </div>
                            <div className="d-block"><br /></div>
                            <button type="button" className="btn btnSolicitar" data-toggle="collapse" data-target="#clientes" >Mais</button>
                            <div className="d-block"><br /><br /></div>
                        </div>
                        <div className="collapse" id="clientes">

                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <p>Cliente nome</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <p>Avaliação: <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <p>Minha filha fez seu primeiro ensaio com a Mari e adorou! Ela não a deixou desconfortável em nenhum momento. Recomendo muito!!!</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <p>Serviços contratados</p>
                                        <ul className="list-group list-group-horizontal">
                                            <li className="list-group-item">Photoshop</li>
                                            <li className="list-group-item">Edição de fotos</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <p>Cliente nome</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <p>Avaliação: <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /></p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <p>A Mariana é uma excelente profissional e pessoa. Foi super atenciosa durante o ensaio e me manteu informada até o momento da entrega das fotos. Já estamos combinando a próxima sessão!</p>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <p>Serviços contratados</p>
                                        <ul className="list-group list-group-horizontal">
                                            <li className="list-group-item">Photoshop</li>
                                            <li className="list-group-item">Edição de fotos</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>



                    <div className="d-block"><br /><br /></div>

                </div>
            </div>
        )
    }
}
export default Perfilprest