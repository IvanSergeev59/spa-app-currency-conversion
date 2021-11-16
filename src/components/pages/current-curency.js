import {React, Fragment } from "react";
import "./pages.css";
import { connect } from "react-redux";

const CurrentCurrencies = ({state}) => {
        const { exchangeCurrency_1, exchangeCurrency_2,
             exchangeCurrency_1_value, exchangeCurrency_2_value} = state.calculations
        const {default_exchangeCurrency_1_value, 
            default_exchangeCurrency_2_value} = state.currentCurrencies
    return (
        <Fragment >
            <h3 className="pages pages__h3">Актуальный курс валют:</h3>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">{exchangeCurrency_1}:</p>
                <p className="pages__currency-window_p">{default_exchangeCurrency_1_value}{exchangeCurrency_1_value}</p>                
            </div>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">{exchangeCurrency_2}:</p>
                <p className="pages__currency-window_p">{default_exchangeCurrency_2_value}{exchangeCurrency_2_value}</p>
            </div>
        </Fragment>  
    )   
}

const mapStateToProps = (state) => {
       return {state}          
}

export default connect(mapStateToProps)(CurrentCurrencies)