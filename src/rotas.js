import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./App";
import Home from './paginas/home';
import FAQ from "./paginas/faq";
import cadastrase from "./paginas/cadastrese";
import busca from "./paginas/busca";
import login from "./paginas/login";
import categorias from "./paginas/categorias";
import prestadoresproximos from "./paginas/prestadoresproximos";
import perfilprest from "./paginas/perfilprestador";
import perfilcliente from "./paginas/perfilcliente"




function Routes() {
  return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home}/>
        <Route path="/faq" exact component={FAQ}/>
        <Route path="/cadastrese" exact component={cadastrase}/>
        <Route path="/busca" exact component={busca}/>
        <Route path="/login" exact component={login}/>
        <Route path="/categorias" exact component={categorias}/>
        <Route path="/prestadoresproximos" exact component={prestadoresproximos}/>
        <Route path="/perfilprest" exact component={perfilprest}/>
        <Route path="/perfilcliente" exact component={perfilcliente}/>
        
       
    </Switch>
  );
}

export default Routes;
