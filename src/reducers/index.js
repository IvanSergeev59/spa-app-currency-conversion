import calculateCurrencies from "./calcilateMoney";
import updateCurrentCurrencies from "./currentCurrencies"


const reducer = (state, action) => {
    return {
        currentCurrencies: updateCurrentCurrencies(state , action),
        calculations: calculateCurrencies(state, action)
    }
}
export default reducer;
