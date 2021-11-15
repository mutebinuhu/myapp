const initialState = {
    username:"admin",
    password:"admin",
    loggedIn:false,
    test:"",
    payLoad:""

}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
    case 'LOGIN':
        return{
            ...state,
            loggedIn:true,
            password:action.payLoad
        }
    default:
            return state
}
}
export default authReducer;