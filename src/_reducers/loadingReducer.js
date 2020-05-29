const loadingReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case 'LOADING_IN_PROGRESS': 
            return {
                loading: true
            }

        case 'LOADING_DONE':
            return {
                loading: false
            }    

        default:
            return state    
    }
}

export default loadingReducer