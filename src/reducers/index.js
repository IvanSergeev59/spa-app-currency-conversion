const initialState = {
    currentUsd:'30',
    totalUsd: '0'
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'NAME_1':
            return {
               ...state
            };
        case 'NAME_2':
            return {
                ...state
            }
        default: return {...state}
    }
}

export default reducer
