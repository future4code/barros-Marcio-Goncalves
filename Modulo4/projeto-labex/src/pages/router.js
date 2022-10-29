import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./homePage/index";
import AdminPage from "./AdminHomePage/index";
import CreateTripPage from "./CreateTripPage/index";
import ApplicationFormPage from "./ApplicationFormPage/index";
import ListTripsPage from "./ListTripsPage/index";
import LoginPage from "./LoginPage/index";
import TripDetailsPage from "./TripDetailsPage/index";
import HomePage from "./homePage/index";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/Home' element={<HomePage/>}/>
                <Route path='/Admin' element={<AdminPage/>}/>
                <Route path='/CriarViagem' element={<CreateTripPage/>}/>
                <Route path='/CadastroDeViagem' element={<ApplicationFormPage/>}/>
                <Route path='/ListaDeViagens' element={<ListTripsPage/>}/>
                <Route path='/Login' element={<LoginPage/>}/>
                <Route path='/DetalhesDaViagem' element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router