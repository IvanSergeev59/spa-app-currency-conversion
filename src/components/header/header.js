import { React } from "react";
import { Link } from "react-router-dom";
import "./header.css"
const Header = () => {    
    return (
        <header className="header">  
            <h3 className="header__h3">          
                <Link className="header__a" to="/">Конвертер валют</Link>
            </h3>
            <div className="header__container">
                <Link  className="header__a" to="/">Главная</Link>
                <Link  className="header__a" to="/current-exchange-rate/">Курс валют</Link>    
            </div>                 
        </header>
        
    )
    
}


export default Header

