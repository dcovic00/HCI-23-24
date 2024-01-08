import Link from "next/link";
import Logo from "./Logo";
import styles from '../home.module.css'

const Footer = () => {
  return (
   
    <footer className="bg-[#000000]">
         
          
           <hr className="my-6 border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-3" />
           <span className="block text-base text-white sm:text-center"> Photon Fiber Interactive 2023</span>

            <div className="sm:flex sm:items-center sm:justify-center ">

            </div>
            <div className="h-4"></div> {/* Add space below the text */}
         
      </footer>
    
  );
};

export default Footer;