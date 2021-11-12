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

export {sumTotal, changeCurrency}