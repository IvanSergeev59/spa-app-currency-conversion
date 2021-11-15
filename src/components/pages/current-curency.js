import {React, Fragment } from "react";
import "./pages.css";
import { connect } from "react-redux";

const CurrentCurrencies = ({currentCurrencies}) => {
    const {exchangeCurrency_1_value, exchangeCurrency_2_value, exchangeCurrency_1, exchangeCurrency_2 } = currentCurrencies
    return (
        <Fragment >
            <h3 className="pages pages__h3">Актуальный курс валют:</h3>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">{exchangeCurrency_1}:</p>
                <p className="pages__currency-window_p">{exchangeCurrency_1_value}</p>                
            </div>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">{exchangeCurrency_2}:</p>
                <p className="pages__currency-window_p">{exchangeCurrency_2_value}</p>
            </div>
        </Fragment>  
    )   
}

const mapStateToProps = ({currentCurrencies}) => {
       return {currentCurrencies}          
}

export default connect(mapStateToProps)(CurrentCurrencies)