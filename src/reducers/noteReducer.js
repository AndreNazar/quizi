import { DEFAULT } from "./types"

const initialState = {}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEFAULT:
            return state
    
        default:
            return state
    }
}

export default noteReducer