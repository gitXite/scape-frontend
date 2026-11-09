import BackButton from '@/components/BackButton';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

function FeedbackPage() {
    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans'>
            <BackButton page='home' />

            {/* Mobile Header / Brand Anchor */}
            <div className='pt-10 pb-4 px-6 sm:px-10 max-w-4xl mx-auto w-full flex items-center justify-between sm:hidden'>
                <h2 className='text-2xl font-display tracking-[0.2em] text-surface-foreground whitespace-nowrap'>
                    <span>SC</span>
                    <span className='tracking-normal'>/\</span>
                    <span className='pl-1.5'>PE</span>
                </h2>
                <a
                    href='/'
                    className='text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors'
                >
                    Back to Home
                </a>
            </div>

            <main className='flex-1 flex flex-col justify-center items-center w-full px-6 sm:px-10 pt-4 sm:pt-20 pb-12 sm:pb-16'>
                <Feedback />
            </main>

            <Footer />
        </div>
    );
}

export default FeedbackPage;
