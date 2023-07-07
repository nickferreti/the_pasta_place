import logo from 'assets/logo.png'
import style from './item.module.scss'
import cardapio from '../itens.json'

type Props = typeof cardapio[0]

export default function Item(props: Props) {
    const {... Props } = props;
    return (
        <div className={style.item}>
            <div className={style.item__imagem}>
                <img src={Props.photo} alt={Props.title}/>
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
                    <div className={style.item__tipo}>
                        {Props.category.label}
                    </div>
                    <div className={style.item__porcao}>
                        {Props.size}
                    </div>
                    <div className={style.item__qtdpessoas}>
                        Serve até {Props.serving} Pessoas
                    </div>
                    <div className={style.item__valor}>
                        R${Props.price}
                    </div>
                </div>
            </div>
        </div>
    )
}