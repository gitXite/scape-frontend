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

const faqSections: FAQSection[] = [
    {
        id: 'returns',
        title: 'Returns & Refunds',
        icon: RotateCcw,
        description:
            'Policies on custom-made topographic pieces, damaged arrivals, and cancellations.',
        items: [
            {
                question: 'Do I have a right to return my order?',
                answer: (
                    <p>
                        No. Since all our products are custom-made and created
                        based on your specific terrain coordinates and framing
                        choices, returns are not possible unless the item is
                        faulty or damaged.
                    </p>
                ),
            },
            {
                question: 'What if my order arrives damaged or with a mistake?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            If your order arrives damaged, defective, or not as
                            described, please reach out to us within reasonable
                            time.
                        </p>
                        <p>
                            We may ask for photos so we can assess the issue and
                            arrange a replacement or solution promptly.
                        </p>
                    </div>
                ),
            },
            {
                question: 'Can I cancel my order after placing it?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            We begin work on your custom order shortly after it
                            is placed. Once production has started,
                            cancellations are not possible.
                        </p>
                        <p>
                            If you contact us immediately after ordering, we may
                            be able to halt production before slicing and
                            printing begins - please reach out as soon as
                            possible.
                        </p>
                    </div>
                ),
            },
            {
                question: 'Do these rules apply if I order as a business?',
                answer: (
                    <p>
                        Yes. Orders placed by businesses are not covered by
                        consumer return rights and follow the same no-return
                        policy for custom-made physical products.
                    </p>
                ),
            },
        ],
    },
    {
        id: 'shipping',
        title: 'Shipping & Delivery',
        icon: Truck,
        description:
            'Delivery timelines, tracking via Posten Norge, and domestic coverage.',
        items: [
            {
                question: 'How long does it take to receive my order?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            Since each item is custom-made, production times
                            vary. On average, production takes 1-3 days
                            depending on workshop volume, plus shipping time
                            depending on your location.
                        </p>
                        <p>
                            That being said, we always aim to deliver within 7
                            business days from order placement.
                        </p>
                    </div>
                ),
            },
            {
                question: 'Do you ship internationally?',
                answer: (
                    <p>
                        No, as of right now we only ship within Norway through
                        Posten. We plan to expand to international shipping in
                        the future.
                    </p>
                ),
            },
            {
                question: 'How can I track my order?',
                answer: (
                    <p>
                        Once your order has shipped from our studio in Bergen,
                        you will receive a confirmation email with real-time
                        Posten tracking details.
                    </p>
                ),
            },
        ],
    },
    {
        id: 'payments',
        title: 'Payments & Security',
        icon: ShieldCheck,
        description:
            'Vipps integration, supported cards, and encrypted transactions.',
        items: [
            {
                question: 'Which payment methods do you accept?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            We use Vipps as our main payment provider to make
                            checkout as fast and friction-free as possible.
                        </p>
                        <p>
                            You can choose to either pay directly through the
                            Vipps mobile app or with standard credit/debit cards
                            (Visa and Mastercard).
                        </p>
                    </div>
                ),
            },
            {
                question: 'Is payment secure?',
                answer: (
                    <p>
                        Yes. All transactions are securely handled through
                        trusted third-party payment infrastructure with
                        bank-grade TLS encryption. Your payment details are
                        never stored on our servers.
                    </p>
                ),
            },
        ],
    },
    {
        id: 'product',
        title: 'Product & Customization',
        icon: Layers,
        description:
            'Geospatial coordinates, solid frames, 3D relief scaling, and custom projects.',
        items: [
            {
                question: 'What kind of customization can I request?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            You can choose any location across Norway as your
                            Scape.
                        </p>
                        <p>
                            Once you have selected your coordinates, you can
                            personalize the presentation by selecting from our
                            range of solid frames (Oak, Walnut, Black, White)
                            and passe-partouts to match your interior.
                        </p>
                        <p>
                            If you have a specific request or bespoke dimension
                            in mind, feel free to contact us before placing your
                            order.
                        </p>
                    </div>
                ),
            },
            {
                question: 'Can I see a preview before production?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            Yes, our interactive 3D map engine provides a
                            real-time digital render of your topography as you
                            navigate coordinates and adjust vertical elevation
                            scaling.
                        </p>
                        <p>
                            We also visualize the complete framed artwork prior
                            to checkout to ensure you are 100% happy with your
                            custom composition.
                        </p>
                    </div>
                ),
            },
            {
                question: 'What if I want something completely unique?',
                answer: (
                    <p>
                        We are always thrilled to discuss special architectural
                        commissions! Contact us with your idea, and we will let
                        you know what is possible and prepare a tailored quote.
                    </p>
                ),
            },
        ],
    },
    {
        id: 'support',
        title: 'Problems & Support',
        icon: HelpCircle,
        description:
            'Assistance with pending orders, photo assessments, and studio contact.',
        items: [
            {
                question: 'My order arrived damaged - what do I do?',
                answer: (
                    <p>
                        Please reach out to us within reasonable time with clear
                        photos of the packaging and damage. We will immediately
                        assess the case and arrange a priority replacement.
                    </p>
                ),
            },
            {
                question: 'I made a mistake in my order - can it be fixed?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            If you realize there is an error in your coordinates
                            or chosen frame, contact us immediately.
                        </p>
                        <p>
                            If production has not yet started, we can easily
                            adjust your order specifications. Once 3D printing
                            is underway, modifications are no longer possible.
                        </p>
                    </div>
                ),
            },
            {
                question: 'How can I contact you?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            You can email us directly at{' '}
                            <a
                                href='mailto:scapebymd@gmail.com'
                                className='font-semibold text-foreground underline underline-offset-2 hover:opacity-80'
                            >
                                scapebymd@gmail.com
                            </a>
                        </p>
                        <p>
                            Alternatively, visit our{' '}
                            <a
                                href='/contact-us'
                                className='font-semibold text-foreground underline underline-offset-2 hover:opacity-80'
                            >
                                Contact Us
                            </a>{' '}
                            page to submit an inquiry through our form.
                        </p>
                    </div>
                ),
            },
        ],
    },
    {
        id: 'privacy',
        title: 'Cookies & Privacy',
        icon: Lock,
        description:
            'Data security, essential cookie policies, and transparency.',
        items: [
            {
                question: 'Do you use cookies on this website?',
                answer: (
                    <p>
                        Yes, but only strictly essential cookies required by our
                        payment provider and core site functionality.
                    </p>
                ),
            },
            {
                question: 'Do you use cookies for advertising or tracking?',
                answer: (
                    <p>
                        No. We do not use cookies for cross-site tracking,
                        third-party advertising, or behavioral data profiling.
                    </p>
                ),
            },
            {
                question: 'Can I disable cookies?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            Because we only use essential cookies, disabling
                            them in your browser may cause checkout and payment
                            sessions to fail.
                        </p>
                        <p>
                            For this reason, we recommend keeping cookies
                            enabled while using the site.
                        </p>
                    </div>
                ),
            },
            {
                question: 'Do you collect personal data?',
                answer: (
                    <div className='space-y-3'>
                        <p>
                            We only collect personal information you explicitly
                            provide during checkout or form submissions—such as
                            your name, email address, and shipping address.
                        </p>
                        <p>
                            This data is solely used to produce and deliver your
                            physical artwork and to communicate order updates.
                            We will never sell your information to third
                            parties.
                        </p>
                    </div>
                ),
            },
        ],
    },
];

function FAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedSection, setSelectedSection] = useState<string>('all');

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
                    // Extract text string from ReactNode answer if possible
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
    }, [searchQuery, selectedCategory]);

    const totalQuestionsCount = useMemo(() => {
        return faqSections.reduce((acc, curr) => acc + curr.items.length, 0);
    }, []);

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
                    Back to Home
                </a>
            </div>

            {/* 1. Page Header Masthead */}
            <header className='w-full pt-6 sm:pt-28'>
                <div className='max-w-6xl mx-auto px-6 sm:px-10 text-left'>
                    <div className='max-w-3xl'>
                        <div className='flex items-center gap-2 mb-4'>
                            <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 gap-2 bg-background/80 backdrop-blur-sm'>
                                <MapPin className='w-3 h-3 text-muted-foreground' />
                                FAQ
                            </Badge>
                            <span className='text-xs font-mono text-muted-foreground'>
                                {totalQuestionsCount} articles
                            </span>
                        </div>

                        <h1 className='font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-surface-foreground mb-6 leading-[1.08]'>
                            Frequently Asked Questions.
                        </h1>

                        <p className='font-sans text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl'>
                            Everything you need to know about our cartographic
                            relief process, solid framing, shipping via Posten,
                            and custom orders.
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
                                placeholder='Search questions, delivery, framing, payments...'
                                className='w-full h-12 sm:h-13 pl-11 pr-10 rounded-xl bg-background border border-border/80 text-sm sm:text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className='absolute right-3.5 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
                                    aria-label='Clear search'
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
                            All Questions ({totalQuestionsCount})
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
                                    Sections
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
                                    Can’t find your answer?
                                </h3>
                                <p className='text-xs text-muted-foreground leading-relaxed mt-1.5'>
                                    Maren and Daniel are available to help with
                                    custom coordinates, corporate orders, or
                                    framing advice.
                                </p>
                            </div>

                            <div className='pt-2 space-y-2.5'>
                                <a
                                    href='mailto:scapebymd@gmail.com'
                                    className='w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors'
                                >
                                    <Mail className='w-3.5 h-3.5' />
                                    scapebymd@gmail.com
                                </a>

                                <a
                                    href='/contact-us'
                                    className='w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-border bg-background text-foreground text-xs font-medium hover:bg-muted/50 transition-colors'
                                >
                                    <span>Contact form</span>
                                    <ArrowRight className='w-3 h-3' />
                                </a>
                            </div>

                            <div className='pt-3 border-t border-border/60 flex items-center gap-2 text-[11px] text-muted-foreground'>
                                <Sparkles className='w-3.5 h-3.5 text-surface-foreground' />
                                <span>Typical response within 24 hours</span>
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
                                    No matching questions found
                                </h3>
                                <p className='text-sm text-muted-foreground max-w-sm mx-auto'>
                                    We couldn’t find any answers matching "
                                    {searchQuery}". Try a different keyword or
                                    contact our atelier directly.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('all');
                                    }}
                                    className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background text-xs font-medium hover:bg-foreground/90 transition-colors cursor-pointer'
                                >
                                    Clear search filters
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
                                                <div className='size-10 rounded-xl bg-primary/10 text-surface-foreground flex items-center justify-center shrink-0 mt-0.5'>
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
                                                {section.items.length} Q&As
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
                            READY TO BEGIN?
                        </p>
                        <h2 className='font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-surface-foreground mb-3 leading-tight'>
                            Visualize your favorite landscape.
                        </h2>
                        <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            Choose your coordinates in Norway, inspect the 3D
                            model in real time, and customize your solid wood
                            frame.
                        </p>
                    </div>

                    <div className='flex flex-wrap items-center gap-3.5 shrink-0'>
                        <a
                            href='/get-started'
                            className='inline-flex group items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground shadow-sm cursor-pointer'
                        >
                            <span>Customize Yours</span>
                            <ArrowRight className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1' />
                        </a>
                        <a
                            href='/contact-us'
                            className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border bg-background text-surface-foreground text-xs sm:text-sm font-medium hover:bg-muted transition-colors cursor-pointer'
                        >
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default FAQ;
