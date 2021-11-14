import {React, Component} from "react";
import { Form} from "react-bootstrap";
import { connect } from "react-redux";
import './currency-list.css';
import { sumTotal } from "../../actions";
import store from "../../store";


const CurrencyList = ( {sumTotalUsd, userSumInputMoney, userCurrency, exchangeCurrency_1, exchangeCurrency_2, userSumInputMoney_1, userSumInputMoney_2}) => {     
       
    const insertTotal = (event) => {       
        const item =event.target.value;
        
        return sumTotalUsd(item)
    }
    return (     
        <div className="currency-list">
            <div className="form" >
                <Form.Group className="mb-3">
                    <Form.Label>Количество</Form.Label>                   
                    <Form.Control
                    onChange={insertTotal} id="1" type="number" placeholder="Введите количество" />
                   
                </Form.Group>
            <p className="result-block">{userCurrency} in {exchangeCurrency_1}:</p>
            <p className="result-field">{userSumInputMoney_1}</p>                
            </div>
            <p className="result-block">{userCurrency} in {exchangeCurrency_2}:</p>
            <p className="result-field">{userSumInputMoney_2}</p>
        </div>
    )
}

class CurrencyListContainer extends Component {      
   
    render () {   
     
        const {sumTotalUsd,  userCurrency, exchangeCurrency_1, exchangeCurrency_2, userSumInputMoney_1, userSumInputMoney_2} = this.props
       
        return (                
                <CurrencyList sumTotalUsd={sumTotalUsd} 
                exchangeCurrency_1={exchangeCurrency_1} exchangeCurrency_2={exchangeCurrency_2} userCurrency={userCurrency}
                userSumInputMoney_1={userSumInputMoney_1} userSumInputMoney_2={userSumInputMoney_2}/>           
        )
    }
}

const mapStateToProps = ({currentCurrencies: {userSumInputMoney_1, userSumInputMoney_2, userCurrency, exchangeCurrency_1
, exchangeCurrency_2}}) => {
    
    return {userSumInputMoney_1, userSumInputMoney_2, userCurrency, exchangeCurrency_1, exchangeCurrency_2}
} 

const mapDispatchToProps = (dispatch, action) => {
    return {
        sumTotalUsd: (item) => dispatch(sumTotal(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer)