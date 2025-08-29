import { BrowserRouter as Router, Routes, Route } from 'react-router';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        CookieConsent.run({
            guiOptions: {
                consentModal: {
                    layout: 'box',
                    position: 'bottom left',
                    equalWeightButtons: true,
                    flipButtons: false
                },
                preferencesModal: {
                    layout: 'box',
                    equalWeightButtons: true,
                    flipButtons: false
                }
            },
            categories: {
                necessary: {
                    enabled: true,
                    readOnly: true,
                },
                analytics: {},
            },
            language: {
                default: 'en',
                translations: {
                    en: {
                        consentModal: {
                            title: 'We use cookies',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            showPreferencesBtn: 'Manage Individual preferences',
                            // closeIconLabel: 'Reject all and close modal',
                            footer: `
                                <a href="/privicy-policy" target="_blank">Privacy Policy</a>
                                <a href="/terms-&-conditions" target="_blank">Terms & Conditions</a>
                            `,
                        },
                        preferencesModal: {
                            title: 'Manage cookie preferences',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            savePreferencesBtn: 'Accept current selection',
                            closeIconLabel: 'Close modal',
                            serviceCounterLabel: 'Service|Services',
                            sections: [
                                {
                                    title: 'Your Privacy Choices',
                                    description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`,
                                },
                                {
                                    title: 'Strictly Necessary',
                                    description:
                                        'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                                    //this field will generate a toggle linked to the 'necessary' category
                                    linkedCategory: 'necessary',
                                },
                                {
                                    title: 'Performance and Analytics',
                                    description:
                                        'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                                    linkedCategory: 'analytics',
                                    cookieTable: {
                                        caption: 'Cookie table',
                                        headers: {
                                            name: 'Cookie',
                                            domain: 'Domain',
                                            desc: 'Description',
                                        },
                                        body: [
                                            {
                                                name: '_ga',
                                                domain: location.hostname,
                                                desc: 'Description 1',
                                            },
                                            {
                                                name: '_gid',
                                                domain: location.hostname,
                                                desc: 'Description 2',
                                            },
                                        ],
                                    },
                                },
                                {
                                    title: 'Targeting and Advertising',
                                    description:
                                        'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                                    linkedCategory: 'ads',
                                },
                                {
                                    title: 'More information',
                                    description:
                                        'For any queries in relation to my policy on cookies and your choices, please <a href="/contact">contact us</a>',
                                },
                            ],
                        },
                    },
                },
            },
        });
    }, []);

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
