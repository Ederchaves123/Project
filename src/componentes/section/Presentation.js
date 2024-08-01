import styles from './Presentation.module.css'
import Button from '../elements/Button'

function Presentation() {
    return (
        <div id='Presentation' className={styles.Presentation}>
            <h2>Bem-vindo ao meu Portfólio</h2>
            <h1>Olá, eu sou Eder</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.
                <br />
                Como Product Manager, eu tenho o compromisso de resolver
                <br />
                problemas complexos e trazer resultados excepcionais para os
                <br />
                negócios. Meus projetos já geraram milhões de reais em receita
                <br />
                anual e estou sempre em busca de novos desafios para superar.
            </p>
            <div className={styles.btn}>
                <Button text='Conecte-se comigo!! '/>
            </div>

        </div>
    )
}

export default Presentation