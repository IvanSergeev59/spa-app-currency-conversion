import {React, Component} from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { changeCurrency} from "../../actions";



 const UserCurrency = ({userChangeCurrency}) => {     
    const onUserChangeCurrency = (event) => {
        const item = event.target.value;        
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


class UserCurrencyContainer extends Component  {
    
    render () {
        const {userChangeCurrency} = this.props
        return (
        <UserCurrency userChangeCurrency={userChangeCurrency}/>
        )
    }
}

const mapStateToProps = ({userChangeCurrency}) => {
    return {userChangeCurrency}
} 

const mapDispatchToProps = (dispatch, action) => {
    return {       
        userChangeCurrency: (item) => dispatch(changeCurrency(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserCurrencyContainer)
