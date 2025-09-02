import BackButton from '@/components/BackButton';

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
        </div>
    );
}

export default TermsOfService;
