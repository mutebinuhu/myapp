const loggedReducer = (state = false, action)=>{
    switch(action.type){
        case'SIGN_IN':{
            return true
        }
    }
}
export default loggedReducer;