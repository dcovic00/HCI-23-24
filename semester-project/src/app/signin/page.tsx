import styles from './signin.module.css';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import logoImage from '../../../public/images/logo.png';
import Image from 'next/image';

export default function SigninPage() {
    return(
        <div className={styles.main}>
            
            <div className={styles.discoverFrame3}>
                    <div className={styles.discover}>
                    
                    <h1 className={styles.discoverTitle}>
                        &lt;Welcome back!&gt;
                    </h1>
                
                    </div>
                </div>



               

                <div className={styles.loginBoxContainer}>
            <div className={styles.loginBox}>
                <div className={styles.logoWrapper}>
                    <Image src={logoImage} alt="Logo" width={300} height={300} />
                </div>
               
                <form>
                    <input type="text" placeholder="Username" autoFocus />
                    <input type="password" placeholder="Password" />

                   
                
                    
                    <div className={styles.buttonContainer}>
                    <Link
                        href={{
                        pathname: "/login",}}
                        className={clsx(
                        "border bg-[#878787] px-12 py-2  text-white-800 hover:bg-[#252525] hover:text-[#ffffff] text-xl text-center uppercase",
                        )}>
                        SIGN IN
                    </Link>
                    </div>
                </form>
        </div>
        </div>

       
        <div className={styles.discoverFrame3}>
                    <div className={styles.discover}>
                    
                    <h1 className={styles.discoverTitle}>
                        &lt;Sign In&gt;
                    </h1>

                    <p className={styles.discoverText}>
                    Welcome back! Sign in to your account for a personalized experience. Access your profile, manage preferences, and explore exclusive features. 
                    </p>
                
                    </div>
                </div>



    </div>
    );
}
