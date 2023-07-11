import style from './Cardapio.module.scss'
import Buscador from './buscador';
import { useState } from 'react';
import Filtro from './filtros';
import Ordenador from './Ordenador';
import Itens from './itens';
import Menu from 'components/menu';



export default function Cardapio() {
    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <Menu/>
            <header className={style.header}>
                <div className={style.header__text}>
                    A maior casa de massas
                </div>
            </header>
            <section className={style.cardapio}>
                <h3 className={style.cardapio__titulo}>
                    Cardapio
                </h3>
                <Buscador
                busca={busca}
                setBusca={setBusca}/>
                <div className={style.cardapio__filtros}>
                    <Filtro filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens 
                busca={busca}
                filtro={filtro}
                ordenador={ordenador}
                />
            </section>
        </main>
    );
}