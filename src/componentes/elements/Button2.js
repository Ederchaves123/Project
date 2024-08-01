import styles from './Button2.module.css'

function Button2({text}){
    return(
        <button className={styles.Button}> {text} </button>
    )
}

export default Button2