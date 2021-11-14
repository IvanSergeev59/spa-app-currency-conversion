import {React, Fragment } from "react";
import "./pages.css";
import { connect } from "react-redux";

const CurrentCurrencies = ({currency1, currency2, exchangeCurrency_1, exchangeCurrency_2 }) => {
   
    return (
        <Fragment >
            <h3 className="pages pages__h3">Актуальный курс валют:</h3>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">{exchangeCurrency_1}:</p>
                <p className="pages__currency-window_p">{currency1}</p>                
            </div>
            <div className="pages__currency-window">
                <p className="pages__currency-window_p">{exchangeCurrency_2}:</p>
                <p className="pages__currency-window_p">{currency2}</p>
            </div>
        </Fragment>  
    )   
}

const mapStateToProps = ({currentCurrencies: {currentUsdToRub, currentUsdToEuro, currentEuroToRub,
    currentEuroToUsd, currentRubToEuro, currentRubToUsd, userCurrency,exchangeCurrency_1,exchangeCurrency_2}}) => {
        switch(userCurrency) {
            case 'USD':
                return {
                    exchangeCurrency_1,
                    exchangeCurrency_2,
                    currency1 : currentUsdToEuro,
                    currency2 : currentUsdToRub
                }
            case 'EURO' : 
                return {
                    exchangeCurrency_1,
                    exchangeCurrency_2,
                    currency1 : currentEuroToUsd,
                    currency2 : currentEuroToRub
                }
            case 'RUB' :
                return {
                    exchangeCurrency_1,
                    exchangeCurrency_2,
                    currency1 : currentRubToUsd,
                    currency2 : currentRubToEuro
                }
            default:
                return null
        }
  
}




export default connect(mapStateToProps)(CurrentCurrencies)