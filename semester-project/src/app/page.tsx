import HelpSection from './_components/help/HelpSection';


import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.main}>
     
     
     
    
      
      <div className={styles.discoverFrame2}>

      


        <div className={styles.discover}>

        


          <h1 className={styles.discoverTitle}>About us</h1>
          <p className={styles.discoverText}>
            Welcome to Photon Fiber Interactive, a passionate indie gaming studio from the beautiful country of Croatia!
            We embark on a creative journey that blends innovation with a deep love for storytelling.
          </p>

        </div>
        
      </div>
      <div className={styles.Frame3}>
        <HelpSection />
      </div>
      

      <div className={styles.discoverFrame2}>
        <div className={styles.discover}>
          <h1 className={styles.discoverTitle}> Contact us</h1>
          <p className={styles.discoverText}>
            We are always thrilled to hear from our community and partners.
            Here is how you can reach us:
        
          </p>

          <p className={styles.discoverText}>
          photon.fiber.interactive@gmail.com
            
          </p>

    
        </div>
        </div>
    </div>
  );
}