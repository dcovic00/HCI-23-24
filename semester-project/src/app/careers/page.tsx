import styles from './careers.module.css';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import logoImage from '../../../public/images/logo.png';
import Image from 'next/image';

export default function CareersPage() {
    return (
      <div className={styles.main}>
        <div className={styles.discoverFrame2}>
          <div className={styles.discover}>
            <h1 className={styles.discoverTitle}>
                &lt;Join the crew!&gt;
            </h1>
           
          </div>
        </div>



 {/*GAME DESIGN*/} 
        <div className={styles.jobCategoryFrame}>
          
          
          <div className={styles.jobCategoryTitle}>
            <div className={styles.discover}>
              <h1 className={styles.discoverTitle}>GAMEPLAY DESIGN</h1>
            </div>
          </div>


          <div className={styles.jobsGrid}>
            
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>UI/UX Designer</h1>
                    <p className={styles.discoverText}>
                    Join our team as a UI/UX Designer and play a pivotal role in crafting seamless and visually stunning user experiences. Collaborate closely with cross-functional teams to design and implement interfaces that elevate user engagement and satisfaction.
                    </p>
                </div>
                </div>
  
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Level Designer</h1>
                    <p className={styles.discoverText}>
                    As a Level Designer, unleash your creativity to shape immersive and challenging game environments. Work closely with the development team to conceptualize, design, and implement captivating levels that enhance player experiences and narrative progression.
                    </p>
                </div>
                </div>
      
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Game Tester</h1>
                    <p className={styles.discoverText}>
                    Become a crucial part of our quality assurance team as a Game Tester. Dive into the heart of our games, meticulously testing for bugs and ensuring the highest standard of gameplay quality. Your insights will contribute to delivering an unparalleled gaming experience to our players.
                    </p>
                </div>
                </div>
  
             


        
        </div>
    </div>
  



{/*ENGINEERING*/}
<div className={styles.jobCategoryFrame}>
          
          
          <div className={styles.jobCategoryTitle}>
            <div className={styles.discover}>      
              <h1 className={styles.discoverTitle}>PROGRAMMING</h1>
            </div>
          </div>


          <div className={styles.jobsGrid}>
            
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>AI Programmer</h1>
                    <p className={styles.discoverText}>
                    Elevate our games to new heights by joining as an AI Programmer. Develop cutting-edge artificial intelligence systems that bring our virtual worlds to life. Collaborate with a talented team to create intelligent, adaptive, and engaging game entities.
                    </p>
                </div>
                </div>
  
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Graphics Programmer</h1>
                    <p className={styles.discoverText}>
                    Shape the visual identity of our games as a Graphics Programmer. Implement and optimize graphical features that push the boundaries of visual fidelity. Join us in creating stunning and immersive gaming experiences through advanced graphics technology.
                    </p>
                </div>
                </div>
      
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Network Programmer</h1>
                    <p className={styles.discoverText}>
                    Join our network programming team to build robust and scalable multiplayer experiences. Develop and optimize networking solutions, ensuring seamless connectivity and responsive gameplay. Contribute to the backbone of our online gaming community.
                    </p>
                </div>
                </div>
  
             


        
        </div>
    </div>





 {/*SOUND*/} 
 <div className={styles.jobCategoryFrame}>
          
          
          <div className={styles.jobCategoryTitle}>
            <div className={styles.discover}>
              <h1 className={styles.discoverTitle}>SOUND DESIGN</h1>
            </div>
          </div>


          <div className={styles.jobsGrid}>
            
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Sound  Designer</h1>
                    <p className={styles.discoverText}>
                    Immerse players in captivating audio landscapes as a Sound Designer. Collaborate with creative teams to craft audio elements that enhance the emotional depth and immersive qualities of our games. Your work will resonate with players long after they've put down their controllers.
                    </p>
                </div>
                </div>
  
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Music Composer</h1>
                    <p className={styles.discoverText}>
                    Enrich our games with memorable and evocative soundtracks by joining us as a Music Composer. Create compositions that breathe life into the game world, complementing its narrative and enhancing the overall player experience.
                    </p>
                </div>
                </div>
      
             
  
             


        
        </div>
    </div>
  




 {/*Cybersecurity */} 
 <div className={styles.jobCategoryFrame}>
          
          
          <div className={styles.jobCategoryTitle}>
            <div className={styles.discover}>
              <h1 className={styles.discoverTitle}>CYBERSECURITY</h1>
            </div>
          </div>


          <div className={styles.jobsGrid}>
            
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Cybersecurity Analyst</h1>
                    <p className={styles.discoverText}>
                    Safeguard our digital realms by becoming a Cybersecurity Analyst. Protect our games, platforms, and user data from potential threats. Join our dedicated cybersecurity team in ensuring the integrity and security of our gaming ecosystem.
                    </p>
                </div>
                </div>
  
                <div className={styles.jobPositionFrame}>
                    <div className={styles.discover}>
                    <h1 className={styles.discoverTitle}>Security Tester</h1>
                    <p className={styles.discoverText}>
                    As a Security Tester, play a vital role in fortifying our games against potential vulnerabilities. Conduct thorough security assessments, identify risks, and work with development teams to implement robust security measures. Help us ensure a safe and secure gaming environment for all players.
                    </p>
                </div>
                </div>
      
           
             


        
        </div>
    </div>





      <div className={styles.discoverFrame2}>
          <div className={styles.discover}>
            <h1 className={styles.discoverTitle}> &lt;Careers&gt;</h1>
            <p className={styles.discoverText}>
            Embark on a journey with us! Explore exciting career opportunities and join a dynamic team dedicated to innovation and growth. Discover your potential, make an impact! 
            </p>
          </div>
        </div>











      </div>
    );
  }
  
