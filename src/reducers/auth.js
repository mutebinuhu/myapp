const initialState = {
    username:"admin",
    password:"admin"
}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
    case 'LOGIN':
        return{
            ...state,
            payload:action.payload
        }
    default:
            return state
}
}
export default authReducer;