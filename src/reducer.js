import {DECREMENT, INCREMENT, SET} from "./actions";

export const initialState = {count: 42}

export const reducer =(state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {count: state.count + 1};
        case DECREMENT:
            return {count: state.count - 1};
        case SET:
            return {count: action.payload}
        default:
            return state;
    }
}