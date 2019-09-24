import {
    ADD_HOTSPOT,
    REMOVE_HOTSPOT,
    REMOVE_ALL,
    UPDATE_HOTSPOT
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

export const updateHotspot = (id, title, description) => {
    return {
        type: UPDATE_HOTSPOT,
        id,
        title,
        description
    }
}

export const removeAll = () => {
    return {
        type: REMOVE_ALL
    }
}