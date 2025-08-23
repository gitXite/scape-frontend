import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Checkout from './pages/Checkout';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/customize' element={<Customize />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
