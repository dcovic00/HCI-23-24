import Image, { StaticImageData } from "next/image";
import styles from './help.module.css'
import { FC, SVGProps } from "react";
import Link from "next/link";
import Pic from "../../../../public/images/GamesIcon.jpg"

const HelpSection: FC<SVGProps<SVGSVGElement>> = ({
    width = 42,
    height = 42,
    ...rest
  }) => {
    return (
        <div className={styles.help}>
            <Link href={`/games`} className={styles.group}>
                <div className={styles.icon}>
                    <div className={styles.centeredImage}>
                        
                        <Image src="/images/GamesIcon.jpg"  alt="Icon" width={150} height={150} />
                    </div>
                </div>
                <div className={styles.title}>Games</div>
     
            </Link>
            <Link href={`/assets`} className={styles.group}>
                <div className={styles.icon}>
                    <div className={styles.centeredImage}>
                        <Image src="/images/AssetsIcon.jpg" alt="Icon" width={150} height={150} />
                    </div>
                </div>
                <div className={styles.title}>Assets</div>
             
            </Link>


            <Link href={`/subscribe`} className={styles.group}>
                <div className={styles.icon}>
                    <div className={styles.centeredImage}>
                        <Image src="/images/SubscribeIcon.jpg" alt="Icon" width={150} height={150} />
                    </div>
                </div>
                <div className={styles.title}>Subscribe</div>
            
            </Link>

            <Link href={`/support`} className={styles.group}>
                <div className={styles.icon}>
                    <div className={styles.centeredImage}>
                        <Image src="/images/SupportIcon.jpg" alt="Icon" width={150} height={150} />
                    </div>
                </div>
                <div className={styles.title}>Support</div>
            
            </Link>

            
            <Link href={`/careers`} className={styles.group}>
                <div className={styles.icon}>
                    <div className={styles.centeredImage}>
                        <Image src="/images/CareersIcon.jpg" alt="Icon" width={150} height={150} />
                    </div>
                </div>
                <div className={styles.title}>Careers</div>
                
            </Link>

       



        </div>
    );
  };

export default HelpSection;