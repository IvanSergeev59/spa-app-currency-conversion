const currenciesRequested = () => {
    return {
        type: 'CURRENCIES_REQUESTED'
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
    .then((data) => dispatch(updateCurrency(data)))
    .catch()
}

export {sumTotal, changeCurrency, updateCurrency, fetchCurrencies}