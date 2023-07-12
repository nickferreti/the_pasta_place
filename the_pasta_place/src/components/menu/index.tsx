import style from './menu.module.scss'
import logo from 'assets/logo.png'
import { Link } from 'react-router-dom'

export default function Menu() {
    const rotas = [
        {
            label: 'Início',
            to: '/'
        },
        {
            label: 'Cardápio',
            to: '/Cardapio'
        },
        {
            label: 'Sobre',
            to: '/Sobre'
        }
    ]
    return (
        <nav className={style.menu}>
            <img src={logo} alt='logo TPP'></img>
            <ul className={style.menu__list}>
                {rotas.map((rotas, index) => (
                    <li key={index} className={style.menu__link}>
                        <Link to={rotas.to}>
                            {rotas.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}