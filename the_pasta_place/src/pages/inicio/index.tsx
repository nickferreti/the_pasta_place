import Cardapio from 'data/cardapio.json'
import style from './inicio.module.scss'
import styleTema from 'styles/tema.module.scss'
import nossa_casa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'


export default function Inicio() {
    let pratosRecomendados = [...Cardapio]
    pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3)

    const navigate = useNavigate()
    function redirecionarDetalhes(Prato: typeof Cardapio[0]) {
        navigate(`/prato/${Prato.id}`, {state: {...Prato}, replace: true})
    }   
    return (
        <section>
            <h3
                className={styleTema.titulo}
            >
                Recomendações da cozinha
            </h3>
            <div className={style.recomendados}>
                {pratosRecomendados.map(item => (
                    <div
                        key={item.id}
                        className={style.recomendado}
                    >
                        <div
                            className={style.recomendado__imagem}
                        >
                            <img
                                src={item.photo}
                                alt={item.title} />
                        </div>

                        <button
                            onClick={() => redirecionarDetalhes(item)}
                            className={style.recomendado__botao}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={styleTema.titulo}>
                Nossa Casa
            </h3>
            <div className={style.nossaCasa}>
                <img src={nossa_casa} alt='The pasta place'/>
                <div className={style.nossaCasa__endereco}>
                    Av. Pres Kennedy, 428 <br/> <br/> São José - SC
                </div>
            </div>
        </section>
    )
}