import Cardapio from './itens.json'
import Item from './item'
import style from './itens.module.scss'

export default function Itens() {
    return (
        <div className={style.itens}>
            {Cardapio.map(item => (
                <Item 
                key={item.id} 
                {...item}
                />
            ))}
        </div>
    )
}