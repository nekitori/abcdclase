import React from 'react'
//Routes o rutas
import * as routes from './route.js'

// User
import Home from '../Components/Home.jsx'
import Login from '../Components/Login.jsx'
import SignUp from '../Components/SignUp.jsx'
import PrimerComponente from '../Components/PrimerComponente.jsx'
import SegundoComponente from '../Components/SegundoComponente.jsx'
import TercerComponente from '../Components/TercerComponente.jsx'


const RoutesCom = [
    {
        route: routes.SIGNUP,
        components: < SignUp/>
    },
    {
        route: routes.LOGIN,
        components: < Login/>
    },
    {
        route: routes.HOME,
        components: <Home/>
    },
    {
        route: routes.PRIMERCOMPONENTE,
        components: <PrimerComponente/>
    },
    {
        route: routes.SEGUNDOCOMPONENTE,
        components: <SegundoComponente/>
    },
    {
        route: routes.TERCERCOMPONENTE,
        components: <TercerComponente/>
    }
]
export default RoutesCom