import style from './padrao.module.scss'
import { Outlet } from 'react-router-dom'
import styleTema from 'styles/tema.module.scss'

export default function PagPadrao() {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                    A maior casa de massas
                </div>
            </header>
            <div className={styleTema.container}>
                <Outlet />
            </div>
        </>
    )
}