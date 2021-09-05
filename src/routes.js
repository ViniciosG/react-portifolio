import React from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom'


import Inicio from "./components/sections/Inicio";
import Sobre from "./components/sections/Service/Service";
import Contato from "./components/sections/Contact/Contact";
import Projetos from "./components/sections/Blog/Blog";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";


const Routes = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
            <Route path={['/','/inicio']} exact component={Inicio}></Route>
                <Route path='/sobre' component={Sobre}></Route>
                <Route path='/contato' component={Contato}></Route>
                <Route path='/projetos' component={Projetos}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Routes;