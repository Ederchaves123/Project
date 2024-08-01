import styles from './Navb.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Navb() {
    return (
        <nav className={styles.Navb}>
                <ul id='#components'>
                    <a href='#Presentation'><li>Apresentação</li></a>
                    <a href='#Skills'><li>Habilidades</li></a> 
                    <a href='#Projects'><li>Projetos</li></a>
                </ul>



                <ul id='#socialMedia'>
                <a href='https://www.instagram.com/ederchaves_personal?igsh=enFwdWljaGw5MGp6'> <li><FaInstagram size={30} /> </li> </a>
                
                <a href='https://github.com/Ederchaves123'> <li><FaGithub size={30} /></li> </a>
                
                <a href='https://www.linkedin.com/in/%C3%A9der-jos%C3%A9-grzybowski-chaves-582a71180/'> 
                <li><FaLinkedin size={30} /></li></a>

                </ul>
        </nav>
    );
}

export default Navb;
