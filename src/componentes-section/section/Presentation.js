import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentantion(){
    return(
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Rodrigo Machado!</h1>
            <p> Sou um apaixonado por tecnologia e soluções inovadoras. <br />
                Como Product Manager, eu tenho o compromisso de resolver problemas<br />
                complexos e trazer resultados excepcionais para os negócios.<br />
                Meus projetos já gerraram milhões de reais em receita anual <br />
                e estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link= 'https://github.com/RodrigoMacNiven' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentantion