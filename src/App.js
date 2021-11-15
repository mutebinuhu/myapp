
function App() {
  return (
    <div className="md:flex">
           <div className=" w-full md:w-1/2 md:px-24 md:py-24 relative h-full mt-20">
               <div className="mb-2">
               <img src="" alt="" className="h-30 w-30 ml-5 mt-2 md:m-0" />
               </div>
                 <form className="bg-blue-100 rounded-lg px-3 pt-4 pb-8 m-5 md:m-0">
                        <div className="mb-6 md:ml-6 md:mr-6">
                        <label className="block text-gray-700 text-sm mb-1 font-semibold" for="email address">
                          Username
                        </label>
                        <input className="border rounded-lg w-full py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="" type="text"  />
                        </div>
                        <div className="mb-6 md:ml-6 md:mr-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-1" for="password">
                            Password
                        </label>
                        <input className="appearance-none border  rounded-lg w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                        </div>
                        <div className="flex items-center justify-between  md:ml-6 md:mr-6 mt-0" >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-6 rounded-lg focus:outline-none focus:shadow-outline text-sm" type="submit">
                            Login
                        </button>
                        
                        </div>
                        
                    </form>
                     
                 </div>

                 <div className="w-1/2  bg-blue-400 md:h-screen fixed right-0">
                     
                 </div>
            </div>
        

  );
}

export default App;