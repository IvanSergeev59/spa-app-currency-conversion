import {React, Component} from "react";
import Header from "./components/header";
import {HomePage, CurrentCurrencies} from "./components/pages";
import UserCurrencyContainer from "./components/user-currency"
import { Routes, Route } from "react-router";
import withCurrencyService from "./hoc";
import { connect } from "react-redux";
import compose from "./utils.js";
import { fetchCurrencies } from "./actions";

class App  extends Component {
  componentDidMount() {
    this.props.fetchCurrencies()
  }
  render () {
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

const mapDispatchToProps =(dispatch, ownProps) => {
    const {currencyService} = ownProps
    return {
      fetchCurrencies: () => dispatch(fetchCurrencies(currencyService)())
    }
}
export default compose( 
  withCurrencyService(),
connect(mapStateToProps, mapDispatchToProps))(App)
