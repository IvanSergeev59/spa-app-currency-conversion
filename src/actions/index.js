const currenciesRequested = () => {
    return {
        type: 'CURRENCIES_REQUESTED'
    }
}

const currenciesLoaded = (item) => {
    return {
        type: 'CURRENCIES_LOADED',
        payload: item
    }
}

const currenciesHideDefaultCurrencies = () => {
    return {
        type: 'HIDE_DEFAULT_CURRENCIES'
    }
}
const sumTotal = (item) => {
    return {
        type: 'SUM_TOTAL',
        payload: item
    }
}

const changeCurrency = (item) => {
    return {
        type: 'CHANGE_CURRENCY',
        payload: item
    }
}

const updateCurrency = (item) => {
   
    return {
        type: 'UPDATE_CURRENCY',
        payload: item
    }
}

const fetchCurrencies = (currencyService) => () => (dispatch) => {  
    dispatch(currenciesRequested());
    currencyService.getCurrencies()
    .then((data) => dispatch(currenciesLoaded(data)))
    .catch();
    
}

export {sumTotal, changeCurrency, updateCurrency, currenciesHideDefaultCurrencies, fetchCurrencies, currenciesLoaded}