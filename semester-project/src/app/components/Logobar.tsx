'use client'

import Link from "next/link";
import { FC, useState } from "react";
import Logo from "./Logo";
import styles from './nav.module.css';
import { cn } from "../../../lib/utils";
import { usePathname } from "next/navigation";

interface NavbarProps {
  // Record of string keys and string values where each value is a path starting with a slash
  pages: Record<string, `/${string}`>;
}

const baseClass =
  "uppercase whitespace-nowrap text-base px-5 py-5 text-[#065E33] hover:bg-[#B3E0CA]";
  
const Logobar = ({  }) => {
    const pathName = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };
      
      const handleLinkClick = () => {
        setIsMobileMenuOpen(false); 
    };

    return (
     
        <nav className={styles.logoBarContainer}>

            <Link href={`/`}>
                <Logo />
            </Link>
           
        </nav>
  );
};

export default Logobar;