import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';

function TermsOfService() {
    return (
        <div className='h-full w-full bg-neutral-100'>
            <BackButton />
            <iframe 
                title='Terms of Service'
                src='/termsofservice.html'
                width='100%'
                style={{ minHeight: '100vh' }}
            />
            <Footer />
        </div>
    );
}

export default TermsOfService;
