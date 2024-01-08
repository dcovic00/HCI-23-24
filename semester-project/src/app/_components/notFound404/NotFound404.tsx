import styles from './notfound404.module.css';
import Link from "next/link";
import Image from 'next/image';

const NotFound404 = () => {
    return (
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.header1}>NotFound</h1>
            
                </div>
              
            </div>
            
    
        </div>
    )
    
}

export default NotFound404;