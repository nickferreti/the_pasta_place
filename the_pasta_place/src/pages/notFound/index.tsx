import style from './notFound.module.scss'
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg'
import classNames from 'classnames'
import stylesTema from 'styles/tema.module.scss'

export default function NotFound() {
    return(
        <div className={classNames({
            [style.container]: true,
            [stylesTema.container]: true
        })}>
            <NotFoundImage/>
        </div>
    )
}