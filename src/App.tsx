import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';
import Map from './pages/Map';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-started' element={<GetStarted />} />
                <Route path='/get-started/map' element={<Map />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
        </Router>
    );
}

export default App;
