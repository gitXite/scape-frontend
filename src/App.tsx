import { BrowserRouter as Router, Routes, Route } from 'react-router';
// import 'vanilla-cookieconsent/dist/cookieconsent.css';
// import * as CookieConsent from 'vanilla-cookieconsent';
// import { useEffect } from 'react';
import Home from './pages/Home';
import GetStarted from './pages/GetStarted';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Shipping from './pages/Shipping';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Returns from './pages/Returns';
import Cookies from './pages/Cookies';

function App() {
    // useEffect(() => {
    //     CookieConsent.run({
    //         guiOptions: {
    //             consentModal: {
    //                 layout: 'box',
    //                 position: 'bottom left',
    //                 equalWeightButtons: true,
    //                 flipButtons: false
    //             },
    //             preferencesModal: {
    //                 layout: 'box',
    //                 equalWeightButtons: true,
    //                 flipButtons: false
    //             }
    //         },
    //         categories: {
    //             necessary: {
    //                 enabled: true,
    //                 readOnly: true,
    //             },
    //             // analytics: {},
    //             // ads: {},
    //         },
    //         language: {
    //             default: 'en',
    //             translations: {
    //                 en: {
    //                     consentModal: {
    //                         title: 'We use cookies',
    //                         description:
    //                             'We value your privacy. Choose which cookies you want to allow. Essential cookies are always enabled as they are necessary for the website to function properly.',
    //                         acceptAllBtn: 'Accept all',
    //                         acceptNecessaryBtn: 'Reject all',
    //                         showPreferencesBtn: 'Manage Individual preferences',
    //                         // closeIconLabel: 'Reject all and close modal',
    //                         footer: `
    //                             <a href="/privacy-policy" target="_blank">Privacy Policy</a>
    //                             <a href="/terms-of-service" target="_blank">Terms & Conditions</a>
    //                         `,
    //                     },
    //                     preferencesModal: {
    //                         title: 'Manage cookie preferences',
    //                         acceptAllBtn: 'Accept all',
    //                         acceptNecessaryBtn: 'Reject all',
    //                         savePreferencesBtn: 'Accept current selection',
    //                         closeIconLabel: 'Close modal',
    //                         serviceCounterLabel: 'Service|Services',
    //                         sections: [
    //                             {
    //                                 title: 'Your Privacy Choices',
    //                                 description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
    //                             },
    //                             {
    //                                 title: 'Strictly Necessary',
    //                                 description:
    //                                     'These cookies are essential for the proper functioning of the website and cannot be disabled.',

    //                                 //this field will generate a toggle linked to the 'necessary' category
    //                                 linkedCategory: 'necessary',
    //                             },
    //                             {
    //                                 title: 'Performance and Analytics',
    //                                 description:
    //                                     'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
    //                                 linkedCategory: 'analytics',
    //                             },
    //                             {
    //                                 title: 'Targeting and Advertising',
    //                                 description:
    //                                     'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
    //                                 linkedCategory: 'ads',
    //                             },
    //                             {
    //                                 title: 'More information',
    //                                 description:
    //                                     'For any queries in relation to my policy on cookies and your choices, please <a href="/contact-us">contact us</a>',
    //                             },
    //                         ],
    //                     },
    //                 },
    //             },
    //         },
    //     });
    // }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/get-started' element={<GetStarted />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/testimonials' element={<Testimonials />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/faq' element={<FAQ />} />
                <Route path='/shipping' element={<Shipping />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='/feedback' element={<Feedback />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/terms-of-service' element={<TermsOfService />} />
                <Route path='/returns' element={<Returns />} />
                <Route path='/cookies' element={<Cookies />} />
            </Routes>
        </Router>
    );
}

export default App;
