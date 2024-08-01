import styles from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.Footer}>
            <ul>
                <a href='https://www.instagram.com/ederchaves_personal?igsh=enFwdWljaGw5MGp6'> <li><FaInstagram size={40} /> </li> </a>
                
                <a href='https://github.com/Ederchaves123'> <li><FaGithub size={40} /></li> </a>
                
                <a href='https://www.linkedin.com/in/%C3%A9der-jos%C3%A9-grzybowski-chaves-582a71180/'> 
                <li><FaLinkedin size={40} /></li></a>

                </ul>

                <p>eder.cca@gmail.com</p>
                <p>Éder Chaves © 2024</p>
        </div>
    )
}

export default Footer