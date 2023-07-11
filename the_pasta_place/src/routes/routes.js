import Menu from 'components/menu'
import Cardapio from 'pages/Cardapio'
import Inicio from 'pages/inicio'
import style from './routes.module.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <header className={style.header}>
                    <div className={style.header__text}>
                        A maior casa de massas
                    </div>
                </header>
                <Routes>
                    <Route
                        path='/'
                        element={<Inicio />}
                    />
                    <Route
                        path='/Cardapio'
                        element={<Cardapio />}
                    />
                </Routes>
            </Router>
        </main>
    )
}