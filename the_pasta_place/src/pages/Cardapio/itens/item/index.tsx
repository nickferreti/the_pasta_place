import style from './item.module.scss'
import cardapio from 'data/cardapio.json'
import classnames from 'classnames'

type Props = typeof cardapio[0]

export default function Item(props: Props) {
    const { category, ...Props } = props;
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={Props.photo} alt={Props.title} />
            </div>
            <div className={style.item__descricao}>
                <div className={style.item__titulo}>
                    <h2>
                        {Props.title}
                    </h2>
                    <p>
                        {Props.description}
                    </p>
                </div>
                <div className={style.item__tags}>
                    <div className={classnames({
                        [style.item__tipo]: true,
                        [style[`item__tipo__${category.label.toLowerCase()}`]]: true
                    })}>
                        {category.label}
                    </div>
                    <div className={style.item__porcao}>
                        {Props.size}g
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve {Props.serving} Pessoa{Props.serving === 1 ? "" : "s"}
                    </div>
                    <div className={style.item__valor}>
                        R$ {Props.price.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}