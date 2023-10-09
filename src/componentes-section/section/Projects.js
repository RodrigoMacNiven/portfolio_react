import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc    from '../../image/projects/lpdnc.svg'
import portfolio from '../../image/projects/portfolio.svg'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'> 
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title=" LP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page. Serviu como primeiro teste do curso de Fullstack!"
            repo="https://github.com/RodrigoMacNiven/Landing_Page"
            site="https://primeiralandingpagednc.netlify.app/"     
            />
            
            <Card 
             img={portfolio}
             title=" Portfolio React"
             tech="React"
             description="Desenvolvimento de um portfolio utilizando React! Projeto simples, mas prazeroso!"
             repo="https://github.com/RodrigoMacNiven/portfolio"
             site="https://portfolio-rodrigomacniven.netlify.app/"     
             />
             
            <ButtonB text='Acesse meu repositório' link='https://github.com/RodrigoMacNiven'/>
        </div>
    )
}

export default Projects