import { React, Component } from "react";
import {connect} from 'react-redux';
import {variant2} from '../../actions'
import Button from 'react-bootstrap/Button';
import './header.css'

const Header = () => {    
    return (
        <header className="header">
            <h2 className="h2">Конвертация валют</h2>            
        </header>
    )
    
}


export default Header