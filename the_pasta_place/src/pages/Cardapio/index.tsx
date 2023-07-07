import style from './Cardapio.module.scss'
import logo from 'assets/logo.png'
import Buscador from './buscador';
import { useState } from 'react';
import Filtro from './filtros';
import Ordenador from './Ordenador';



export default function Cardapio() {
    const [busca, setBusca] = useState("")
    const [filtro, setFiltro] = useState<number | null>(null)
    const [ordenador, setOrdenador] = useState("");
    return (
        <main>
            <nav className={style.menu}>
                <img src={logo} alt='logo TPP'></img>
            </nav>
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
            </section>
        </main>
    );
}