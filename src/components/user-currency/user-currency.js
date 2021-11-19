import {React, Component} from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { changeCurrency, currenciesHideDefaultCurrencies} from "../../actions";



 const UserCurrency = ({userChangeCurrency, hideDefaultCurrencies}) => {  
     const hideDefaultCurrency =() => {
         return hideDefaultCurrencies()
     }   
    const onUserChangeCurrency = (event) => {
        const item = event.target.value;  
        hideDefaultCurrency()      
        return userChangeCurrency(item)
    }
        return (
          <div className="currency-list currency-list-user">
            <p className="currency-list-_p" >Ваша валюта:</p>
            <Form.Select
            onChange = {onUserChangeCurrency} aria-label="Default select example">
              
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="RUB">RUB</option>
            </Form.Select>
          </div>
        )
   }


export class UserCurrencyContainer extends Component  {
    render () {
        const {userChangeCurrency, hideDefaultCurrencies} = this.props
        return (
        <UserCurrency userChangeCurrency={userChangeCurrency} hideDefaultCurrencies={hideDefaultCurrencies}/>
        )
    }
}

const mapStateToProps = ({userChangeCurrency}) => {
    return {userChangeCurrency}
} 

const mapDispatchToProps = (dispatch, action) => {
    return {       
        userChangeCurrency: (item) => dispatch(changeCurrency(item)),
        hideDefaultCurrencies: () => dispatch(currenciesHideDefaultCurrencies())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCurrencyContainer)
