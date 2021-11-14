
const updateCurrentCurrencies = (state , action) => {
    
    if (state === undefined) {
        return {
                currentUsd:'70',
                totalUsd:  '0',
                sumUsd: '0',
                currentEURO: '90',
                currentRUB: '1',
                userCurrency: 'USD'
        }
    }
 

    switch (action.type) {
        case 'SUM_TOTAL':            
            return {
                ...state.currentCurrencies,
                totalUsd:  action.payload,
                               
            };

        case 'CHANGE_CURRENCY':
            return {
                ...state.currentCurrencies,
                userCurrency: action.payload
            }

        case 'UPDATE_CURRENCY':
            const {usd, euro} = action.payload
            return {
                ...state.currentCurrencies,
                currentUsd: usd,
                currentEURO: euro
                              
            }
        default: return state.currentCurrencies
    }
}


export default updateCurrentCurrencies