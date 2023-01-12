import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import NotBurger from "./NotBurger.jsx";
import Borscht from "./Borscht.jsx";
import BlueberryPie from "./BlueberryPie.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(


    <React.StrictMode>
        <RouterProvider router={
            createBrowserRouter(
                createRoutesFromElements(
                    <Route path={'/'}>

                        <Route index element={<App/>}/>
                        <Route path={'burger'} element={<NotBurger/>}/>

                        <Route index element={<App/>}/>
                        <Route path={'soup'} element={<Borscht/>}/>

                        <Route index element={<App/>}/>
                        <Route path={'dessert'} element={<BlueberryPie/>}/>
                    </Route>
                )
            )
        }/>
    </React.StrictMode>,
)