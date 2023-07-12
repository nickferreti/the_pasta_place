import style from './footer.module.scss'
import logo from 'assets/logo.png'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <img src={logo} alt="Logo The Pasta Place" />
        </footer>
    )
}