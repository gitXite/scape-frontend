import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

function PrivacyPolicy() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100 items-center'>
            <BackButton />
            <div className='flex flex-col items-center space-y-5 min-h-full p-10 w-200 text-center text-neutral-900'>
                <h1 className='text-2xl tracking-widest font-normal mb-2'>
                    PRIVACY POLICY
                </h1>
                <h2 className='text-neutral-400 mb-10 font-normal'>
                    Last updated September 02, 2025
                </h2>
                <h2 className='text-xl font-normal tracking-widest m-2'>1. Introduction</h2>
                <p className='mb-8'>
                    We value your privacy. This policy explains what information
                    we collect, how we use it, and your rights.
                </p>

                <h2 className='text-xl font-normal tracking-widest m-2'>
                    2. Information We Collect
                </h2>
                <p className='mb-8'>
                    We only collect information that you voluntarily provide,
                    such as:
                        <ul className='my-2'>
                            <li>• Name</li>
                            <li>• Email address</li>
                            <li>• Shipping address</li>
                            <li>• Payment information (processed securely through third-party providers like Vipps)</li>
                        </ul>
                    We do <b>not</b> collect personal data automatically or through tracking cookies, except for
                    essential cookies needed by third-party services to complete
                    transactions.
                </p>

                <h2 className='text-xl font-normal tracking-widest m-2'>
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

                <h2 className='text-xl font-normal tracking-widest m-2'>
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

                <h2 className='text-xl font-normal tracking-widest m-2'>5. Data Security</h2>
                <p className='mb-8'>
                    We take reasonable measures to protect your data, 
                    including using secure transmission (HTTPS) and working with trusted service providers for payment and shipping.
                </p>

                <h2 className='text-xl font-normal tracking-widest m-2'>6. Your Rights</h2>
                <p className='mb-8'>
                    You may request access to your personal data, corrections, or deletion by contacting us at: <b>contact@scapebymd.no</b>
                </p>

                <h2 className='text-xl font-normal tracking-widest m-2'>
                    7. Changes to This Policy
                </h2>
                <p className='mb-8'>
                    We may update this policy occasionally. 
                    Any changes will be posted on this page with the date of the latest revision.
                </p>

                <h2 className='text-xl font-normal tracking-widest m-2'>8. Contact</h2>
                <p className='mb-8'>
                    If you have questions about this Privacy Policy, please contact us at: <b>contact@scapebymd.no</b>
                </p>
                <Separator orientation='horizontal' className='border-neutral-400 max-w-100 mt-5' />
                <h2 className='flex flex-col text-2xl font-normal gap-2 mt-5'>
                    S C /\ P E
                    <p className='text-sm content-end tracking-widest'>by md</p>
                </h2>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
