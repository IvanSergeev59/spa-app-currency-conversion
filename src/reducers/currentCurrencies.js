const onChangeCurrency = (state, currency) => {   
    if (currency.payload === "USD") {
        return {
            ...state.currentCurrencies,
            userCurrency: currency.payload,
            exchangeCurrency_1: 'EURO',
            exchangeCurrency_2: "RUB",
            userSumInputMoney_1: state.currentCurrencies.total*state.currentCurrencies.currentUsdToEuro,
            userSumInputMoney_2: state.currentCurrencies.total*state.currentCurrencies.currentUsdToRub
            
        }
    } 
    else if (currency.payload === "EURO") {
        return {
            ...state.currentCurrencies,
            userCurrency: currency.payload,
            exchangeCurrency_1: 'USD',
            exchangeCurrency_2: "RUB",
            userSumInputMoney_1: state.currentCurrencies.total*state.currentCurrencies.currentEuroToUsd,
            userSumInputMoney_2: state.currentCurrencies.total*state.currentCurrencies.currentEuroToRub
        }
    }
    else {
        return {
            ...state.currentCurrencies,
            userCurrency: currency.payload,
            exchangeCurrency_1: 'USD',
            exchangeCurrency_2: "EUR",
            userSumInputMoney_1: state.currentCurrencies.total*state.currentCurrencies.currentRubToUsd,
            userSumInputMoney_2: state.currentCurrencies.total*state.currentCurrencies.currentRubToEuro
        }
    }
    
}

const calculateUserInputMoney = (state, action) => {
    const {userCurrency, currentUsdToRub, currentUsdToEuro, currentEuroToRub,
         currentEuroToUsd, currentRubToEuro, currentRubToUsd} = state.currentCurrencies
    if (/^(0|[1-9]\d*)$/.test(action.payload) & (action.payload >=0)) {    
        if (userCurrency === "USD")    {
            return {
                ...state.currentCurrencies,
                userSumInputMoney_1: action.payload*currentUsdToEuro,
                userSumInputMoney_2: action.payload*currentUsdToRub,
                total:action.payload,
                errorUserWrongInput: ' '
            } 
        }
        else if (userCurrency === "EURO") {
            return {
                ...state.currentCurrencies,
                userSumInputMoney_1: action.payload*currentEuroToUsd,
                userSumInputMoney_2: action.payload*currentEuroToRub,
                total: action.payload,
                errorUserWrongInput: ' '
            }
        }   
        else {
            return {
                ...state.currentCurrencies,
                userSumInputMoney_1: action.payload*currentRubToUsd,
                userSumInputMoney_2: action.payload*currentRubToEuro,
                total: action.payload,
                errorUserWrongInput: ' '
            } 
        }  
    } else {
        return {
            ...state.currentCurrencies,
            userSumInputMoney_1: 0,
            userSumInputMoney_2: 0,
            total: 0,
            errorUserWrongInput: 'Неверное значение'
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
                userSumInputMoney_1: '0',
                userSumInputMoney_2: '0',
                userCurrency: 'USD',
                exchangeCurrency_1: "EURO",
                exchangeCurrency_2: 'RUB',
                total: '0',
                errorUserWrongInput: ' '
        }
    }
 

    switch (action.type) {
        case 'SUM_TOTAL':                   
            return calculateUserInputMoney(state, action)

        case 'CHANGE_CURRENCY':           
            return onChangeCurrency(state, action)
            

        case 'UPDATE_CURRENCY':
            const {currentUsdToRub, currentEuroToRub} = action.payload;
            const currentUsdToEuro = currentUsdToRub/currentEuroToRub;
            const currentEuroToUsd = currentEuroToRub/currentUsdToRub;          
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