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

export {sumTotal, changeCurrency, updateCurrency}