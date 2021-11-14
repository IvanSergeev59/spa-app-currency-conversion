import updateCurrentCurrencies from "./currentCurrencies"


const reducer = (state, action) => {
    return {
        currentCurrencies: updateCurrentCurrencies(state , action)
    }
}
export default reducer;
