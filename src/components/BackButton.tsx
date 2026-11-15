import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type BackButtonProps = {
    page: 'home' | 'back';
};

function BackButton({ page }: BackButtonProps) {
    const navigate = useNavigate();
    const { t } = useTranslation('common');

    const label = page === 'home' ? t('actions.backToHome') : t('actions.back');

    return (
        <button
            className='fixed group max-sm:hidden top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 bg-background backdrop-blur-sm border border-border rounded-full hover:bg-muted transition-colors duration-200 cursor-pointer'
            onClick={() => {
                if (page === 'home') navigate('/');
                if (page === 'back') navigate(-1);
            }}
        >
            <ArrowLeft
                size={16}
                className='group-hover:-translate-x-1 transition-transform duration-200 text-neutral-600 group-hover:text-neutral-800 ease-out'
            />
            {label}
        </button>
    );
}

export default BackButton;
