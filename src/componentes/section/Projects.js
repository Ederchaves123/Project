import styles from './Projects.module.css'
import Button2 from '../elements/Button2'
import Card from '../elements/Card'
import sitednc from '../section/image/sitednc.svg'
import site from '../section/image/site.jpg'
import Weather from '../section/image/Weather.jpg'

function Projects() {
    return (
        <div id='Projects' className={styles.Projects}>
            <h1>PROJECTS</h1>
            <Card
                img={sitednc}
                title='DNC landing-page Project '
                prhase='HTML, CSS, JS'
                description='This was my first training project, which involved creating a technology-related website.'
                repo='https://github.com/Ederchaves123/PROJETOSITEDNC'
                link='https://ederchavesdnc.netlify.app/'

            />
            <br /><br /><br /><br />

            <Card img={site}
                title='CCXP Project'
                prhase='HTML, CSS, JS'
                description='This was my second training project, focused on a major tech event in Brazil.'
                repo='https://github.com/Ederchaves123/Weather'
                link='https://ccxpeder.netlify.app/'
            />

            <br /><br /><br /><br />

            <Card img={Weather}
                title='Weather API Project '
                prhase='HTML, CSS, JS'
                description='This was my third training project, focused on a weather API.'
                repo='https://github.com/Ederchaves123/Weather'
                link='https://dncweathereder.netlify.app/'
            />
            <div className={styles.btn}><Button2 text='View my GitHub' link='https://github.com/Ederchaves123?tab=repositories' />
            </div>
        </div>
    )
}

export default Projects