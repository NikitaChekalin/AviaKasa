import React, { useEffect, useContext,useState } from 'react';
import '../Css/AuthPage.css';

import { ShadulePlane } from '../components/ShadulePlane'
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import {AuthContext} from '../context/AuthContext'
export  const  AuthPage = () => {
    const auth = useContext(AuthContext)
    
    const message = useMessage()
    const {loading, request,error,clearError} =  useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect( () => {
        message(error)
        clearError()
    },[error,message, clearError] )
    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async()=> {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {
            
        }
    }
    const loginHandler = async()=> {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            
        }
    }    
    return(
        <div className='container'>
            <ShadulePlane  className="shadule"/>
                <div className="wrapper">
                    <div className="title">Login / Register</div>
                        <form action="#">
                            <div className="field">
                                <input  
                                type="text" 
                                id='email'
                                name='email'
                                onChange={changeHandler} 
                                value= {form.email}
                                required/>
                                <label>Email Address</label>    
                            </div>
                            
                            <div className="field">
                                <input 
                                type="current-password"
                                name='password'
                                id="password"
                                onChange={changeHandler} 
                                value= {form.password}
                                required/>
                                <label>Password</label>
                            </div>
                                                                
                        
                            <div className="field">
                                <input  onClick={loginHandler} type="submit" disabled={loading}  value="Login"/>
                            </div>
                            <div className="field" >
                                <input onClick={registerHandler}  disabled={loading} type="submit" value="Registration" />
                            </div>
                            <div className="signup-link">Not a member? Go Autorization</div>
                        
                        </form>
                    </div>
                </div>
    )
}
