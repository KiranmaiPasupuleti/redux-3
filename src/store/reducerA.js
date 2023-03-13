const initialState = {
    a:0,
}

const reducerA = (state = initialState,action) => {
    const newState= {...state} 
    if (action.type === "INCREMENT_A") {
        newState.a += action.value
    }
    return newState
}

export default reducerA