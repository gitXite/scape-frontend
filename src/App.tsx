import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import FeedbackPage from './pages/FeedbackPage';
import AboutUs from './pages/AboutUs';
import TestimonialsPage from './pages/TestimonialsPage';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Returns from './pages/Returns';
import Cookies from './pages/Cookies';
import { Toaster } from 'sonner';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/get-started' element={<GetStarted />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/testimonials' element={<TestimonialsPage />} />
                    {/* <Route path='/gallery' element={<Gallery />} /> */}
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/shipping' element={<Shipping />} />
                    <Route path='/contact-us' element={<Contact />} />
                    <Route path='/feedback' element={<FeedbackPage />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/terms-of-service' element={<TermsOfService />} />
                    <Route path='/returns' element={<Returns />} />
                    <Route path='/cookies' element={<Cookies />} />
                </Routes>
            </Router>
            <Toaster position='top-center' />
        </>
    );
}

export default App;
