const AppReducer = (state, action)=>{
    if(action.type === "LOGIN_START"){
        return{
            ...state,
            user: null,
            loading: true,
            error: false
        }
    };

    if(action.type === "LOGIN_SUCESS"){
        return{
            ...state,
            user: action.payload,
            loading: false,
            error: false
        }
    };

    if(action.type === "LOGIN_ERROR"){
        return{
            ...state,
            user: null,
            loading: false,
            error: action.payload
        }
    }

    if(action.type === "LOGOUT"){
        return{
            user: null,
            loading: false,
            error: false,
            theme: false
        }
    }
    
    if(action.type === "UPDATE_START"){
        return{
            ...state,
            loading: true,
        }
    };
    
    if(action.type === "UPDATE_SUCESS"){
        return{
            ...state,
            user: action.payload,
            loading: false,
            error: false
        }
    }


    if(action.type === "UPDATE_ERROR"){
        return{
            ...state,
            error: action.payload
        }
    }

    if(action.type === "SHOW_MENU"){
        return{
            ...state,
            showNav: !state.showNav
        }
    }

    if(action.type === "CLEAN_ERROR"){
        return{
            ...state,
            error: false
        }
    }

    if(action.type === "THEME_CHANGE"){
        return{
            ...state,
            theme: !state.theme
        }
    }


    return state;
}

export default AppReducer;