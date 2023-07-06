import filtros from './filtros.json'
import style from './Filtros.module.scss'

type Iopcao = typeof filtros[0]

export default function Filtro() {
    function selecionarFiltro(opcao: Iopcao) {}
    return(
        <div 
        className={style.filtros}
        >
            {filtros.map((opcao) => (
                <button 
                className={style.filtros__filtro}
                key={opcao.id} 
                onClick={() => selecionarFiltro(opcao)}
                >
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}