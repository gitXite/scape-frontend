import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';

function PrivacyPolicy() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100 items-center'>
            <BackButton />
            <div className='flex flex-col items-center space-y-5 min-h-full p-10 w-200 text-center text-neutral-900'>
                <h1 className='text-2xl tracking-widest font-normal mb-10'>
                    Privacy Policy
                </h1>
                <h2 className='text-xl tracking-widest m-2'>1. Introduction</h2>
                <p className='mb-8'>
                    We value your privacy. This policy explains what information
                    we collect, how we use it, and your rights.
                </p>

                <h2 className='text-xl tracking-widest m-2'>
                    2. Information We Collect
                </h2>
                <p className='mb-8'>
                    We only collect information that you voluntarily provide,
                    such as:
                        <ul className='my-2'>
                            <li>• Name</li>
                            <li>• Email address</li>
                            <li>• Shipping address</li>
                            <li>• Payment information</li>
                            <li>(processed securely through third-party providers like Vipps)</li>
                        </ul>
                    We do <b>not</b> collect personal data automatically or through tracking cookies, except for
                    essential cookies needed by third-party services to complete
                    transactions.
                </p>

                <h2 className='text-xl tracking-widest m-2'>
                    3. How We Use Your Information
                </h2>
                <p className='mb-8'>
                    Your information is used solely to:
                        <ul className='my-2'>
                            <li>• Process and fulfill orders</li>
                            <li>• Contact you regarding delivery or other updates</li>
                            <li>• Respond to your inquiries</li>
                        </ul>
                    We do <b>not</b> use your information for marketing purposes or share it with third parties except where necessary to complete your order 
                    (e.g., payment processors, shipping services).
                </p>

                <h2 className='text-xl tracking-widest m-2'>
                    4. Cookies and Third-Party Services
                </h2>
                <p className='mb-8'>
                    When you make a payment or interact with third-party services like Stripe, 
                    these providers may collect cookies or information to process payments securely.
                        <ul className='my-2'>
                            <li>• These cookies are necessary to complete the transaction and cannot be disabled without preventing payment.</li>
                            <li>• We do not control these third-party cookies, and we recommend reviewing the privacy policies of these services for more details.</li>
                        </ul>
                </p>

                <h2 className='text-xl tracking-widest m-2'>5. Data Security</h2>
                <p className='mb-8'>
                    We take reasonable measures to protect your data, 
                    including using secure transmission (HTTPS) and working with trusted service providers for payment and shipping.
                </p>

                <h2 className='text-xl tracking-widest m-2'>6. Your Rights</h2>
                <p className='mb-8'>
                    You may request access to your personal data, corrections, or deletion by contacting us at: <b>contact@scapebymd.no</b>
                </p>

                <h2 className='text-xl tracking-widest m-2'>
                    7. Changes to This Policy
                </h2>
                <p className='mb-8'>
                    We may update this policy occasionally. 
                    Any changes will be posted on this page with the date of the latest revision.
                </p>

                <h2 className='text-xl tracking-widest m-2'>8. Contact</h2>
                <p className='mb-8'>
                    If you have questions about this Privacy Policy, please contact us at: <b>contact@scapebymd.no</b>
                </p>
                
                <p>02.09.2025</p>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
