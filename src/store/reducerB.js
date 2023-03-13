const initialState = {
    b:0,
}

const reducerB = (state = initialState,action) => {
    const newState= {...state} 
    if (action.type === "INCREMENT_B") {
        newState.b += action.value
    }
    return newState
}

export default reducerB