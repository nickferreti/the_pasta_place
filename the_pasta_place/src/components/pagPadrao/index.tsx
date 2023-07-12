import style from './padrao.module.scss'
import { Outlet } from 'react-router-dom'

export default function PagPadrao() {
    return (
        <>
            <header className={style.header}>
                <div className={style.header__text}>
                    A maior casa de massas
                </div>
            </header>
            <div>
                <Outlet />
            </div>
        </>
    )
}