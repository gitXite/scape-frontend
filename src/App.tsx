import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-started' element={<GetStarted />} />
            </Routes>
        </Router>
    );
}

export default App;
