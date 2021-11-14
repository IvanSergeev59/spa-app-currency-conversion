import {React, Component} from "react";
import { Form} from "react-bootstrap";
import { connect } from "react-redux";
import './currency-list.css';
import { sumTotal } from "../../actions";


const CurrencyList = ( {currentUsd, totalUsd, sumTotalUsd, sumUsd, userCurrency}) => {     
    const insertTotal = (event) => {        
        const item =event.target.value;
        return sumTotalUsd(item)
    }
    return (     
        <div className="currency-list">
            <div className="form" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{userCurrency} in RUB</Form.Label>
                    <Form.Control
                    onChange={insertTotal} type="number" placeholder="Введите количество" required pattern="[0-9]{5,10}"/>
                   
                </Form.Group>
                
            </div>
            <p className="result-block">Итого:</p>
            <p className="result-field">{sumUsd}</p>
        </div>
    )
}

class CurrencyListContainer extends Component {   
    
    
    render () {
        const {sumTotalUsd, sumUsd, userCurrency} = this.props
        return (                
                <CurrencyList sumUsd={sumUsd} sumTotalUsd={sumTotalUsd} userCurrency={userCurrency}/>
           
        )
    }
}

const mapStateToProps = ({currentCurrencies: {currentUsd, currentRUB, totalUsd, userCurrency, currentEURO}}) => {
    let sumUsd = 0;
    switch (userCurrency) {
        case 'USD':
            sumUsd = (currentUsd*totalUsd).toFixed(2);
            break
        case 'EURO':
             sumUsd = (currentEURO*totalUsd).toFixed(2);
             break
        case 'RUB':
             sumUsd = (currentRUB*totalUsd).toFixed(2);
             break
        default:
            sumUsd = 0
    }
    
    return {sumUsd, userCurrency}
} 

const mapDispatchToProps = (dispatch, action) => {
    return {
        sumTotalUsd: (item) => dispatch(sumTotal(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer)