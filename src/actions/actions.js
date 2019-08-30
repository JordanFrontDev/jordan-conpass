import {
    ADD_HOTSPOT,
    REMOVE_HOTSPOT
} from '../constants';

export const addHotspot = (id, title, description, x, y) => {
    return {
        type: ADD_HOTSPOT,
        id,
        title,
        description,
        x,
        y
    }
}

export const removeHotspot = (id) => {
    return {
        type: REMOVE_HOTSPOT,
        id
    }
}