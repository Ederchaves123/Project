import styles from './Card.module.css'
import Button2 from './Button2'

function Card({img,title,prhase,description,repo,hosp}) {
    return(
        <div className={styles.Card}>
            <a href={hosp}> <img src={img} alt='DNC site'/> </a>

            <div>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {prhase} </p>
                <p>{description}</p>
                <Button2 text={'Acesse o repositório'} link={repo}/>
            </div>
           
        </div>

    )
}

export default Card