import React from 'react'
import { Switch, Route ,Redirect } from 'react-router-dom'
import { LinksPage } from './Pages/LinksPage'
import {ShadulePlanePage } from './Pages/ShadulePlanePage'

import {AuthPage} from './Pages/AuthPage'
import { CreateTicket } from './Pages/CreateTicket'


export const useRouters = isAuthenticated => {
    if(isAuthenticated) {
        return(
            <Switch>
                <Route path="/links" exact>
                    <LinksPage/>     
                </Route>
                
                <Route path="/create" exact>
                    <ShadulePlanePage />     
                </Route>
                
                <Route path="/createticket" exact>
                    <CreateTicket/>     
                </Route>
                
                
                
                <Redirect to="/create"/>
            </Switch>
        )   
    }
    return (
        <Switch>
            <Route path="/"exact >
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )

}