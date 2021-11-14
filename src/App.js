import {React, Component} from "react";
import Header from "./components/header";
import {HomePage, CurrentCurrencies} from "./components/pages";
import UserCurrencyContainer from "./components/user-currency"
import CurrencyService from "./services";
import {updateCurrency} from "./actions";
import {connect} from 'react-redux'
import { Routes, Route } from "react-router";

class App extends Component  {
  currencyService = new CurrencyService()


  loadingCurrentCurrency = () => {
    this.currencyService
    .getCurrencies()
    .then(this.props.onLoadCurrentCurrency)
    .catch()
  }

 componentDidMount(){
   this.loadingCurrentCurrency()
 }

  render () 
  {
    return (
      <div className="App">        
          <Header />
          <UserCurrencyContainer />
          <Routes>
            <Route path="/spa-app-currency-conversion/" element={<HomePage />} />
            <Route path="/*" element={<HomePage />} />
            <Route path="/current-exchange-rate/" element={<CurrentCurrencies />} />  
          </Routes>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state
} 

const mapDispatchToProps = (dispatch, action) => {
  return {
    onLoadCurrentCurrency: (item) => dispatch(updateCurrency(item))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
