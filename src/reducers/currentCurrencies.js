const onChangeCurrency = (state, currency) => {
    if (currency.payload === "USD") {
        return {
            ...state.currentCurrencies,
            userCurrency: currency.payload,
            exchangeCurrency_1: 'EURO',
            exchangeCurrency_2: "RUB"
        }
    } 
    else if (currency.payload === "EURO") {
        return {
            ...state.currentCurrencies,
            userCurrency: currency.payload,
            exchangeCurrency_1: 'USD',
            exchangeCurrency_2: "RUB"
        }
    }
    else {
        return {
            ...state.currentCurrencies,
            userCurrency: currency.payload,
            exchangeCurrency_1: 'USD',
            exchangeCurrency_2: "EUR"
        }
    }
    
}


const updateCurrentCurrencies = (state , action) => {
    
    if (state === undefined) {
        return {
                currentUsdToRub:'70',
                currentUsdToEuro:'0',
                currentEuroToRub:'70',
                currentEurotoUsd:'0',
                currentRubToEuro:'70',
                currentRubToUsd:'0',
                totalUsd:  '0',
                sumUsd: '0',
                currentEURO: '90',
                currentRUB: '1',
                userCurrency: 'USD',
                exchangeCurrency_1: "EURO",
                exchangeCurrency_2: 'RUB'
        }
    }
 

    switch (action.type) {
        case 'SUM_TOTAL':            
            return {
                ...state.currentCurrencies,
                totalUsd:  action.payload,
                               
            };

        case 'CHANGE_CURRENCY':           
            return onChangeCurrency(state, action)
            

        case 'UPDATE_CURRENCY':
            const {currentUsdToRub, currentEuroToRub} = action.payload;
            const currentUsdToEuro = currentUsdToRub/currentEuroToRub;
            const currentEuroToUsd = currentEuroToRub/currentUsdToRub  ;          
            const currentRubToEuro = 1/currentEuroToRub;
            const currentRubToUsd = 1/currentUsdToRub;
            return {
                ...state.currentCurrencies,
                currentUsdToRub, currentUsdToEuro, currentEuroToRub,
                currentEuroToUsd, currentRubToEuro, currentRubToUsd                              
            }
        default: return state.currentCurrencies
    }
}


export default updateCurrentCurrencies