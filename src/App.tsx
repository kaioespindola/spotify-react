import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

// Components
import { Container, Content } from './theme/styles/Containers';
import Sidebar from './components/Sidebar/Sidebar';
import Media from './components/Media/Media';

const App = () => {
    return (
        <>
            <Container>
                <Sidebar />
                <Content>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Content>
            </Container>
            <Media />
        </>
    );
}

export default App;