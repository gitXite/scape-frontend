import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/customize' element={<Customize />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </Router>
    );
}

export default App;
