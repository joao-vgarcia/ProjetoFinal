import React, { Component } from 'react';
import "./prestadoresproximos.css";

import homem from '../imagens/homem.png'
import { Link } from 'react-router-dom';

class Prestprox extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="container">
                        <div className="d-block"><br /><br /></div>
                        <h1 className="cath1">Profissionais próximos a você</h1>
                        <h4 className="cath4">Estes são os prestadores de serviços na categoria selecionada</h4>
                    </div>
                    <div className="d-block"><br /><br /></div>

                    <div className="card-columns container">

                        <div className="card">
                            <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            <div className="card-header">Ana Amélia</div>
                            <div className="card-body">Fotografia</div>
                            <div className="card-footer">Distância : 1km<Link to="/perfilprest" className="stretched-link"/></div>
                            
                        </div>

                        <div className="card">
                            <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            <div className="card-header">Bruno Barão</div>
                            <div className="card-body">Fotografia</div>
                            <div className="card-footer">Distância : 1km<Link to="#" className="stretched-link"/></div>

                        </div>
                        
                        <div className="card">
                            <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            <div className="card-header">Carlos Cardoso</div>
                            <div className="card-body">Fotografia</div>
                            <div className="card-footer">Distância : 1km<Link to="#" className="stretched-link"/></div>
                      
                        </div>

                        <div className="card">
                            <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            <div className="card-header">Diego Diostenes</div>
                            <div className="card-body">Fotografia</div>
                            <div className="card-footer">Distância : 1km<Link to="#" className="stretched-link"/></div>
                            
                        </div>

                        <div className="card">
                            <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            <div className="card-header">Elena Elvira</div>
                            <div className="card-body">Fotografia</div>
                            <div className="card-footer">Distância : 1km<Link to="#" className="stretched-link"/></div>
                            
                        </div>

                        <div className="card">
                            <img className="card-img-top img-fluid" src={homem} alt="Card image" />
                            <div className="card-header">Fernanda Francini</div>
                            <div className="card-body">Fotografia</div>
                            <div className="card-footer">Distância : 1km<Link to="#" className="stretched-link"/></div>
                            
                        </div>

                    </div>

                    <div className="d-block"><br /><br /></div>

                </div>
            </div>
        )
    }
}
export default Prestprox