import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk, {ThunkAction, ThunkDispatch } from "redux-thunk"
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {loginReducer} from './login-reducer';
import {registrationReducer} from './registration-reducer';
import {profileReducer} from './profile-reducer';
import {recoveryPasswordReducer} from './recoveryPassword-reducer';
import {setPasswordReducer} from './setPassword-reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    registration:registrationReducer,
    profile:profileReducer,
    recoveryPassword:recoveryPasswordReducer,
    setPassword:setPasswordReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
type RootState = ReturnType<typeof store.getState>
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>
const useAppDispatch = () => useDispatch<AppDispatch>()
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type  ActionsType = any