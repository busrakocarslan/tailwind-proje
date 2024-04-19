import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import image3 from "./img/image (3).png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="w-3/4 mt-5 m-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="#clarusway">
              <img
                className="bg-purple-800 rounded-e-[50px] mx-2 hover:bg-purple-500 duration-300"
                src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="hidden md:flex md:justify-start font-mono text-[1rem] text-purple-500">
            <a
              href="#solutions"
              className="hover:text-purple-900 hover:font-bold hover:uppercase transition-all ease-in-out duration-300 py-1 px-1"
            >
              Solutions
            </a>
            <a
              href="#industries"
              className="hover:text-purple-900 hover:font-bold hover:uppercase transition-all ease-in-out duration-300 py-1 px-1"
            >
              Industries
            </a>
            <a
              href="#fees"
              className="hover:text-purple-900 hover:font-bold hover:uppercase transition-all ease-in-out duration-300 py-1 px-1"
            >
              Fees
            </a>
            <a
              href="#About"
              className="hover:text-purple-900 hover:font-bold hover:uppercase transition-all ease-in-out duration-300 py-1 px-1"
            >
              About/Rareblocks
            </a>
          </div>
          <div className="hidden md:flex justify-end md:ml-auto">
            <a
              href="#login"
              className="bg-gray-300 p-1 text-purple-600 transition-all hover:text-[.9rem] rounded-full ease-in duration-300 py-1 "
            >
              Sign in
            </a>
            <a
              href="#register"
              rel="noopener noreferrer"
              role="button"
              className="bg-purple-800 rounded-s-[50px] mx-5 p-1 hover:bg-purple-500 text-white hover:text-black duration-500 py-1 px-3"
            >
              Create free account
            </a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              "✖️"
            ) : (
              <Bars3Icon
                className="h-6 w-6 cursor-pointer bg-purple-200 rounded mx-20"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </header>

      <div
        className={`flex flex-col items-center mt-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <a
          className="hover:bg-purple-300 py-1 px-3 rounded-e-[50px]  hover:font-bold hover:uppercase transition-all ease-in-out duration-300"
          href="#solutions"
        >
          Solutions
        </a>
        <a
          className="hover:bg-purple-300 py-1 px-3 rounded-s-[50px]  hover:font-bold hover:uppercase transition-all ease-in-out duration-300"
          href="#industries"
        >
          Industries
        </a>
        <a
          className="hover:bg-purple-300 py-1 px-3 rounded-e-[50px]  hover:font-bold hover:uppercase transition-all ease-in-out duration-300"
          href="#fees"
        >
          Fees
        </a>
        <a
          className="hover:bg-purple-300 py-1 px-3 rounded-s-[50px]  hover:font-bold hover:uppercase transition-all ease-in-out duration-300"
          href="#About"
        >
          About Rareblocks
        </a>
        <a
          className="hover:bg-purple-300 py-1 px-3 rounded-e-[50px]  hover:font-bold hover:uppercase transition-all ease-in-out duration-300"
          href="#login"
        >
          Sign in
        </a>
        <a
          className="bg-purple-800 rounded-lg mx-5 p-1 hover:bg-purple-500 text-white hover:text-black duration-500 py-1 px-3"
          href="#register"
          rel="noopener noreferrer"
          role="button"
        >
          Create free account
        </a>
      </div>

      <section>
        <div className="w-3/4 flex justify-evenly items-center mt-10 max-md:flex-col md:min-w-[650px] m-auto md:grid-cols-2 gap-4 bg-gray-700 text-[#F88BE0] rounded-lg px-5 mb-2 shadow-inner shadow-gray-300 max-md:p-5">
          <div className="w-[481px] flex flex-col max-md:w-80 ">
            <h1 className="text-4xl uppercase font-mono font-extrabold leading-[66px] max-md:text-center md:ml-auto">
              A special credit card made for Developers.
            </h1>
            <p className="text-1 text-gray-400 max-md:text-center my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
              massa in enim luctus. Rutrum arcu.
            </p>
            <form action="#" method="POST">
              <div className="border-[5px] bg-white flex justify-between items-center p-2 max-md:block max-md:text-center max-md:shadow-inner max-md:shadow-[purple]  rounded-md shadow-md shadow-[#F88BE0] my-5 ">
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="bg-transparent border-none outline-none text-center mx-auto"
                />
                <button
                  type="submit"
                  className="ml-auto bg-gray-700 py-2 px-5 rounded-full max-md:m-2"
                >
                  Get Free Card
                </button>
              </div>
            </form>
            <div className="flex justify-center gap-5 align-items-center">
              <div className="flex gap-2 justify-between align-items-center text-gray-200">
                <p className="text-5xl max-md:text-[28px]">2943</p>
                <p>
                  Cards
                  <br />
                  Delivered
                </p>
              </div>
              <div className="max-xs:invisible">
                <svg
                  width={16}
                  height={39}
                  viewBox="0 0 16 39"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div className="flex gap-2 align-items-center text-gray-200 justify-between">
                <p className="text-5xl max-md:text-[28px]">$1M+</p>
                <p>
                  Transaction
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-[554px]">
            <img
              className="h-[38rem] max-md:hidden"
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt="images"
            />
            <img
              className="md:hidden max-md:m-auto rounded-3xl shadow-lg shadow-[#F88BE0]"
              src={image3}
              alt="image3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
