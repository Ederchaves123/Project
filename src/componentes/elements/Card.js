import styles from './Card.module.css';
import Button2 from './Button2';

function Card({ img, title, prhase, description, repo, link }) {
    return (
        <div className={styles.Card}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt='Project image' />
            </a>

            <div>
                <h3>{title}</h3>
                <p><strong>Technologies:</strong> {prhase}</p>
                <p>{description}</p>
                <Button2 text='Repository access' link={repo} />
            </div>
        </div>
    );
}

export default Card;
