const initialState = {
    search: ''
}

const searchReducer = (prevState: any = initialState, action: any) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                search: action.payload,
            }
        default:
            return prevState
    }
}

export default searchReducer