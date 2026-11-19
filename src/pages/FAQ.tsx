import { useState, useMemo } from 'react';
import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import {
    RotateCcw,
    Truck,
    ShieldCheck,
    Layers,
    HelpCircle,
    Lock,
    Search,
    X,
    Mail,
    ArrowRight,
    MapPin,
    Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

interface FAQSection {
    id: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
    items: FAQItem[];
}

function getFaqSections(t: TFunction): FAQSection[] {
    return [
        {
            id: 'returns',
            title: t('faq.sections.returns.title', { ns: 'pages' }),
            icon: RotateCcw,
            description: t('faq.sections.returns.description', { ns: 'pages' }),
            items: [
                {
                    question: t('faq.sections.returns.items.0.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.returns.items.0.a', { ns: 'pages' })}</p>,
                },
                {
                    question: t('faq.sections.returns.items.1.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.returns.items.1.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.returns.items.1.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.returns.items.2.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.returns.items.2.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.returns.items.2.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.returns.items.3.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.returns.items.3.a', { ns: 'pages' })}</p>,
                },
            ],
        },
        {
            id: 'shipping',
            title: t('faq.sections.shipping.title', { ns: 'pages' }),
            icon: Truck,
            description: t('faq.sections.shipping.description', { ns: 'pages' }),
            items: [
                {
                    question: t('faq.sections.shipping.items.0.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.shipping.items.0.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.shipping.items.0.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.shipping.items.1.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.shipping.items.1.a', { ns: 'pages' })}</p>,
                },
                {
                    question: t('faq.sections.shipping.items.2.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.shipping.items.2.a', { ns: 'pages' })}</p>,
                },
            ],
        },
        {
            id: 'payments',
            title: t('faq.sections.payments.title', { ns: 'pages' }),
            icon: ShieldCheck,
            description: t('faq.sections.payments.description', { ns: 'pages' }),
            items: [
                {
                    question: t('faq.sections.payments.items.0.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.payments.items.0.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.payments.items.0.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.payments.items.1.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.payments.items.1.a', { ns: 'pages' })}</p>,
                },
                {
                    question: t('faq.sections.payments.items.2.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.payments.items.2.a', { ns: 'pages' })}</p>,
                },
            ],
        },
        {
            id: 'customization',
            title: t('faq.sections.customization.title', { ns: 'pages' }),
            icon: Layers,
            description: t('faq.sections.customization.description', { ns: 'pages' }),
            items: [
                {
                    question: t('faq.sections.customization.items.0.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.customization.items.0.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.customization.items.0.p2', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.customization.items.0.p3', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.customization.items.1.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.customization.items.1.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.customization.items.1.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.customization.items.2.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.customization.items.2.a', { ns: 'pages' })}</p>,
                },
            ],
        },
        {
            id: 'support',
            title: t('faq.sections.support.title', { ns: 'pages' }),
            icon: HelpCircle,
            description: t('faq.sections.support.description', { ns: 'pages' }),
            items: [
                {
                    question: t('faq.sections.support.items.0.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.support.items.0.a', { ns: 'pages' })}</p>,
                },
                {
                    question: t('faq.sections.support.items.1.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.support.items.1.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.support.items.1.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.support.items.2.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>
                                {t('faq.sections.support.items.2.p1', { ns: 'pages' })}{' '}
                                <a
                                    href='mailto:scapebymd@gmail.com'
                                    className='font-semibold text-foreground underline underline-offset-2 hover:opacity-80'
                                >
                                    scapebymd@gmail.com
                                </a>
                            </p>
                            <p>
                                {t('faq.sections.support.items.2.p2', { ns: 'pages' })}
                            </p>
                        </div>
                    ),
                },
            ],
        },
        {
            id: 'privacy',
            title: t('faq.sections.privacy.title', { ns: 'pages' }),
            icon: Lock,
            description: t('faq.sections.privacy.description', { ns: 'pages' }),
            items: [
                {
                    question: t('faq.sections.privacy.items.0.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.privacy.items.0.a', { ns: 'pages' })}</p>,
                },
                {
                    question: t('faq.sections.privacy.items.1.q', { ns: 'pages' }),
                    answer: <p>{t('faq.sections.privacy.items.1.a', { ns: 'pages' })}</p>,
                },
                {
                    question: t('faq.sections.privacy.items.2.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.privacy.items.2.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.privacy.items.2.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
                {
                    question: t('faq.sections.privacy.items.3.q', { ns: 'pages' }),
                    answer: (
                        <div className='space-y-3'>
                            <p>{t('faq.sections.privacy.items.3.p1', { ns: 'pages' })}</p>
                            <p>{t('faq.sections.privacy.items.3.p2', { ns: 'pages' })}</p>
                        </div>
                    ),
                },
            ],
        },
    ];
}

function FAQ() {
    const { t } = useTranslation('pages');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedSection, setSelectedSection] = useState<string>('all');

    const faqSections = useMemo(() => getFaqSections(t), [t]);

    // Filter FAQ sections based on search query and category selection
    const filteredSections = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();

        return faqSections
            .map((section) => {
                if (
                    selectedCategory !== 'all' &&
                    section.id !== selectedCategory
                ) {
                    return null;
                }

                if (!query) {
                    return section;
                }

                // Filter items that match the query in question or title
                const matchingItems = section.items.filter((item) => {
                    const questionMatches = item.question
                        .toLowerCase()
                        .includes(query);
                    return questionMatches;
                });

                if (
                    matchingItems.length > 0 ||
                    section.title.toLowerCase().includes(query)
                ) {
                    return {
                        ...section,
                        items:
                            matchingItems.length > 0
                                ? matchingItems
                                : section.items,
                    };
                }

                return null;
            })
            .filter((section): section is FAQSection => section !== null);
    }, [searchQuery, selectedCategory, faqSections]);

    const totalQuestionsCount = useMemo(() => {
        return faqSections.reduce((acc, curr) => acc + curr.items.length, 0);
    }, [faqSections]);

    return (
        <div className='flex flex-col min-h-screen w-full bg-surface text-surface-foreground font-sans'>
            <BackButton page='home' />

            {/* Mobile Header / Brand Anchor */}
            <div className='pt-10 pb-4 px-6 sm:px-10 max-w-6xl mx-auto w-full flex items-center justify-between sm:hidden'>
                <a
                    href='/'
                    className='inline-block'
                    aria-label='SCAPE by md Home'
                >
                    <h2 className='text-2xl font-display tracking-[0.2em] text-surface-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                </a>
                <a
                    href='/'
                    className='text-xs font-medium text-muted-foreground hover:text-surface-foreground transition-colors'
                >
                    {t('faq.backToHome')}
                </a>
            </div>

            {/* 1. Page Header Masthead */}
            <header className='w-full pt-6 sm:pt-28'>
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left'>
                    <div className='max-w-3xl'>
                        <div className='flex items-center gap-2 mb-4'>
                            <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 gap-2 bg-background/80 backdrop-blur-sm'>
                                <MapPin className='w-3 h-3 text-muted-foreground' />
                                {t('faq.badge')}
                            </Badge>
                            <span className='text-xs font-mono text-muted-foreground'>
                                {t('faq.articlesCount', { count: totalQuestionsCount })}
                            </span>
                        </div>

                        <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-surface-foreground mb-6 leading-[1.08]'>
                            {t('faq.title')}
                        </h1>

                        <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl'>
                            {t('faq.lead')}
                        </p>
                    </div>

                    {/* Interactive Search Bar */}
                    <div className='mt-8 sm:mt-10 max-w-2xl relative'>
                        <div className='relative flex items-center'>
                            <Search className='absolute left-4 w-4 h-4 text-muted-foreground pointer-events-none' />
                            <input
                                type='text'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={t('faq.search.placeholder')}
                                className='w-full h-12 sm:h-13 pl-11 pr-10 rounded-xl bg-background border border-border/80 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className='absolute right-3.5 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
                                    aria-label={t('faq.search.clear')}
                                >
                                    <X className='w-4 h-4' />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Quick Category Filter Pills */}
                    <div className='mt-6 flex flex-wrap items-center gap-2 pt-2'>
                        <button
                            onClick={() => {
                                setSelectedCategory('all');
                                setSelectedSection('all');
                            }}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                selectedCategory === 'all'
                                    ? 'bg-foreground text-background shadow-xs'
                                    : 'bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground border border-border/70'
                            }`}
                        >
                            {t('faq.search.all', { count: totalQuestionsCount })}
                        </button>

                        {faqSections.map((sec) => (
                            <button
                                key={sec.id}
                                onClick={() => setSelectedCategory(sec.id)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                    selectedCategory === sec.id
                                        ? 'bg-foreground text-background shadow-xs'
                                        : 'bg-background/80 hover:bg-background text-muted-foreground hover:text-foreground border border-border/70'
                                }`}
                            >
                                {sec.title}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* 2. Main Content: 2-Column Architectural Layout */}
            <main className='w-full max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left'>
                    {/* Left Sticky Sidebar: Navigation & Atelier Contact Card */}
                    <aside className='lg:col-span-4 lg:sticky lg:top-8 space-y-6'>
                        {/* Categories Quick Jump Menu */}
                        {selectedCategory === 'all' && (
                            <div className='hidden lg:flex flex-col p-6 rounded-2xl bg-background border border-border/80 shadow-xs'>
                                <p className='text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4'>
                                    {t('faq.sidebar.sections')}
                                </p>
                                <nav
                                    className='flex flex-col space-y-1'
                                    aria-label='FAQ categories'
                                >
                                    {faqSections.map((sec) => {
                                        const Icon = sec.icon;
                                        const isActive =
                                            selectedSection === sec.id;
                                        return (
                                            <button
                                                key={sec.id}
                                                onClick={() => {
                                                    setSelectedSection(sec.id);
                                                    const el =
                                                        document.getElementById(
                                                            sec.id,
                                                        );
                                                    if (el) {
                                                        el.scrollIntoView({
                                                            behavior: 'smooth',
                                                        });
                                                    }
                                                }}
                                                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                                                    isActive
                                                        ? 'bg-primary/10 text-surface-foreground font-semibold'
                                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                                                }`}
                                            >
                                                <span className='flex items-center gap-2.5'>
                                                    <Icon className='w-4 h-4 shrink-0' />
                                                    <span>{sec.title}</span>
                                                </span>
                                                <span className='text-[11px] font-mono opacity-70'>
                                                    {sec.items.length}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>
                        )}

                        {/* Direct Atelier Support Card */}
                        <div className='p-6 rounded-2xl bg-background border border-border/80 shadow-xs space-y-4'>
                            <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center'>
                                <Mail className='w-5 h-5' />
                            </div>

                            <div>
                                <h3 className='font-display text-lg font-bold text-surface-foreground tracking-tight'>
                                    {t('faq.sidebar.cantFindTitle')}
                                </h3>
                                <p className='text-xs text-muted-foreground leading-relaxed mt-1.5'>
                                    {t('faq.sidebar.cantFindLead')}
                                </p>
                            </div>

                            <div className='pt-2 space-y-2.5'>
                                <a
                                    href='mailto:scapebymd@gmail.com'
                                    className='w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors'
                                >
                                    <Mail className='w-3.5 h-3.5' />
                                    {t('faq.sidebar.contactEmail')}
                                </a>

                                <a
                                    href='/contact-us'
                                    className='w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-border bg-background text-foreground text-xs font-medium hover:bg-muted/50 transition-colors'
                                >
                                    <span>{t('faq.sidebar.contactForm')}</span>
                                    <ArrowRight className='w-3 h-3' />
                                </a>
                            </div>

                            <div className='pt-3 border-t border-border/60 flex items-center gap-2 text-[11px] text-muted-foreground'>
                                <Sparkles className='w-3.5 h-3.5 text-surface-foreground' />
                                <span>{t('faq.sidebar.responseEstimate')}</span>
                            </div>
                        </div>
                    </aside>

                    {/* Right Main Content: Grouped Accordions */}
                    <div className='lg:col-span-8 space-y-8'>
                        {filteredSections.length === 0 ? (
                            <div className='p-10 sm:p-14 rounded-2xl bg-background border border-border/80 text-center space-y-4 shadow-xs'>
                                <div className='size-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground'>
                                    <Search className='w-5 h-5' />
                                </div>
                                <h3 className='font-display text-xl font-bold text-surface-foreground'>
                                    {t('faq.empty.title')}
                                </h3>
                                <p className='text-sm text-muted-foreground max-w-sm mx-auto'>
                                    {t('faq.empty.lead', { query: searchQuery })}
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('all');
                                    }}
                                    className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors cursor-pointer'
                                >
                                    {t('faq.empty.clearFilters')}
                                </button>
                            </div>
                        ) : (
                            filteredSections.map((section) => {
                                const Icon = section.icon;
                                return (
                                    <section
                                        key={section.id}
                                        id={section.id}
                                        className='p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs transition-shadow hover:shadow-sm'
                                    >
                                        {/* Section Header */}
                                        <div className='flex items-start justify-between gap-4 pb-6 border-b border-border/60'>
                                            <div className='flex items-start gap-3.5'>
                                                <div className='size-10 rounded-xl bg-primary/10 flex items-center justify-center text-surface-foreground shrink-0 mt-0.5'>
                                                    <Icon className='w-5 h-5' />
                                                </div>
                                                <div>
                                                    <h2 className='font-display text-xl sm:text-2xl font-bold text-surface-foreground tracking-tight'>
                                                        {section.title}
                                                    </h2>
                                                    <p className='text-xs sm:text-sm text-muted-foreground mt-1'>
                                                        {section.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <span className='hidden sm:inline-flex px-2.5 py-1 rounded-md bg-muted text-[11px] font-mono text-muted-foreground shrink-0'>
                                                {t('faq.qasCount', { count: section.items.length })}
                                            </span>
                                        </div>

                                        {/* Radix Accordion Items */}
                                        <Accordion
                                            type='single'
                                            collapsible
                                            className='w-full divide-y divide-border/60'
                                        >
                                            {section.items.map((item, idx) => (
                                                <AccordionItem
                                                    key={idx}
                                                    value={`item-${section.id}-${idx}`}
                                                    className='border-none py-1'
                                                >
                                                    <AccordionTrigger className='py-4 text-left text-sm sm:text-base font-medium text-surface-foreground hover:no-underline hover:text-foreground/80 transition-colors cursor-pointer'>
                                                        {item.question}
                                                    </AccordionTrigger>
                                                    <AccordionContent className='text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1 pb-4'>
                                                        {item.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </section>
                                );
                            })
                        )}
                    </div>
                </div>
            </main>

            {/* 3. Bottom Next Steps / Visualization CTA */}
            <section className='w-full border-t border-border/60 py-16 sm:py-20 bg-background/50'>
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left flex flex-col md:flex-row md:items-center md:justify-between gap-8'>
                    <div className='max-w-xl'>
                        <p className='text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3'>
                            {t('faq.cta.badge')}
                        </p>
                        <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-surface-foreground mb-3 leading-tight'>
                            {t('faq.cta.title')}
                        </h2>
                        <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            {t('faq.cta.lead')}
                        </p>
                    </div>

                    <div className='flex flex-wrap items-center gap-3.5 shrink-0'>
                        <a
                            href='/get-started'
                            className='inline-flex group items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground border border-border shadow-xs cursor-pointer'
                        >
                            <span>{t('faq.cta.customizeYours')}</span>
                            <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
                        </a>
                        <a
                            href='/contact-us'
                            className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                        >
                            <span>{t('faq.cta.contactUs')}</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default FAQ;
