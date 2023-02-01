import {ActionsType} from './store';

const initState = {
}

type InitStateType = typeof initState

export const registrationReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case '':
            return {...state}
        default:
            return state
    }
}