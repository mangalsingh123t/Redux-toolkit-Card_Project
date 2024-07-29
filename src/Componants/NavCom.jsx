import { useState } from "react";
import { useSelector } from "react-redux";
import img from '../assets/cart2.png';

export default function NavCom() {
    const itemCount = useSelector((state) => state.cardItem.item);
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a className="text-white text-xl font-semibold" href="#">Navbar</a>
                    <button 
                        className="lg:hidden text-white" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded={isOpen} 
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:space-x-4" id="navbarSupportedContent">
                        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                            <li>
                                <a className="text-white hover:text-gray-300" href="#">Home</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300" href="#">Link</a>
                            </li>
                        </ul>
                        <div className="flex items-center ml-4 relative">
                            <img className="w-10 filter invert brightness-0" src={img} alt="shopping cart" />
                            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-semibold absolute start-7 top-0">{itemCount}</span>
                        </div>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="bg-gray-800 p-4 md:hidden " id="navbarSupportedContent">
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <a className="text-white hover:text-gray-300" href="#">Home</a>
                        </li>
                        <li>
                            <a className="text-white hover:text-gray-300" href="#">Link</a>
                        </li>
                    </ul>
                    <div className="flex items-center mt-4 relative">
                        <img className="w-10 filter invert brightness-0" src={img} alt="shopping cart" />
                        <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs font-semibold absolute start-7 top-0">{itemCount}</span>
                    </div>
                </div>
            )}
        </>
    );
}
