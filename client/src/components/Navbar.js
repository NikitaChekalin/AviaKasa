import React from 'react'
import { NavLink , useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import './Navbar.css'

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    
    
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="header__logo">Авиа-kasa</a> 
                    <nav className="nav">
                        <button className="nav__link"><NavLink className="nav__links" to="/create">Розклад Польотів</NavLink></button>
                        <button className="nav__link"><NavLink className="nav__links" to="/links">Бронювання </NavLink></button>
                        <button className="nav__link"><NavLink className="nav__links" to="/createticket">Додавання Білету </NavLink></button>
                        <button className="nav__link" href="/" onClick={logoutHandler}  to="/"> Вийти </button>
                    </nav>
                </div>
            </div>
        </header>

    )
    } 


    // <ul>
    //     <a href="/" className="brand-logo">Авиакасы</a>      
    //     <li><NavLink to="/create">Создать</NavLink></li>
    //     <li><NavLink to="/links">Розклад Авиакасы</NavLink></li>
    //     <li><a href="#" onClick={logoutHandler}  to="/">Выйти</a></li>                    
    // </ul>