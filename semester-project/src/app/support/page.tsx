import styles from './support.module.css';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import logoImage from '../../../public/images/logo.png';
import Image from 'next/image';

export default function SuppportPage() {
    return(
        <div className={styles.main}>
                
    
                <div className={styles.discoverFrame2}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>
                        &lt;Need help?&gt;
                    </h1>

                   
                
                    </div>
                </div>
    

                <div className={styles.discoverFrame3Pair}>
              <div className={styles.discoverFrame3}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Technical Help</h1>
                        <p className={styles.discoverText}>
                        
                        Need help troubleshooting? Contact our technical support experts for personalized solutions.
                        </p>
              </div>
              </div>
              <div className={styles.discoverFrame3}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Account Support</h1>
                        <p className={styles.discoverText}>
                      
                        Forgot your password or need account recovery? Get in touch with our account support specialists.
                        </p>
              </div>
              </div>
    </div>
    <div className={styles.discoverFrame3Pair}>
              <div className={styles.discoverFrame3}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}> Community Forums</h1>
                        <p className={styles.discoverText}>
                       
                        oin our vibrant community forums to connect with fellow users and share experiences.
                        </p>
              </div>
            </div>

            <div className={styles.discoverFrame3}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Knowledge Base</h1>
                        <p className={styles.discoverText}>
                        
                        Access our comprehensive knowledge base for self-help articles and step-by-step guides.
                        </p>
                </div>

                </div>
           </div>


           <div className={styles.discoverFrame2}>
                    <div className={styles.discover}>
                    
                    <h1 className={styles.discoverTitle}>
                        &lt;Support&gt;
                    </h1>

                    <p className={styles.discoverText}>
                    If you're facing any issues, don't hesitate to reach out to our support team.
                    We offer multiple channels to connect with us, including email support, live chat, and a comprehensive FAQ section.
                   
                    </p>
                
                    </div>
                </div>



        </div>
    );
}
