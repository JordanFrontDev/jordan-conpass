import {
    ADD_HOTSPOT,
    REMOVE_HOTSPOT
} from '../constants';



export const hotspotsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_HOTSPOT:
            return [
                ...state,
                action
            ]
        case REMOVE_HOTSPOT:
           return state.filter(hotspot => hotspot.id !== action.id);
        default:
            return state;

    }
}