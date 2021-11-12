import {React, Component, Fragment} from "react";
import { Form} from "react-bootstrap";
import { connect } from "react-redux";
import './currency-list.css';
import { sumTotal, changeCurrency } from "../../actions";

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
                    onChange={insertTotal} type="number" placeholder="Введите количество" />
                   
                </Form.Group>
                
            </div>
            <p className="result-block">Result:</p>
            <p className="result-field">{sumUsd}</p>
        </div>
    )
}


const UserCurrency = ({userChangeCurrency}) => {
    const ololo = (event) => {
        const item = event.target.value;
        console.log(item)
        return userChangeCurrency(item)
    }
        return (
          <div class="currency-list currency-list-user">
            <p class="currency-list-_p" >Ваша валюта:</p>
            <Form.Select
            onChange = {ololo} aria-label="Default select example">
              
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="RUB">RUB</option>
            </Form.Select>
          </div>
        )
}

class CurrencyListContainer extends Component {   

    render () {
        const {sumTotalUsd, sumUsd, userCurrency, userChangeCurrency} = this.props
        return (
            <Fragment>
                <UserCurrency userChangeCurrency={userChangeCurrency}/>
                <CurrencyList sumUsd={sumUsd} sumTotalUsd={sumTotalUsd} userCurrency={userCurrency}/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({currentUsd, currentRUB, totalUsd, userCurrency, currentEURO}) => {
    let sumUsd = 0;
    switch (userCurrency) {
        case 'USD':
            sumUsd = currentUsd*totalUsd;
            break
        case 'EURO':
             sumUsd = currentEURO*totalUsd;
             break
        case 'RUB':
             sumUsd = currentRUB*totalUsd;
             break
        default:
            sumUsd = 0
    }

    return {sumUsd, userCurrency}
} 

const mapDispatchToProps = (dispatch, action) => {
    return {
        sumTotalUsd: (item) => dispatch(sumTotal(item)),
        userChangeCurrency: (item) => dispatch(changeCurrency(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyListContainer)