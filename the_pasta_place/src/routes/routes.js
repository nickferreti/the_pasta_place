import Menu from 'components/menu'
import PagPadrao from 'components/pagPadrao'
import Cardapio from 'pages/Cardapio'
import Sobre from 'pages/Sobre'
import Inicio from 'pages/inicio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu />
                <Routes>
                    <Route
                        path='/'
                        element={<PagPadrao />}>
                        <Route
                            index
                            element={<Inicio />}
                        />
                        <Route
                            path='Cardapio'
                            element={<Cardapio />}
                        />
                        <Route
                            path='sobre'
                            element={<Sobre/>}
                        />
                    </Route>
                </Routes>
            </Router>
        </main>
    )
}