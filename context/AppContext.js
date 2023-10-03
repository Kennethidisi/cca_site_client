import {createContext, useEffect, useReducer} from "react"
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: false,
    theme: JSON.parse(localStorage.getItem('theme')) || false,
    showNav: false,
};

export const myContext = createContext(INITIAL_STATE);

export const AppContext = ({children})=>{
    const[state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('theme', JSON.stringify(state.theme))
    },[state.user, state.theme])

    return(
        <myContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            showNav: state.showNav,
            theme: state.theme,
            dispatch,
        }}>
            {children}
        </myContext.Provider>
    )
}