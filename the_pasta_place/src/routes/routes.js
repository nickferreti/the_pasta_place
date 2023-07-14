import Footer from 'components/footer'
import Menu from 'components/menu'
import PagPadrao from 'components/pagPadrao'
import Cardapio from 'pages/Cardapio'
import Prato from 'pages/Prato'
import Sobre from 'pages/Sobre'
import Inicio from 'pages/inicio'
import NotFound from 'pages/notFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function AppRouter() {
    let pratos = [...Cardapio]
    return (
        <main className='container'>
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
                            element={<Sobre />}
                        />
                        <Route
                            path='pratos/:id'
                            element={<Prato />}
                        />
                    </Route>
                    <Route
                            path='*'
                            element={<NotFound />}
                        />
                </Routes>
                <Footer/>
            </Router>
        </main>
    )
}