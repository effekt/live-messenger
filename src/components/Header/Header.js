import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { useGlobal } from 'reactn';

const Header = () => {
    const [value] = useGlobal('user');

    return (
        <header id="nav-wrapper">
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <div className="spacer"></div>
                <ul>
                    {
                        value ? <li><NavLink to="/logout" className="nav-link">Log Out</NavLink></li> : <li><NavLink to="/login" className="nav-link">Log In</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;