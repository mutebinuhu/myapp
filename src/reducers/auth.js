const initialState = {
    loggedIn:false,
    username:"admin",
    password:"admin"
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
    case 'LOGIN':
        return{
            ...state,
            loggedIn:true,
            payload:action.payload
        }
    default:
            return state
}
}
export default authReducer;