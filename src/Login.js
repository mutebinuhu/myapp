
 import {useSelector, useDispatch} from 'react-redux'
 import {useState} from 'react';
 import { useHistory } from 'react-router';
 import Logo from './images/Logo.svg'; 
import { login } from './actions';

 const Login = () =>{
    const dispatch = useDispatch();
    const info = useSelector(state=>state.authReducer)
    const pd  = useSelector(state=>state.authReducer)
    const loginStatus = useSelector(state=>state.authReducer)
    const userName = info.username
    const userPassword = info.password
    const [name,setName] = useState('')
    const [password, setPassword] = useState('')
    

    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState(false)
    //change password

    const[newPassword, setNewPassword] = useState('');
    const[hideChagePasswordform, sethideChagePasswordform] = useState(false)
    const[hideform, sethideform] = useState(true)
    const[hidePassword, setHidePassword] = useState(false)
    const[loggedIn, setLogged] = useState('')
    const [isPending, setIspending] = useState(false)

    const handleSubmit = (e) =>{
      e.preventDefault();
  
      const userData = {name, password}
      if(userData.name === userName && userData.password === userPassword){
        setSuccess(true)
        setTimeout(()=>{
        setIspending(true);
         
          setSuccess(false)
            if(sethideChagePasswordform(true)){
               sethideChagePasswordform(true) 

            }
        },100)
        setLogged(true)
        sethideform(false)
      
      }else{
       setErrors(true)
       setTimeout(()=>{
         setErrors(false)
       }, 2000)
      }
      setIspending(false)
    
    }

    const changePassword = (e) =>{
        e.preventDefault()
        const newpd = newPassword;
        setPassword(newpd)
        setHidePassword(true)
       if(newPassword){
        setTimeout(()=>{
            window.location.href='/home'
        },500)

       }
  
    }
   
    return( <div className="md:flex">

    <div className=" w-full md:w-1/2 md:px-24 md:py-24 relative h-full mt-20">
    {loginStatus.loggedIn ? "Logging" : ""}
        <div className="mb-2">
        {hideChagePasswordform &&    <form style={{backgroundColor:"#10B981"}} className="bg-blue-100 rounded-lg px-3 pt-4 pb-8 m-5 md:m-0" onSubmit={changePassword}>    
        {hidePassword && <div className="bg-green-900 mb-4 text-white italic py-2 px-2  mt-1"><span className="font-bold">{pd.password}</span> is the new password</div>}
               <div className="mb-6 md:ml-6 md:mr-6">
               <label className="block text-white text-center text-sm font-semibold mb-1" for="password" value={newPassword} onChange={(e)=>e.target.value}>
                   Change Password
               </label>
               <input required className="appearance-none border  rounded-lg w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} />
               </div>
               <div className="mb-2 md:ml-6 md:mr-6">
               <button onClick={()=>dispatch(login(newPassword))} className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="submit">
                   submit
               </button>
               </div>
      </form>}
        </div>

       {hideform &&  <div><h3 className="text-center py-4 mb-3 text-white bg-blue-900">{loggedIn ? 'Logged In' : 'Please Login'}</h3>
          <form className=" rounded-lg px-3 pt-4 pb-8 m-5 md:m-0" onSubmit={handleSubmit} style={{backgroundColor:"#10B981"}}>

          {success && <div className="bg-green-900 mb-4 text-white italic py-2 px-2  mt-1">Success</div>}
          {errors && <div className="bg-red-500 mb-4 text-white italic py-2 px-2  mt-1">Wrong Credentials</div>}
                 <div className="mb-6 md:ml-6 md:mr-6">
                 <label className="block text-white text-sm mb-1 font-semibold" for="email address">
                   Username
                 </label>
                 <input className="border rounded-lg w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                 </div>
                 <div className="mb-6 md:ml-6 md:mr-6">
                 <label className="block text-white text-sm font-semibold mb-1" for="password">
                     Password
                 </label>
                 <input className="appearance-none border  rounded-lg w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                 </div>
                 <div className="flex items-center justify-between  md:ml-6 md:mr-6 mt-0" >
                 <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="submit">
                     Login
                 </button>
                 {isPending &&  <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="submit">
                     Loading
                 </button>}
                 
                 </div>
                 
             </form></div>}
              
          </div>

          <div className="w-1/2  bg-blue-400 md:h-screen fixed right-0" style={{background:"#E5E5E5"}}>
              
          </div>
     </div>
 )
}
export default Login;