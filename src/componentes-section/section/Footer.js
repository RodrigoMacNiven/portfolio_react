import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/rodrigomacniven'> <FaInstagram size={30} /> </a> </li>
                <li><a href='https://www.facebook.com/rodrigo.macniven'> <FaFacebook size={30} /> </a> </li>
                <li><a href='https://github.com/RodrigoMacNiven'> <FaGithub size={30} /> </a> </li>
            </ul>
            <p> rodrigololz@hotmail.com </p>
            <p> Rodrigo Mac Niven @ 2023 </p>
        </div>
    )
}

export default Footer