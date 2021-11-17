const initialState = {
    username:"admin",
    password:"admin",
    payLoad:"",
 

}

const authReducer = (state=initialState, action)=>{
    switch(action.type){
    case 'LOGIN':
        return{
            ...state,
            password:action.payLoad,
     
        }
    default:
            return state
}
}
export default authReducer;