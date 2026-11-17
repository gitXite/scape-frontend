import { useTranslation } from 'react-i18next';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

type LanguageSwitcherProps = {
    variant?: 'header' | 'footer' | 'default';
    size?: 'sm' | 'default';
    className?: string;
};

function LanguageSwitcher({
    variant = 'header',
    size = 'sm',
    className,
}: LanguageSwitcherProps) {
    const { i18n } = useTranslation();
    const isEn = i18n.resolvedLanguage?.startsWith('en') ?? false;

    const setLanguage = (lng: 'nb' | 'en') => {
        if (i18n.resolvedLanguage !== lng) {
            i18n.changeLanguage(lng);
        }
    };

    const handleToggle = (checked: boolean) => {
        setLanguage(checked ? 'en' : 'nb');
    };

    if (variant === 'footer') {
        return (
            <div
                role='group'
                aria-label='Language switcher'
                className={cn(
                    'inline-flex items-center gap-1.5 text-xs font-mono select-none text-footer-muted shrink-0',
                    className,
                )}
            >
                <button
                    type='button'
                    onClick={() => setLanguage('nb')}
                    className={cn(
                        'inline-flex items-center justify-center h-4 w-5 text-center leading-none font-semibold tracking-wider cursor-pointer transition-colors',
                        !isEn
                            ? 'text-footer-foreground opacity-100'
                            : 'text-footer-muted opacity-50 hover:opacity-85',
                    )}
                    aria-label='Norsk (bokmål)'
                    aria-pressed={!isEn}
                >
                    NO
                </button>

                <Switch
                    checked={isEn}
                    onCheckedChange={handleToggle}
                    size='sm'
                    aria-label='Toggle language between Norwegian and English'
                    className='cursor-pointer data-[state=unchecked]:bg-footer-muted/20 data-[state=checked]:bg-footer-foreground/80'
                    thumbClassName='bg-footer-muted dark:bg-footer-muted data-[state=checked]:bg-footer-bg dark:data-[state=checked]:bg-footer-bg'
                />

                <button
                    type='button'
                    onClick={() => setLanguage('en')}
                    className={cn(
                        'inline-flex items-center justify-center h-4 w-5 text-center leading-none font-semibold tracking-wider cursor-pointer transition-colors',
                        isEn
                            ? 'text-footer-foreground opacity-100'
                            : 'text-footer-muted opacity-50 hover:opacity-85',
                    )}
                    aria-label='English'
                    aria-pressed={isEn}
                >
                    EN
                </button>
            </div>
        );
    }

    const isHeader = variant === 'header';

    return (
        <div
            role='group'
            aria-label='Language switcher'
            className={cn(
                'inline-flex items-center gap-1.5 select-none text-xs font-mono shrink-0',
                isHeader ? 'text-primary-foreground' : 'text-foreground',
                className,
            )}
        >
            <button
                type='button'
                onClick={() => setLanguage('nb')}
                className={cn(
                    'inline-flex items-center justify-center text-center leading-none font-semibold tracking-wider cursor-pointer transition-colors',
                    !isEn
                        ? isHeader
                            ? 'text-primary-foreground opacity-100'
                            : 'text-foreground opacity-100'
                        : isHeader
                          ? 'text-primary-foreground/50 hover:text-primary-foreground/85'
                          : 'text-muted-foreground/60 hover:text-foreground',
                )}
                aria-label='Norsk (bokmål)'
                aria-pressed={!isEn}
            >
                NO
            </button>

            <Switch
                checked={isEn}
                onCheckedChange={handleToggle}
                size={size}
                aria-label='Toggle language between Norwegian and English'
                className={cn(
                    'cursor-pointer transition-colors',
                    isHeader
                        ? 'border border-border/40 data-[state=unchecked]:bg-black/35 data-[state=checked]:bg-primary-foreground'
                        : 'border border-border/40 data-[state=unchecked]:bg-muted data-[state=checked]:bg-primary',
                )}
                thumbClassName={cn(
                    isHeader
                        ? 'bg-primary-foreground dark:bg-primary-foreground data-[state=checked]:bg-primary dark:data-[state=checked]:bg-primary'
                        : 'bg-background dark:bg-background data-[state=checked]:bg-primary-foreground dark:data-[state=checked]:bg-primary-foreground',
                )}
            />

            <button
                type='button'
                onClick={() => setLanguage('en')}
                className={cn(
                    'inline-flex items-center justify-center text-center leading-none font-semibold tracking-wider cursor-pointer transition-colors',
                    isEn
                        ? isHeader
                            ? 'text-primary-foreground opacity-100'
                            : 'text-foreground opacity-100'
                        : isHeader
                          ? 'text-primary-foreground/50 hover:text-primary-foreground/85'
                          : 'text-muted-foreground/60 hover:text-foreground',
                )}
                aria-label='English'
                aria-pressed={isEn}
            >
                EN
            </button>
        </div>
    );
}

export default LanguageSwitcher;
