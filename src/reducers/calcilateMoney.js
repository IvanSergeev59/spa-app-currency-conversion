const calculateUserInputMoney = (state, action) => {
    const { usdToRub, usdToEuro, euroToRub,
         euroToUsd, rubToEuro, rubToUsd} = state.currentCurrencies;
    const {userCurrency} = state.calculations
    const calculateOfUserCurrency = (a,b,c,d) => {
        return {
            userSumInputMoney_1: a,
            userSumInputMoney_2: b,
            total: c,
            errorUserWrongInput: d
        }
    }
    // validation user inputs
    if (/^([0-9]+)([.,]?)([0-9]*)$/.test(action.payload) & (action.payload >=0)) {
      
        const withCalculateOfUserCurrency = (userCurrency)  => { 
            if (userCurrency === "USD")    {
                const onCalculateOfUserCurrency = calculateOfUserCurrency((action.payload*usdToEuro).toFixed(4), (action.payload*usdToRub).toFixed(4),
                action.payload, ' ')
                return {onCalculateOfUserCurrency} 
            }
            else if (userCurrency === "EURO") {
                console.log(action.payload, euroToUsd)
                const onCalculateOfUserCurrency = calculateOfUserCurrency((action.payload*euroToUsd).toFixed(4),
                (action.payload*euroToRub).toFixed(4),
                action.payload, ' ')
                return { onCalculateOfUserCurrency}
            }   
            else {
                const onCalculateOfUserCurrency = calculateOfUserCurrency((action.payload*rubToUsd).toFixed(4),
                (action.payload*rubToEuro).toFixed(4),
                action.payload, ' ')
                return {onCalculateOfUserCurrency} 
            }  
        }
        return {
            ...state.calculations,
            ...withCalculateOfUserCurrency(userCurrency).onCalculateOfUserCurrency
        }
    } else {
        return {
            ...state.calculations,
            userSumInputMoney_1: 0,
            userSumInputMoney_2: 0,
            total: 0,
            errorUserWrongInput: 'Введите положительное число'
            } 
        }
}

const onChangeCurrency = (state, currency) => { 
    const  {rubToUsd,euroToRub, usdToEuro, euroToUsd,
        usdToRub,  rubToEuro} = state.currentCurrencies;
        
    const {total} = state.calculations
        // update exchange rates
    const changeCurrency = (exchangeCurrency_1, exchangeCurrency_2,
        exchangeCurrency_1_value,exchangeCurrency_2_value,userSumInputMoney_1,userSumInputMoney_2 ) => {
             return {exchangeCurrency_1, exchangeCurrency_2, exchangeCurrency_1_value,
                exchangeCurrency_2_value,userSumInputMoney_1,  userSumInputMoney_2}
         }

    const chooseChangeCurrency = () => {
        if (currency.payload === "USD") {
            const currentParams =  changeCurrency('EURO', "RUB", usdToEuro, usdToRub,
            (total*usdToEuro).toFixed(4),
            (total*usdToRub).toFixed(4)) 
            return {currentParams}
        } 
        else if (currency.payload === "EURO") {
            const currentParams =  changeCurrency('USD', "RUB", euroToUsd, euroToRub,
            (total*euroToUsd).toFixed(4),
            (total*euroToRub).toFixed(4))
            return {currentParams}
        }
        else {
            const currentParams =  changeCurrency('USD', "EUR", rubToUsd, rubToEuro,
            (total*rubToUsd).toFixed(4),
            (total*rubToEuro).toFixed(4))
            return {currentParams}
            
        }
    }  
    return {
        ...state.calculations,
        userCurrency: currency.payload,
        ...chooseChangeCurrency().currentParams
    }
}

const calculateCurrencies = (state, action ) => {
    
    if (state === undefined) {
        return {
            userSumInputMoney_1: '0',
            userSumInputMoney_2: '0',
            total: '0',
            errorUserWrongInput: ' ',
            userCurrency: 'USD',
            exchangeCurrency_1: "EURO",
            exchangeCurrency_2: 'RUB',
            exchangeCurrency_1_value: '',
            exchangeCurrency_2_value: '',
            usdToRub:'70',
    }
}

    switch (action.type) {
        // user input money and calc it on current exchange rate
        case 'SUM_TOTAL':                   
            return calculateUserInputMoney(state, action)
            // user change default currency
                               
        // current currency exchange rates loading firstly or update
        case 'UPDATE_CURRENCY':
            return {
                ...state.currentCurrencies,
                ...action.payload,            
                exchangeCurrency_1_value: action.payload.usdToEuro,
                exchangeCurrency_2_value: action.payload.usdToRub                            
            }
        case 'CHANGE_CURRENCY':           
            return onChangeCurrency(state, action)

        default: return state.calculations
    }

}

export default calculateCurrencies