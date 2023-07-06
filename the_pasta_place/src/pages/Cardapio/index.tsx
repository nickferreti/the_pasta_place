import style from './Cardapio.module.scss'
import logo from 'assets/logo.png'

export default function Cardapio() {
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt='logo TPP'></img>
            </nav>
            <header className={style.header}>
                <div className={style.header__text}>
                    A maior casa de massas
                </div>
            </header>
        </main>
    );
}