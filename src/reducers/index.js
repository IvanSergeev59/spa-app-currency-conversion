const initialState = {
    currentUsd:'70',
    totalUsd: '0',
    sumUsd: '0',
    currentEURO: '90',
    currentRUB: '1',
    userCurrency: 'USD'
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SUM_TOTAL':
            return {
               ...state,
               totalUsd: action.payload
            };

        case 'CHANGE_CURRENCY':
            return {
                ...state,
                userCurrency: action.payload
            }
        default: return {...state}
    }
}

export default reducer
