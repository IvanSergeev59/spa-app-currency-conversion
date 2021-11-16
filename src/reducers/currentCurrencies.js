const updateCurrentCurrencies = (state , action) => {    
    if (state === undefined) {
        return {                                
                
                usdToEuro:'0',
                euroToRub:'70',
                euroToUsd:'0',
                rubToEuro:'70',
                rubToUsd:'0',  
                ololo:''
            }               
        }
    

    switch (action.type) {     
 
        // spinner while current currency exchange rates loading
        case 'CURRENCIES_REQUESTED':
            return {
                ...state.currentCurrencies,
                default_exchangeCurrency_1_value: 'Загрузка',
                default_exchangeCurrency_2_value: 'Загрузка'
            }
        case 'CURRENCIES_LOADED':
            return {
                ...state.currentCurrencies,
                ...action.payload,
                default_exchangeCurrency_1_value: action.payload.usdToEuro,
                default_exchangeCurrency_2_value: action.payload.usdToRub
            }
        case 'HIDE_DEFAULT_CURRENCIES':
            
            return {
                ...state.currentCurrencies,
                default_exchangeCurrency_1_value: action.payload,
                default_exchangeCurrency_2_value: action.payload
            }
        default: return state.currentCurrencies
    }
}


export default updateCurrentCurrencies