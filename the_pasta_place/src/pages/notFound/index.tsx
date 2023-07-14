import style from './notFound.module.scss'
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg'
import classNames from 'classnames'
import stylesTema from 'styles/tema.module.scss'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    return(
        <div className={classNames({
            [style.container]: true,
            [stylesTema.container]: true
        })}>
            <div className={style.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage/>
        </div>
    )
}