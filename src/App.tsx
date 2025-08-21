import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-started' element={<GetStarted />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
