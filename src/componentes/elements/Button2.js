import styles from './Button2.module.css';

function Button2({ text, link }) {
    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

    return (
        <button className={styles.Button} onClick={handleClick}>
            {text}
        </button>
    );
}

export default Button2;
