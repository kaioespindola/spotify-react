import { Routes, Route } from 'react-router-dom';
import './App.scss';

// Pages
import Home from './pages/Home';

// Components
import Container from './theme/styles/Container';
import Menu from './components/Menu/Menu';

const App = () => {
    return (
        <Container>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </Container>
    );
}

export default App;