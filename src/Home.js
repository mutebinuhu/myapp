import Illustration from './images/Illustration.svg'
const Home = () =>{
    return(
        <div>
            <div>
                <div className="">
                    <nav className="flex justify-between md:py-8 md:px-8 my-10 ml-16 text-gray-500">
                        <div className="font-extrabold text-lg hover:text-gray-800">
                            Open Enterprise
                        </div>
                        <ul className="flex  font-medium">
                            <div>
                                <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20"></rect>
  <rect y="30" width="100" height="20"></rect>
  <rect y="60" width="100" height="20"></rect>
</svg>
                            </div>
                            <li className="px-2 hidden md:block hover:text-gray-800"><a href="">Why Open Enterprise</a></li>
                            <li className="px-2 hidden md:block hover:text-gray-800"><a href="">Features</a></li>
                            <li className="px-2 hidden md:block hover:text-gray-800"><a href="">Contribute</a></li>
                            <li className="px-2 hidden md:block hover:text-gray-800"><a href="">Request Early Access</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="py-8 px-8 md:flex md:justify-between w-full text-gray-800">
                    <div className="md:w-2/5 font-inter mt-6 text-center md:text-left">
                        <h1 className="text-5xl font-bold ">A new model for open collaboration</h1>
                        <p className="text-lg mt-2">Run an organization where members get rewarded for their contributions with fractional ownership.
                        </p>
                      <div className="mt-6">
                      <a href="#" className="bg-green-600 hover:bg-green-500  rounded-lg  text-white py-3 px-3">Request Early Access</a>
                      </div>
                    </div>
                    <div className="md:w-3/5 mt-10 md:mt-0 bg-hero-pattern bg-contain bg-no-repeat bg-center">
                        <div>
                            <img src={Illustration} alt="landing page" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;