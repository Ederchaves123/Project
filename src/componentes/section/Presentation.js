import styles from './Presentation.module.css';
import Button from '../elements/Button';

function Presentation() {

    return (
        <div id='Presentation' className={styles.Presentation}>
            <h2>Welcome to my Portfolio</h2>
            <h1>Hey, My name is Éder!</h1>
            <p>
                I am passionate about technology and innovative solutions.
                <br />
                I began studying full stack development and am currently building 
                <br />
                a strong foundation in both front-end and back-end technologies.
                <br />
                I have gained skills in HTML, CSS, JavaScript, and am learning 
                <br />
                frameworks such as React and Node.js.
                <br />
                I am also familiar with version control using Git.
            </p>
            <div className={styles.btn}>
                <a target="_blank" rel="noopener noreferrer" href='https://bit.ly/3STJ0xe?fbclid=PAZXh0bgNhZW0CMTEAAaabCF9JVBh7Co98F8GuvH6sA11i4BLjzq_kXwFr7B4c-Q74UecC-qR_7ZQ_aem_kGX5Dd_7BxBhfOkJlB96jg.'><Button  text='Connect with me!'/></a>
            </div>
        </div>
    );
}

export default Presentation;
