import {React, Fragment } from "react";
import "./pages.css";
import { connect } from "react-redux";

const CurrentCurrencies = ({currentUsd, currentEURO}) => {
   
    return (
        <Fragment >
            <h3 className="pages pages__h3">Актуальные курсы валют:</h3>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">USD:</p>
                <p className="pages__currency-window_p">{currentUsd}</p>                
            </div>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">EURO:</p>
                <p className="pages__currency-window_p">{currentEURO}</p>
            </div>
        </Fragment>  
    )   
}

const mapStateToProps = ({currentCurrencies: {currentUsd, currentEURO}}) => {
    return {currentUsd, currentEURO}
}




export default connect(mapStateToProps)(CurrentCurrencies)