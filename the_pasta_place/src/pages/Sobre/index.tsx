import style from './sobre.module.scss'
import styleTema from 'styles/tema.module.scss'
import casa from 'assets/Sobre/casa.png'
import massa1 from 'assets/Sobre/massa1.png'
import massa2 from 'assets/Sobre/massa2.png'

const imagens = [massa1, massa2]
export default function Sobre() {
    return (
        <section>
            <h3 className={styleTema.titulo}>
                Sobre
            </h3>
            <div className={style.sobreNos}>
                <img src={casa} alt='Casa The pasta place' />
                <div className={style.sobreNos__texto}>
                    <p>
                        Nós do The Pasta Place oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São José! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
                    </p>
                    <p>
                        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
                    </p>
                    <p>
                        Para acompanhar as massas italianas, The Pasta Place possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
                    </p>
                </div>
            </div>
            <div className={style.imagens}>
                    {imagens.map((imagem, index) => (
                        <div 
                        key={index}
                        className={style.imagens__imagem}>
                            <img src={imagem} alt='imagem de massa'/>
                        </div>
                    ))}
                </div>
        </section>
    )
}