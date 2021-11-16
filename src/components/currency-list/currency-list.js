import {React, Component} from "react";
import { Form} from "react-bootstrap";
import { connect } from "react-redux";
import './currency-list.css';
import { sumTotal} from "../../actions";



const CurrencyList = ( {sumTotalUsd, state }) => {       
    const {exchangeCurrency_1, userCurrency, exchangeCurrency_2, 
        userSumInputMoney_2, userSumInputMoney_1, 
        errorUserWrongInput } = state.calculations
    console.log(state)
    const insertTotal = (event) => {       
        const item =event.target.value;
        
        return sumTotalUsd(item)
    }

    return (     
        <div className="currency-list">
            <div className="form" >
                <Form.Group className="currency-list-margin">
                    <Form.Label>Количество</Form.Label>                   
                    <Form.Control
                    onChange={insertTotal} id="only_num" type="number" placeholder="Введите количество" />
                   
                </Form.Group>
            <p className="currency-list__error">{errorUserWrongInput}</p>
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
     
        const {sumTotalUsd, state} = this.props
        return (                
                <CurrencyList sumTotalUsd={sumTotalUsd} state={state}/>           
        )
    }
}

const mapStateToProps = ( state) => {
    
    return {state}
} 

const mapDispatchToProps = (dispatch) => {
    return {
        sumTotalUsd: (item) => dispatch(sumTotal(item)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer)