import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Header from '../components/Header'
import Create from '../components/Create'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Help from '../components/Help'
import ErrorPage from '../components/ErrorPage'

const AppRouter = () =>(

        <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path='/' component={Dashboard} exact={true} />
        <Route path='/create' component={Create}/>
        <Route path='/help' component={Help}/>
        <Route path='/edit/:id' component={Edit}/>
        <Route component={ErrorPage}/> 
        </Switch>
        </div>
        </BrowserRouter>
)

export default AppRouter