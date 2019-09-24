import {
    ADD_HOTSPOT,
    REMOVE_HOTSPOT,
    REMOVE_ALL,
    UPDATE_HOTSPOT
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
        case UPDATE_HOTSPOT:
            return state.map(hotspot => {
                return hotspot.id === action.id ? { ...hotspot, title: action.title, description: action.description } : hotspot
            })
        case REMOVE_ALL:
            return []
        default:
            return state;

    }
}