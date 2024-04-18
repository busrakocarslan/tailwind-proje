function App() {
  return (
    <div>
      <header>
        <div>
          <div className="w-4/5 m-auto my-5 flex flex-row justify-between p-2 align-items-center gap-7 flex-wrap">
            <div>
              <a href="#clarusway">
                <img className=" bg-purple-800 rounded-e-[50px] mx-5 hover:bg-purple-500 duration-300 " src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg" alt="logo" />
              </a>
            </div>
            <div>
              <button type="button" className="md:hidden w-[30px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>            
            <div className="hidden w-[250px] font-mono text-[1rem] text-purple-500  md:flex justify-start gap-3   ">
              <a href="#solutions" className="hover:text-purple-900 hover:font-bold transition-all hover:uppercase ease-in-out duration-300  "> Solutions </a>
              <a href="#industries" className="hover:text-purple-900 hover:font-bold transition-all hover:uppercase ease-in-out duration-300 "> Industries </a>
              <a href="#fees" className="hover:text-purple-900 hover:font-bold transition-all hover:uppercase ease-in-out duration-300 "> Fees </a>
              <a href="#About" className="hover:text-purple-900 hover:font-bold  hover:uppercase transition-all ease-in-out duration-300 "> About/Rareblocks </a>
            </div>
            <div className="ml-auto">{/* diğer iki div i sağa bunu sola yaslamak için flexe justfy-between verip buna da margin left auto özelliği verdim */}
              <a href="#login" className="bg-gray-300 p-1 text-purple-600 transition-all hover:text-[.9rem] rounded-full ease-in duration-300"> Sign in </a>
              <a href="#register" rel="noopener noreferrer" role="button"  className=" bg-purple-800 rounded-s-[50px] mx-5 p-1 hover:bg-purple-500 text-white hover:text-black duration-500">{/* duracion ile hover efektini yavaşalattım*/}
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>
      <section >
        <div className="w-4/5 m-auto grid md:grid-cols-2 gap-4 bg-gray-700 text-[#F88BE0] rounded-lg  p-5 mb-5 shadow-inner shadow-gray-300">
          <div>
            <div>
              <h1 className="text-3xl w-1/2 font-mono font-extrabold ">A special credit card made for Developers.</h1>
              <p className="text-[.9rem] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.</p>
              <form action="#" method="POST" >
                <div className="border-[5px] bg-white flex justify-between align-items-center p-2 rounded-md shadow-md shadow-[#F88BE0] my-5 ">
                  <input type="email" placeholder="Enter email address" required className="bg-transparent outline-none text-black"/>
                  <div>
                    <button type="submit" className="me-2 ml-auto bg-gray-700 py-2 px-5 rounded-full">Get Free Card</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-center gap-5 align-items-center mt-10">
              <div className="flex gap-2 align-items-center text-gray-200">
                <p className="text-5xl">2943</p>
                <p>Cards<br/>Delivered</p>
              </div>
              <div>
                <svg width={16} height={39} viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div className="flex gap-2 align-items-center text-gray-200">
                <p className="text-5xl">$1M+</p>
                <p>Transaction<br />Completed</p>
              </div>
            </div>
          </div>
          <div className="w-2/3 ml-auto me-5">
            <img src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png" alt="images" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
