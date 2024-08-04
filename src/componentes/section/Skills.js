import styles from './Skills.module.css'
import java from '../section/image/java.svg'
import html from '../section/image/html.svg'
import css from '../section/image/css.svg'
import typescript from '../section/image/typescript.svg'
import react from '../section/image/react.svg'

function Skills(){
    return(
        <div id='Skills' className={styles.Skills}>
         <h1>MY SKILLS</h1>
         <p>Learn about some of my key skills and knowledge.</p>
          <div className={styles.Image}>
            <img className={styles.java} src={java} alt="error"></img>
            <img className={styles.css}  src={css} alt="error"></img>
            <img className={styles.react} src={react} alt="error"></img>
            <img className={styles.html} src={html} alt="error"></img>
            <img className={styles.typescript} src={typescript} alt="error"></img>
          </div>
        </div>
    )
}

export default Skills