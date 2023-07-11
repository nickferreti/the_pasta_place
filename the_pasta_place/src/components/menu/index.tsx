import style from './menu.module.scss'
import logo from 'assets/logo.png'

export default function Menu() {
    return(
        <nav className={style.menu}>
            <img src={logo} alt='logo TPP'></img>
        </nav>
    )
}