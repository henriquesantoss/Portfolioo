
import Header from '../../components/header'
import Footer from '../../components/footer'
import Container from '../../components/container'
import { Outlet } from 'react-router-dom'

function PaginaBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PaginaBase
