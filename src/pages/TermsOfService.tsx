import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
    FileText,
    Building,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    ShieldAlert,
} from 'lucide-react';

const TOC_SECTIONS = [
    { id: 'our-services', num: '01', title: 'Our Services' },
    {
        id: 'intellectual-property-rights',
        num: '02',
        title: 'Intellectual Property Rights',
    },
    { id: 'user-representations', num: '03', title: 'User Representations' },
    { id: 'products', num: '04', title: 'Products & Visuals' },
    { id: 'purchases-and-payment', num: '05', title: 'Purchases & Payment' },
    { id: 'return-policy', num: '06', title: 'Return Policy' },
    { id: 'warranty', num: '07', title: 'Warranty' },
    { id: 'delivery', num: '08', title: 'Delivery & Title' },
    { id: 'prohibited-activities', num: '09', title: 'Prohibited Activities' },
    {
        id: 'user-generated-contributions',
        num: '10',
        title: 'User Generated Contributions',
    },
    { id: 'contribution-licence', num: '11', title: 'Contribution Licence' },
    {
        id: 'guidelines-for-reviews',
        num: '12',
        title: 'Guidelines for Reviews',
    },
    {
        id: 'third-party-websites-and-content',
        num: '13',
        title: 'Third-Party Websites',
    },
    { id: 'services-management', num: '14', title: 'Services Management' },
    { id: 'privacy-policy', num: '15', title: 'Privacy Policy' },
    { id: 'term-and-termination', num: '16', title: 'Term & Termination' },
    {
        id: 'modifications-and-interruptions',
        num: '17',
        title: 'Modifications & Interruptions',
    },
    { id: 'governing-law', num: '18', title: 'Governing Law' },
    { id: 'dispute-resolution', num: '19', title: 'Dispute Resolution' },
    { id: 'corrections', num: '20', title: 'Corrections' },
    { id: 'disclaimer', num: '21', title: 'Disclaimer' },
    {
        id: 'limitations-of-liability',
        num: '22',
        title: 'Limitations of Liability',
    },
    { id: 'indemnification', num: '23', title: 'Indemnification' },
    { id: 'user-data', num: '24', title: 'User Data' },
    {
        id: 'electronic-communications-transactions-and-signatures',
        num: '25',
        title: 'Electronic Signatures',
    },
    { id: 'miscellaneous', num: '26', title: 'Miscellaneous' },
    { id: 'contact-us', num: '27', title: 'Contact Us' },
];

function TermsOfService() {
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

            {/* Main Content Area */}
            <main className='flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full px-6 sm:px-10 pt-6 sm:pt-28 pb-12 sm:pb-16 text-left'>
                {/* Header Masthead */}
                <div className='mb-10 sm:mb-14'>
                    <div className='flex flex-wrap items-center gap-3 mb-4'>
                        <Badge className='inline-flex text-xs font-medium text-surface-foreground border border-border px-3 py-1 gap-2 bg-background/80 backdrop-blur-sm'>
                            <FileText className='w-3 h-3 text-muted-foreground' />
                            Legal Terms & Customer Agreement
                        </Badge>
                        <span className='text-xs font-mono text-muted-foreground'>
                            Last updated: November 06, 2026
                        </span>
                    </div>

                    <h1 className='font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-surface-foreground mb-4 leading-tight'>
                        Terms of Service.
                    </h1>

                    <p className='font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl'>
                        These Legal Terms constitute a legally binding agreement
                        made between you, whether personally or on behalf of an
                        entity, and Maren Stenersen (SCAPE by md), concerning
                        your access to and use of our bespoke cartographic
                        products, website, and services.
                    </p>
                </div>

                {/* Atelier Entity & Overview Card */}
                <div className='p-6 sm:p-8 rounded-2xl bg-background border border-border/80 shadow-xs mb-10 space-y-6'>
                    <div>
                        <span className='text-xs uppercase font-mono tracking-wider font-semibold text-primary'>
                            Agreement to Our Legal Terms
                        </span>
                        <h2 className='font-display text-xl sm:text-2xl font-bold tracking-tight text-surface-foreground mt-1'>
                            Operating Entity & Registered Business
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground'>
                        <div className='space-y-2 p-4 rounded-xl border border-border/70 bg-surface/30'>
                            <div className='flex items-center gap-2 text-surface-foreground font-semibold'>
                                <Building className='w-4 h-4 text-muted-foreground' />
                                <span>Business Registration</span>
                            </div>
                            <p>
                                Maren Stenersen, doing business as <br/>
                                <b>SCAPE by md</b>
                            </p>
                            <p className='font-mono text-xs'>
                                Org nr: 929 981 626 (Norway)
                            </p>
                            <p className='font-mono text-xs text-primary'>
                                https://www.scapebymd.no
                            </p>
                        </div>

                        <div className='space-y-2 p-4 rounded-xl border border-border/70 bg-surface/30'>
                            <div className='flex items-center gap-2 text-surface-foreground font-semibold'>
                                <MapPin className='w-4 h-4 text-muted-foreground' />
                                <span>Contact</span>
                            </div>
                            <p>Schweigårds vei 30A, 5063 Bergen, Norway</p>
                            <p className='font-mono text-xs'>
                                Phone: +47 938 74 223
                            </p>
                            <p className='font-mono text-xs'>
                                Email: scapebymd@gmail.com
                            </p>
                        </div>
                    </div>

                    <div className='space-y-3 pt-2 text-sm text-muted-foreground leading-relaxed border-t border-border/60'>
                        <p>
                            We operate the website{' '}
                            <a
                                href='https://www.scapebymd.no'
                                target='_blank'
                                rel='noreferrer'
                                className='font-medium text-foreground underline underline-offset-4'
                            >
                                https://www.scapebymd.no
                            </a>{' '}
                            (the "Site"), as well as any other related products
                            and services that refer or link to these legal terms
                            (collectively, the "Services").
                        </p>
                        <p>
                            You agree that by accessing the Services, you have
                            read, understood, and agreed to be bound by all of
                            these Legal Terms. We will provide you with prior
                            notice of any scheduled changes to the Services you
                            are using. The modified Legal Terms will become
                            effective upon posting or notifying you via
                            scapebymd@gmail.com.
                        </p>
                        <p>
                            The Services are intended for users who are at least
                            13 years of age. All users who are minors in the
                            jurisdiction in which they reside (generally under
                            the age of 18) must have the permission of, and be
                            directly supervised by, their parent or guardian to
                            use the Services.
                        </p>
                    </div>

                    {/* Disagree Callout Alert */}
                    <div className='p-4 rounded-xl bg-destructive/5 border border-destructive/20 flex items-start gap-3 text-xs sm:text-sm text-foreground/90'>
                        <ShieldAlert className='w-5 h-5 text-destructive shrink-0 mt-0.5' />
                        <div>
                            <p className='font-bold uppercase tracking-wider text-destructive mb-1 text-xs'>
                                Important Notice
                            </p>
                            <p className='text-muted-foreground leading-relaxed'>
                                IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL
                                TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM
                                USING THE SERVICES AND YOU MUST DISCONTINUE USE
                                IMMEDIATELY. We recommend printing or retaining
                                a digital copy of these terms for your records.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table of Contents / Interactive Quick Index */}
                <div className='p-6 sm:p-8 rounded-2xl bg-surface/50 border border-border/70 mb-10'>
                    <div className='flex items-center justify-between mb-5 pb-3 border-b border-border/60'>
                        <div className='flex items-center gap-2'>
                            <FileText className='w-4 h-4 text-muted-foreground' />
                            <h2 className='font-display text-sm sm:text-base font-bold tracking-tight text-foreground uppercase'>
                                Table of Contents
                            </h2>
                        </div>
                        <span className='font-mono text-xs text-muted-foreground'>
                            27 Articles
                        </span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
                        {TOC_SECTIONS.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className='group flex items-center justify-between p-2.5 rounded-md border border-transparent hover:border-border/60 hover:bg-background/80 transition-all text-xs'
                            >
                                <span className='font-mono text-muted-foreground group-hover:text-foreground font-semibold'>
                                    {section.num}
                                </span>
                                <span className='font-medium text-muted-foreground group-hover:text-foreground text-right truncate ml-2 transition-colors'>
                                    {section.title}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Terms Sections Card Container */}
                <div className='p-6 sm:p-10 rounded-2xl bg-background border border-border/80 shadow-xs space-y-10 mb-12 sm:mb-16'>
                    {/* 01. OUR SERVICES */}
                    <section
                        id='our-services'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                01
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Our Services
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            The information provided when using the Services is
                            not intended for distribution to or use by any
                            person or entity in any jurisdiction or country
                            where such distribution or use would be contrary to
                            law or regulation or which would subject us to any
                            registration requirement within such jurisdiction or
                            country. Accordingly, those persons who choose to
                            access the Services from other locations do so on
                            their own initiative and are solely responsible for
                            compliance with local laws, if and to the extent
                            local laws are applicable.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 02. INTELLECTUAL PROPERTY RIGHTS */}
                    <section
                        id='intellectual-property-rights'
                        className='scroll-mt-28 space-y-4'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                02
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Intellectual Property Rights
                            </h2>
                        </div>

                        <div className='pl-7 sm:pl-8 space-y-4'>
                            <div>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Our Intellectual Property
                                </h3>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                    We are the owner or the licensee of all
                                    intellectual property rights in our
                                    Services, including all source code,
                                    databases, functionality, software, website
                                    designs, audio, video, text, photographs,
                                    and graphics in the Services (collectively,
                                    the 'Content'), as well as the trademarks,
                                    service marks, and logos contained therein
                                    (the 'Marks').
                                </p>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mt-2'>
                                    Our Content and Marks are protected by
                                    copyright and trademark laws (and various
                                    other intellectual property rights and
                                    unfair competition laws) and treaties around
                                    the world. The Content and Marks are
                                    provided in or through the Services 'AS IS'
                                    for your personal, non-commercial use only.
                                </p>
                            </div>

                            <div className='pt-2'>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Your Use of Our Services
                                </h3>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mb-2'>
                                    Subject to your compliance with these Legal
                                    Terms, including the{' '}
                                    <i>'PROHIBITED ACTIVITIES'</i> section
                                    below, we grant you a non-exclusive,
                                    non-transferable, revocable licence to:
                                </p>
                                <ul className='space-y-1.5 text-sm sm:text-base text-muted-foreground pl-4'>
                                    <li className='flex items-start gap-2'>
                                        <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                        <span>Access the Services; and</span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                        <span>
                                            Download or print a copy of any
                                            portion of the Content to which you
                                            have properly gained access, solely
                                            for your personal, non-commercial
                                            use.
                                        </span>
                                    </li>
                                </ul>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mt-3'>
                                    Except as set out in this section or
                                    elsewhere in our Legal Terms, no part of the
                                    Services and no Content or Marks may be
                                    copied, reproduced, aggregated, republished,
                                    uploaded, posted, publicly displayed,
                                    encoded, translated, transmitted,
                                    distributed, sold, licensed, or otherwise
                                    exploited for any commercial purpose
                                    whatsoever, without our express prior
                                    written permission.
                                </p>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mt-2'>
                                    If you wish to make any use of the Services,
                                    Content, or Marks other than as set out in
                                    this section or elsewhere in our Legal
                                    Terms, please address your request to:{' '}
                                    <b className='text-foreground'>
                                        contact@scapebymd.no
                                    </b>
                                    . If we ever grant you permission, you must
                                    identify us as the owners or licensors and
                                    ensure all copyright or proprietary notices
                                    remain visible. We reserve all rights not
                                    expressly granted to you in and to the
                                    Services, Content, and Marks. Any breach of
                                    these Intellectual Property Rights will
                                    constitute a material breach of our Legal
                                    Terms and your right to use our Services
                                    will terminate immediately.
                                </p>
                            </div>

                            <div className='pt-2'>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Your Submissions
                                </h3>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mb-2'>
                                    Please review this section and the{' '}
                                    <i>'PROHIBITED ACTIVITIES'</i> section
                                    carefully prior to using our Services to
                                    understand the (a) rights you give us and
                                    (b) obligations you have when you post or
                                    upload any content through the Services.
                                </p>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mb-2'>
                                    <b>Submissions:</b> By directly sending us
                                    any question, comment, suggestion, idea,
                                    feedback, or other information about the
                                    Services ('Submissions'), you agree to
                                    assign to us all intellectual property
                                    rights in such Submission. You agree that we
                                    shall own this Submission and be entitled to
                                    its unrestricted use and dissemination for
                                    any lawful purpose, commercial or otherwise,
                                    without acknowledgment or compensation to
                                    you.
                                </p>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mb-2'>
                                    <b>
                                        You are responsible for what you post or
                                        upload:
                                    </b>{' '}
                                    By sending us Submissions through any part
                                    of the Services you:
                                </p>
                                <ul className='space-y-1.5 text-sm sm:text-base text-muted-foreground pl-4'>
                                    <li className='flex items-start gap-2'>
                                        <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                        <span>
                                            Confirm that you have read and agree
                                            with our{' '}
                                            <i>'PROHIBITED ACTIVITIES'</i> and
                                            will not post, send, publish,
                                            upload, or transmit through the
                                            Services any Submission that is
                                            illegal, harassing, hateful,
                                            harmful, defamatory, obscene,
                                            bullying, abusive, discriminatory,
                                            threatening to any person or group,
                                            sexually explicit, false,
                                            inaccurate, deceitful, or
                                            misleading;
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                        <span>
                                            To the extent permissible by
                                            applicable law, waive any and all
                                            moral rights to any such Submission;
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                        <span>
                                            Warrant that any such Submission are
                                            original to you or that you have the
                                            necessary rights and licences to
                                            submit such Submissions and that you
                                            have full authority to grant us the
                                            above-mentioned rights in relation
                                            to your Submissions; and
                                        </span>
                                    </li>
                                    <li className='flex items-start gap-2'>
                                        <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                        <span>
                                            Warrant and represent that your
                                            Submissions do not constitute
                                            confidential information.
                                        </span>
                                    </li>
                                </ul>
                                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed mt-3'>
                                    You are solely responsible for your
                                    Submissions and you expressly agree to
                                    reimburse us for any and all losses that we
                                    may suffer because of your breach of (a)
                                    this section, (b) any third party’s
                                    intellectual property rights, or (c)
                                    applicable law.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 03. USER REPRESENTATIONS */}
                    <section
                        id='user-representations'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                03
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                User Representations
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                By using the Services, you represent and warrant
                                that: (1) you have the legal capacity and you
                                agree to comply with these Legal Terms; (2) you
                                are not under the age of 13; (3) you are not a
                                minor in the jurisdiction in which you reside,
                                or if a minor, you have received parental
                                permission to use the Services; (4) you will not
                                access the Services through automated or
                                non-human means, whether through a bot, script
                                or otherwise; (5) you will not use the Services
                                for any illegal or unauthorised purpose; and (6)
                                your use of the Services will not violate any
                                applicable law or regulation.
                            </p>
                            <p>
                                If you provide any information that is untrue,
                                inaccurate, not current, or incomplete, we have
                                the right to suspend or terminate your account
                                and refuse any and all current or future use of
                                the Services (or any portion thereof).
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 04. PRODUCTS */}
                    <section id='products' className='scroll-mt-28 space-y-3'>
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                04
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Products & Specifications
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            We make every effort to display as accurately as
                            possible the colours, features, specifications, and
                            details of the products available on the Services.
                            However, we do not guarantee that the colours,
                            features, specifications, and details of the
                            products will be accurate, complete, reliable,
                            current, or free of other errors, and your
                            electronic display may not accurately reflect the
                            actual colours and details of the products. All
                            products are subject to availability, and we cannot
                            guarantee that items will be in stock. We reserve
                            the right to discontinue any products at any time
                            for any reason. Prices for all products are subject
                            to change.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 05. PURCHASES AND PAYMENT */}
                    <section
                        id='purchases-and-payment'
                        className='scroll-mt-28 space-y-4'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                05
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Purchases and Payment
                            </h2>
                        </div>

                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>We accept the following forms of payment:</p>
                            <div className='flex flex-wrap gap-2 pt-1 pb-1'>
                                <span className='px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold text-foreground'>
                                    Visa
                                </span>
                                <span className='px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold text-foreground'>
                                    Mastercard
                                </span>
                                <span className='px-3 py-1 rounded-full border border-border bg-surface text-xs font-semibold text-foreground'>
                                    Vipps Checkout
                                </span>
                            </div>
                            <p>
                                You agree to provide current, complete, and
                                accurate purchase and account information for
                                all purchases made via the Services. You further
                                agree to promptly update account and payment
                                information, including email address, payment
                                method, and payment card expiration date, so
                                that we can complete your transactions and
                                contact you as needed. Sales tax will be added
                                to the price of purchases as deemed required by
                                us. We may change prices at any time. All
                                payments shall be in <b>NOK</b>.
                            </p>
                            <p>
                                You agree to pay all charges at the prices then
                                in effect for your purchases and any applicable
                                shipping fees, and you authorise us to charge
                                your chosen payment provider for any such
                                amounts upon placing your order. We reserve the
                                right to correct any errors or mistakes in
                                pricing, even if we have already requested or
                                received payment.
                            </p>
                            <p>
                                We reserve the right to refuse any order placed
                                through the Services. We may, in our sole
                                discretion, limit or cancel quantities purchased
                                per person, per household, or per order. These
                                restrictions may include orders placed by or
                                under the same customer account, the same
                                payment method, and/or orders that use the same
                                billing or shipping address. We reserve the
                                right to limit or prohibit orders that, in our
                                sole judgement, appear to be placed by dealers,
                                resellers, or distributors.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 06. RETURN POLICY */}
                    <section
                        id='return-policy'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                06
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Return Policy
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                All sales are final and no refund will be
                                issued. Because all SCAPE pieces are
                                custom-manufactured to order based on specific
                                user coordinates and selected dimensions,
                                standard cancellation and cooling-off return
                                rights do not apply. For complete details and
                                damage claims handling, please see our dedicated{' '}
                                <a
                                    href='/returns'
                                    className='font-semibold text-foreground underline underline-offset-4'
                                >
                                    Returns & Refunds Policy
                                </a>
                                .
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 07. WARRANTY */}
                    <section id='warranty' className='scroll-mt-28 space-y-3'>
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                07
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Warranty & Statutory Rights
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            Any warranty provided by the seller or manufacturer
                            grants the buyer rights in addition to those already
                            conferred by mandatory law. A warranty does not
                            limit the buyer's rights to make claims for defects,
                            delays, or non-conformity as outlined in sections 9
                            and 10 of these terms and conditions. The warranty
                            also does not affect the buyer's rights under the
                            Norwegian Consumer Purchases Act
                            (Forbrukerkjøpsloven) or any other relevant
                            legislation applicable to the purchase.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 08. DELIVERY */}
                    <section id='delivery' className='scroll-mt-28 space-y-3'>
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                08
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Delivery & Risk
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            Delivery is considered to have occurred when the
                            buyer, or their representative, has taken possession
                            of the goods. If the delivery date is not specified
                            in the order system, the seller must deliver the
                            goods to the buyer without undue delay and no later
                            than 30 days after the order is placed by the
                            customer. The goods will be delivered to the buyer
                            unless otherwise specifically agreed upon by the
                            parties.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 09. PROHIBITED ACTIVITIES */}
                    <section
                        id='prohibited-activities'
                        className='scroll-mt-28 space-y-4'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                09
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Prohibited Activities
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                You may not access or use the Services for any
                                purpose other than that for which we make the
                                Services available. The Services may not be used
                                in connection with any commercial endeavours
                                except those that are specifically endorsed or
                                approved by us.
                            </p>
                            <p>As a user of the Services, you agree not to:</p>
                            <ul className='space-y-2 text-sm text-muted-foreground pl-4'>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Systematically retrieve data or other
                                        content from the Services to create or
                                        compile, directly or indirectly, a
                                        collection, compilation, database, or
                                        directory without written permission
                                        from us.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Trick, defraud, or mislead us and other
                                        users, especially in any attempt to
                                        learn sensitive account information such
                                        as user passwords.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Circumvent, disable, or otherwise
                                        interfere with security-related features
                                        of the Services, including features that
                                        prevent or restrict the use or copying
                                        of any Content or enforce limitations on
                                        the use of the Services and/or the
                                        Content contained therein.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Disparage, tarnish, or otherwise harm,
                                        in our opinion, us and/or the Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Use any information obtained from the
                                        Services in order to harass, abuse, or
                                        harm another person.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Make improper use of our support
                                        services or submit false reports of
                                        abuse or misconduct.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Use the Services in a manner
                                        inconsistent with any applicable laws or
                                        regulations.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Engage in unauthorised framing of or
                                        linking to the Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Upload or transmit (or attempt to upload
                                        or to transmit) viruses, Trojan horses,
                                        or other material, including excessive
                                        use of capital letters and spamming
                                        (continuous posting of repetitive text),
                                        that interferes with any party’s
                                        uninterrupted use and enjoyment of the
                                        Services or modifies, impairs, disrupts,
                                        alters, or interferes with the use,
                                        features, functions, operation, or
                                        maintenance of the Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Engage in any automated use of the
                                        system, such as using scripts to send
                                        comments or messages, or using any data
                                        mining, robots, or similar data
                                        gathering and extraction tools.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Delete the copyright or other
                                        proprietary rights notice from any
                                        Content.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Attempt to impersonate another user or
                                        person or use the username of another
                                        user.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Upload or transmit (or attempt to upload
                                        or to transmit) any material that acts
                                        as a passive or active information
                                        collection or transmission mechanism,
                                        including without limitation, clear
                                        graphics interchange formats ('gifs'),
                                        1×1 pixels, web bugs, cookies, or other
                                        similar devices (sometimes referred to
                                        as 'spyware' or 'passive collection
                                        mechanisms' or 'pcms').
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Interfere with, disrupt, or create an
                                        undue burden on the Services or the
                                        networks or services connected to the
                                        Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Harass, annoy, intimidate, or threaten
                                        any of our employees or agents engaged
                                        in providing any portion of the Services
                                        to you.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Attempt to bypass any measures of the
                                        Services designed to prevent or restrict
                                        access to the Services, or any portion
                                        of the Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Copy or adapt the Services' software,
                                        including but not limited to Flash, PHP,
                                        HTML, JavaScript, or other code.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Except as permitted by applicable law,
                                        decipher, decompile, disassemble, or
                                        reverse engineer any of the software
                                        comprising or in any way making up a
                                        part of the Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Except as may be the result of standard
                                        search engine or Internet browser usage,
                                        use, launch, develop, or distribute any
                                        automated system, including without
                                        limitation, any spider, robot, cheat
                                        utility, scraper, or offline reader that
                                        accesses the Services, or use or launch
                                        any unauthorised script or other
                                        software.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Use a buying agent or purchasing agent
                                        to make purchases on the Services.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Make any unauthorised use of the
                                        Services, including collecting usernames
                                        and/or email addresses of users by
                                        electronic or other means for the
                                        purpose of sending unsolicited email, or
                                        creating user accounts by automated
                                        means or under false pretences.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Use the Services as part of any effort
                                        to compete with us or otherwise use the
                                        Services and/or the Content for any
                                        revenue-generating endeavour or
                                        commercial enterprise.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Sell or otherwise transfer your profile.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Use the Services to advertise or offer
                                        to sell goods and services.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 10. USER GENERATED CONTRIBUTIONS */}
                    <section
                        id='user-generated-contributions'
                        className='scroll-mt-28 space-y-4'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                10
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                User Generated Contributions
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                The Services does not offer users to submit or
                                post content. We may provide you with the
                                opportunity to create, submit, post, display,
                                transmit, perform, publish, distribute, or
                                broadcast content and materials to us or on the
                                Services, including but not limited to text,
                                writings, video, audio, photographs, graphics,
                                comments, suggestions, or personal information
                                or other material (collectively,
                                'Contributions'). Contributions may be viewable
                                by other users of the Services and through
                                third-party websites. When you create or make
                                available any Contributions, you thereby
                                represent and warrant that:
                            </p>
                            <ul className='space-y-1.5 text-sm text-muted-foreground pl-4'>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        The creation, distribution,
                                        transmission, public display, or
                                        performance, and the accessing,
                                        downloading, or copying of your
                                        Contributions do not and will not
                                        infringe the proprietary rights,
                                        including but not limited to the
                                        copyright, patent, trademark, trade
                                        secret, or moral rights of any third
                                        party.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        You are the creator and owner of or have
                                        the necessary licences, rights,
                                        consents, releases, and permissions to
                                        use and to authorise us, the Services,
                                        and other users of the Services to use
                                        your Contributions in any manner
                                        contemplated by the Services and these
                                        Legal Terms.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        You have the written consent, release,
                                        and/or permission of each and every
                                        identifiable individual person in your
                                        Contributions to use the name or
                                        likeness of each and every such
                                        identifiable individual person to enable
                                        inclusion and use of your Contributions
                                        in any manner contemplated by the
                                        Services and these Legal Terms.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions are not false,
                                        inaccurate, or misleading.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions are not unsolicited
                                        or unauthorised advertising, promotional
                                        materials, pyramid schemes, chain
                                        letters, spam, mass mailings, or other
                                        forms of solicitation.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions are not obscene,
                                        lewd, lascivious, filthy, violent,
                                        harassing, libellous, slanderous, or
                                        otherwise objectionable (as determined
                                        by us).
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions do not ridicule,
                                        mock, disparage, intimidate, or abuse
                                        anyone.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions are not used to
                                        harass or threaten (in the legal sense
                                        of those terms) any other person and to
                                        promote violence against a specific
                                        person or class of people.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions do not violate any
                                        applicable law, regulation, or rule.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions do not violate the
                                        privacy or publicity rights of any third
                                        party.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions do not violate any
                                        applicable law concerning child
                                        pornography, or otherwise intended to
                                        protect the health or well-being of
                                        minors.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions do not include any
                                        offensive comments that are connected to
                                        race, national origin, gender, sexual
                                        preference, or physical handicap.
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        Your Contributions do not otherwise
                                        violate, or link to material that
                                        violates, any provision of these Legal
                                        Terms, or any applicable law or
                                        regulation.
                                    </span>
                                </li>
                            </ul>
                            <p className='pt-2'>
                                Any use of the Services in violation of the
                                foregoing violates these Legal Terms and may
                                result in, among other things, termination or
                                suspension of your rights to use the Services.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 11. CONTRIBUTION LICENCE */}
                    <section
                        id='contribution-licence'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                11
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Contribution Licence
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                You and Services agree that we may access,
                                store, process, and use any information and
                                personal data that you provide and your choices
                                (including settings).
                            </p>
                            <p>
                                By submitting suggestions or other feedback
                                regarding the Services, you agree that we can
                                use and share such feedback for any purpose
                                without compensation to you.
                            </p>
                            <p>
                                We do not assert any ownership over your
                                Contributions. You retain full ownership of all
                                of your Contributions and any intellectual
                                property rights or other proprietary rights
                                associated with your Contributions. We are not
                                liable for any statements or representations in
                                your Contributions provided by you in any area
                                on the Services. You are solely responsible for
                                your Contributions to the Services and you
                                expressly agree to exonerate us from any and all
                                responsibility and to refrain from any legal
                                action against us regarding your Contributions.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 12. GUIDELINES FOR REVIEWS */}
                    <section
                        id='guidelines-for-reviews'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                12
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Guidelines for Reviews
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                We may provide you areas on the Services to
                                leave reviews or ratings. When posting a review,
                                you must comply with the following criteria:
                            </p>
                            <ul className='space-y-1.5 text-sm text-muted-foreground pl-4'>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (1) You should have firsthand experience
                                        with the person/entity being reviewed;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (2) Your reviews should not contain
                                        offensive profanity, or abusive, racist,
                                        offensive, or hateful language;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (3) Your reviews should not contain
                                        discriminatory references based on
                                        religion, race, gender, national origin,
                                        age, marital status, sexual orientation,
                                        or disability;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (4) Your reviews should not contain
                                        references to illegal activity;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (5) You should not be affiliated with
                                        competitors if posting negative reviews;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (6) You should not make any conclusions
                                        as to the legality of conduct;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (7) You may not post any false or
                                        misleading statements; and
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (8) You may not organise a campaign
                                        encouraging others to post reviews,
                                        whether positive or negative.
                                    </span>
                                </li>
                            </ul>
                            <p className='pt-2'>
                                We may accept, reject, or remove reviews in our
                                sole discretion. We have absolutely no
                                obligation to screen reviews or to delete
                                reviews, even if anyone considers reviews
                                objectionable or inaccurate. Reviews are not
                                endorsed by us, and do not necessarily represent
                                our opinions or the views of any of our
                                affiliates or partners. We do not assume
                                liability for any review or for any claims,
                                liabilities, or losses resulting from any
                                review. By posting a review, you hereby grant to
                                us a perpetual, non-exclusive, worldwide,
                                royalty-free, fully paid, assignable, and
                                sublicensable right and licence to reproduce,
                                modify, translate, transmit by any means,
                                display, perform, and/or distribute all content
                                relating to review.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 13. THIRD-PARTY WEBSITES AND CONTENT */}
                    <section
                        id='third-party-websites-and-content'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                13
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Third-Party Websites and Content
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            The Services may contain (or you may be sent via the
                            Site) links to other websites ('Third-Party
                            Websites') as well as articles, photographs, text,
                            graphics, pictures, designs, music, sound, video,
                            information, applications, software, and other
                            content or items belonging to or originating from
                            third parties ('Third-Party Content'). Such
                            Third-Party Websites and Third-Party Content are not
                            investigated, monitored, or checked for accuracy,
                            appropriateness, or completeness by us, and we are
                            not responsible for any Third-Party Websites
                            accessed through the Services or any Third-Party
                            Content posted on, available through, or installed
                            from the Services, including the content, accuracy,
                            offensiveness, opinions, reliability, privacy
                            practices, or other policies of or contained in the
                            Third-Party Websites or the Third-Party Content.
                            Inclusion of, linking to, or permitting the use or
                            installation of any Third-Party Websites or any
                            Third-Party Content does not imply approval or
                            endorsement thereof by us. If you decide to leave
                            the Services and access the Third-Party Websites or
                            to use or install any Third-Party Content, you do so
                            at your own risk, and you should be aware these
                            Legal Terms no longer govern. You should review the
                            applicable terms and policies, including privacy and
                            data gathering practices, of any website to which
                            you navigate from the Services or relating to any
                            applications you use or install from the Services.
                            Any purchases you make through Third-Party Websites
                            will be through other websites and from other
                            companies, and we take no responsibility whatsoever
                            in relation to such purchases which are exclusively
                            between you and the applicable third party. You
                            agree and acknowledge that we do not endorse the
                            products or services offered on Third-Party Websites
                            and you shall hold us blameless from any harm caused
                            by your purchase of such products or services.
                            Additionally, you shall hold us blameless from any
                            losses sustained by you or harm caused to you
                            relating to or resulting in any way from any
                            Third-Party Content or any contact with Third-Party
                            Websites.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 14. SERVICES MANAGEMENT */}
                    <section
                        id='services-management'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                14
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Services Management
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-2 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                We reserve the right, but not the obligation,
                                to:
                            </p>
                            <ul className='space-y-1.5 text-sm text-muted-foreground pl-4'>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (1) Monitor the Services for violations
                                        of these Legal Terms;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (2) Take appropriate legal action
                                        against anyone who, in our sole
                                        discretion, violates the law or these
                                        Legal Terms, including without
                                        limitation, reporting such user to law
                                        enforcement authorities;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (3) In our sole discretion and without
                                        limitation, refuse, restrict access to,
                                        limit the availability of, or disable
                                        (to the extent technologically feasible)
                                        any of your Contributions or any portion
                                        thereof;
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (4) In our sole discretion and without
                                        limitation, notice, or liability, to
                                        remove from the Services or otherwise
                                        disable all files and content that are
                                        excessive in size or are in any way
                                        burdensome to our systems; and
                                    </span>
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className='size-1.5 rounded-full bg-primary mt-2 shrink-0' />
                                    <span>
                                        (5) Otherwise manage the Services in a
                                        manner designed to protect our rights
                                        and property and to facilitate the
                                        proper functioning of the Services.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 15. PRIVACY POLICY */}
                    <section
                        id='privacy-policy'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                15
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Privacy Policy
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            We care about data privacy and security. By using
                            the Services, you agree to be bound by our{' '}
                            <a
                                href='/privacy-policy'
                                className='font-semibold text-foreground underline underline-offset-4'
                            >
                                Privacy Policy
                            </a>{' '}
                            posted on the Services, which is incorporated into
                            these Legal Terms. Please be advised the Services
                            are hosted in Norway. If you access the Services
                            from any other region of the world with laws or
                            other requirements governing personal data
                            collection, use, or disclosure that differ from
                            applicable laws in Norway, then through your
                            continued use of the Services, you are transferring
                            your data to Norway, and you expressly consent to
                            have your data transferred to and processed in
                            Norway.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 16. TERM AND TERMINATION */}
                    <section
                        id='term-and-termination'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                16
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Term and Termination
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                These Legal Terms shall remain in full force and
                                effect while you use the Services.
                            </p>
                            <p className='font-medium text-foreground/90'>
                                WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                                LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR
                                SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY,
                                DENY ACCESS TO AND USE OF THE SERVICES
                                (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
                                ANY PERSON FOR ANY REASON OR FOR NO REASON,
                                INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                                REPRESENTATION, WARRANTY, OR COVENANT CONTAINED
                                IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR
                                REGULATION. WE MAY TERMINATE YOUR USE OR
                                PARTICIPATION IN THE SERVICES OR DELETE ANY
                                CONTENT OR INFORMATION THAT YOU POSTED AT ANY
                                TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
                            </p>
                            <p>
                                If we terminate or suspend your account for any
                                reason, you are prohibited from registering and
                                creating a new account under your name, a fake
                                or borrowed name, or the name of any third
                                party, even if you may be acting on behalf of
                                the third party. In addition to terminating or
                                suspending your account, we reserve the right to
                                take appropriate legal action, including without
                                limitation pursuing civil, criminal, and
                                injunctive redress.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 17. MODIFICATIONS AND INTERRUPTIONS */}
                    <section
                        id='modifications-and-interruptions'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                17
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Modifications and Interruptions
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                We reserve the right to change, modify, or
                                remove the contents of the Services at any time
                                or for any reason at our sole discretion without
                                notice. However, we have no obligation to update
                                any information on our Services. We also reserve
                                the right to modify or discontinue all or part
                                of the Services without notice at any time. We
                                will not be liable to you or any third party for
                                any modification, price change, suspension, or
                                discontinuance of the Services.
                            </p>
                            <p>
                                We cannot guarantee the Services will be
                                available at all times. We may experience
                                hardware, software, or other problems or need to
                                perform maintenance related to the Services,
                                resulting in interruptions, delays, or errors.
                                We reserve the right to change, revise, update,
                                suspend, discontinue, or otherwise modify the
                                Services at any time or for any reason without
                                notice to you. You agree that we have no
                                liability whatsoever for any loss, damage, or
                                inconvenience caused by your inability to access
                                or use the Services during any downtime or
                                discontinuance of the Services. Nothing in these
                                Legal Terms will be construed to obligate us to
                                maintain and support the Services or to supply
                                any corrections, updates, or releases in
                                connection therewith.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 18. GOVERNING LAW */}
                    <section
                        id='governing-law'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                18
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Governing Law & Jurisdiction
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            These Legal Terms are governed by and interpreted
                            following the laws of Norway, and the use of the
                            United Nations Convention of Contracts for the
                            International Sales of Goods is expressly excluded.
                            If your habitual residence is in the EU, and you are
                            a consumer, you additionally possess the protection
                            provided to you by obligatory provisions of the law
                            in your country to residence. Maren Stenersen and
                            yourself both agree to submit to the non-exclusive
                            jurisdiction of the courts of Bergen, which means
                            that you may make a claim to defend your consumer
                            protection rights in regards to these Legal Terms in
                            Norway, or in the EU country in which you reside.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 19. DISPUTE RESOLUTION */}
                    <section
                        id='dispute-resolution'
                        className='scroll-mt-28 space-y-4'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                19
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Dispute Resolution
                            </h2>
                        </div>

                        <div className='pl-7 sm:pl-8 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <div>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Informal Negotiations
                                </h3>
                                <p>
                                    To expedite resolution and control the cost
                                    of any dispute, controversy, or claim
                                    related to these Legal Terms (each a
                                    'Dispute' and collectively, the 'Disputes')
                                    brought by either you or us (individually, a
                                    'Party' and collectively, the 'Parties'),
                                    the Parties agree to first attempt to
                                    negotiate any Dispute (except those Disputes
                                    expressly provided below) informally for at
                                    least thirty (30) days before initiating
                                    arbitration. Such informal negotiations
                                    commence upon written notice from one Party
                                    to the other Party.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Binding Arbitration
                                </h3>
                                <p>
                                    Any dispute arising from the relationships
                                    between the Parties to these Legal Terms
                                    shall be determined by one arbitrator who
                                    will be chosen in accordance with the
                                    Arbitration and Internal Rules of the
                                    European Court of Arbitration being part of
                                    the European Centre of Arbitration having
                                    its seat in Strasbourg, and which are in
                                    force at the time the application for
                                    arbitration is filed, and of which adoption
                                    of this clause constitutes acceptance. The
                                    seat of arbitration shall be Bergen, Norway.
                                    The language of the proceedings shall be
                                    Norwegian. Applicable rules of substantive
                                    law shall be the law of Norway.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Restrictions
                                </h3>
                                <p>
                                    The Parties agree that any arbitration shall
                                    be limited to the Dispute between the
                                    Parties individually. To the full extent
                                    permitted by law, (a) no arbitration shall
                                    be joined with any other proceeding; (b)
                                    there is no right or authority for any
                                    Dispute to be arbitrated on a class-action
                                    basis or to utilise class action procedures;
                                    and (c) there is no right or authority for
                                    any Dispute to be brought in a purported
                                    representative capacity on behalf of the
                                    general public or any other persons.
                                </p>
                            </div>

                            <div>
                                <h3 className='font-display text-base font-semibold text-foreground mb-1.5'>
                                    Exceptions to Informal Negotiations and
                                    Arbitration
                                </h3>
                                <p>
                                    The Parties agree that the following
                                    Disputes are not subject to the above
                                    provisions concerning informal negotiations
                                    binding arbitration: (a) any Disputes
                                    seeking to enforce or protect, or concerning
                                    the validity of, any of the intellectual
                                    property rights of a Party; (b) any Dispute
                                    related to, or arising from, allegations of
                                    theft, piracy, invasion of privacy, or
                                    unauthorised use; and (c) any claim for
                                    injunctive relief. If this provision is
                                    found to be illegal or unenforceable, then
                                    neither Party will elect to arbitrate any
                                    Dispute falling within that portion of this
                                    provision found to be illegal or
                                    unenforceable and such Dispute shall be
                                    decided by a court of competent jurisdiction
                                    within the courts listed for jurisdiction
                                    above, and the Parties agree to submit to
                                    the personal jurisdiction of that court.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 20. CORRECTIONS */}
                    <section
                        id='corrections'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                20
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Corrections
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            There may be information on the Services that
                            contains typographical errors, inaccuracies, or
                            omissions, including descriptions, pricing,
                            availability, and various other information. We
                            reserve the right to correct any errors,
                            inaccuracies, or omissions and to change or update
                            the information on the Services at any time, without
                            prior notice.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 21. DISCLAIMER */}
                    <section id='disclaimer' className='scroll-mt-28 space-y-3'>
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                21
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Disclaimer
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono'>
                            <p>
                                THE SERVICES ARE PROVIDED ON AN AS-IS AND
                                AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF
                                THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
                                FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                                WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
                                WITH THE SERVICES AND YOUR USE THEREOF,
                                INCLUDING, WITHOUT LIMITATION, THE IMPLIED
                                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE
                                MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
                                ACCURACY OR COMPLETENESS OF THE SERVICES'
                                CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE
                                APPLICATIONS LINKED TO THE SERVICES AND WE WILL
                                ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
                                (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT
                                AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY
                                DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
                                YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
                                UNAUTHORISED ACCESS TO OR USE OF OUR SECURE
                                SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
                                AND/OR FINANCIAL INFORMATION STORED THEREIN, (4)
                                ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO
                                OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES,
                                TROJAN HORSES, OR THE LIKE WHICH MAY BE
                                TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
                                THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS
                                IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR
                                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE
                                USE OF ANY CONTENT POSTED, TRANSMITTED, OR
                                OTHERWISE MADE AVAILABLE VIA THE SERVICES.
                            </p>
                            <p>
                                WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                                RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
                                ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH
                                THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY
                                WEBSITE OR MOBILE APPLICATION FEATURED IN ANY
                                BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE
                                A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR
                                MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
                                THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
                                AS WITH THE PURCHASE OF A PRODUCT OR SERVICE
                                THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
                                SHOULD USE YOUR BEST JUDGEMENT AND EXERCISE
                                CAUTION WHERE APPROPRIATE.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 22. LIMITATIONS OF LIABILITY */}
                    <section
                        id='limitations-of-liability'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                22
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Limitations of Liability
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-mono'>
                            <p>
                                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES,
                                OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY
                                FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL,
                                EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                                DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE,
                                LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR
                                USE OF THE SERVICES, EVEN IF WE HAVE BEEN
                                ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                NOTWITHSTANDING ANYTHING TO THE CONTRARY
                                CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY
                                CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
                                THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE
                                AMOUNT PAID, IF ANY, BY YOU TO US.
                            </p>
                            <p>
                                CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO
                                NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR
                                THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES.
                                IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
                                ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY
                                TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 23. INDEMNIFICATION */}
                    <section
                        id='indemnification'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                23
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Indemnification
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            You agree to defend, indemnify, and hold us
                            harmless, including our subsidiaries, affiliates,
                            and all of our respective officers, agents,
                            partners, and employees, from and against any loss,
                            damage, liability, claim, or demand, including
                            reasonable attorneys’ fees and expenses, made by any
                            third party due to or arising out of: (1) use of the
                            Services; (2) breach of these Legal Terms; (3) any
                            breach of your representations and warranties set
                            forth in these Legal Terms; (4) your violation of
                            the rights of a third party, including but not
                            limited to intellectual property rights; or (5) any
                            overt harmful act toward any other user of the
                            Services with whom you connected via the Services.
                            Notwithstanding the foregoing, we reserve the right,
                            at your expense, to assume the exclusive defence and
                            control of any matter for which you are required to
                            indemnify us, and you agree to cooperate, at your
                            expense, with our defence of such claims. We will
                            use reasonable efforts to notify you of any such
                            claim, action, or proceeding which is subject to
                            this indemnification upon becoming aware of it.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 24. USER DATA */}
                    <section id='user-data' className='scroll-mt-28 space-y-3'>
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                24
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                User Data
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            We will maintain certain data that you transmit to
                            the Services for the purpose of managing the
                            performance of the Services, as well as data
                            relating to your use of the Services. Although we
                            perform regular routine backups of data, you are
                            solely responsible for all data that you transmit or
                            that relates to any activity you have undertaken
                            using the Services. You agree that we shall have no
                            liability to you for any loss or corruption of any
                            such data, and you hereby waive any right of action
                            against us arising from any such loss or corruption
                            of such data.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 25. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES */}
                    <section
                        id='electronic-communications-transactions-and-signatures'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                25
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Electronic Communications & Signatures
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                            <p>
                                Visiting the Services, sending us emails, and
                                completing online forms constitute electronic
                                communications. You consent to receive
                                electronic communications, and you agree that
                                all agreements, notices, disclosures, and other
                                communications we provide to you electronically,
                                via email and on the Services, satisfy any legal
                                requirement that such communication be in
                                writing.
                            </p>
                            <p className='font-medium text-foreground/90'>
                                YOU HEREBY AGREE TO THE USE OF ELECTRONIC
                                SIGNATURES, CONTRACTS, ORDERS, AND OTHER
                                RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
                                POLICIES, AND RECORDS OF TRANSACTIONS INITIATED
                                OR COMPLETED BY US OR VIA THE SERVICES. You
                                hereby waive any rights or requirements under
                                any statutes, regulations, rules, ordinances, or
                                other laws in any jurisdiction which require an
                                original signature or delivery or retention of
                                non-electronic records, or to payments or the
                                granting of credits by any means other than
                                electronic means.
                            </p>
                        </div>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 26. MISCELLANEOUS */}
                    <section
                        id='miscellaneous'
                        className='scroll-mt-28 space-y-3'
                    >
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                26
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Miscellaneous
                            </h2>
                        </div>
                        <p className='text-sm sm:text-base text-muted-foreground leading-relaxed pl-7 sm:pl-8'>
                            These Legal Terms and any policies or operating
                            rules posted by us on the Services or in respect to
                            the Services constitute the entire agreement and
                            understanding between you and us. Our failure to
                            exercise or enforce any right or provision of these
                            Legal Terms shall not operate as a waiver of such
                            right or provision. These Legal Terms operate to the
                            fullest extent permissible by law. We may assign any
                            or all of our rights and obligations to others at
                            any time. We shall not be responsible or liable for
                            any loss, damage, delay, or failure to act caused by
                            any cause beyond our reasonable control. If any
                            provision or part of a provision of these Legal
                            Terms is determined to be unlawful, void, or
                            unenforceable, that provision or part of the
                            provision is deemed severable from these Legal Terms
                            and does not affect the validity and enforceability
                            of any remaining provisions. There is no joint
                            venture, partnership, employment or agency
                            relationship created between you and us as a result
                            of these Legal Terms or use of the Services. You
                            agree that these Legal Terms will not be construed
                            against us by virtue of having drafted them. You
                            hereby waive any and all defences you may have based
                            on the electronic form of these Legal Terms and the
                            lack of signing by the parties hereto to execute
                            these Legal Terms.
                        </p>
                    </section>

                    <Separator className='border-border/60' />

                    {/* 27. CONTACT US */}
                    <section id='contact-us' className='scroll-mt-28 space-y-4'>
                        <div className='flex items-baseline gap-3'>
                            <span className='font-mono text-xs sm:text-sm font-bold text-muted-foreground'>
                                27
                            </span>
                            <h2 className='font-display text-lg sm:text-xl font-bold tracking-tight text-foreground'>
                                Contact Us
                            </h2>
                        </div>
                        <div className='pl-7 sm:pl-8 space-y-4'>
                            <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                                In order to resolve a complaint regarding the
                                Services or to receive further information
                                regarding use of the Services, please contact
                                our atelier directly:
                            </p>

                            <div className='p-5 rounded-xl border border-border/70 bg-surface/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                                <div className='space-y-1.5 text-xs sm:text-sm'>
                                    <p className='font-display font-bold text-surface-foreground'>
                                        Maren Stenersen / SCAPE by md
                                    </p>
                                    <p className='text-muted-foreground'>
                                        Schweigårds vei 30A, 5063 Bergen, Norway
                                    </p>
                                    <div className='flex flex-wrap gap-4 pt-1 font-mono text-xs text-muted-foreground'>
                                        <span className='flex items-center gap-1.5'>
                                            <Phone className='w-3.5 h-3.5 text-primary' />
                                            +47 938 74 223
                                        </span>
                                        <span className='flex items-center gap-1.5'>
                                            <Mail className='w-3.5 h-3.5 text-primary' />
                                            scapebymd@gmail.com
                                        </span>
                                    </div>
                                </div>

                                <a
                                    href='/contact-us'
                                    className='inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-background text-foreground text-xs font-medium hover:bg-muted transition-colors shrink-0'
                                >
                                    <span>Contact Us</span>
                                    <ArrowRight className='w-3 h-3' />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Separator and Signature Logo (Preserved as requested) */}
                <Separator
                    orientation='horizontal'
                    className='border-border w-42 sm:w-56 self-center mx-auto'
                />
                <div className='flex flex-col items-center my-8 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-display tracking-[0.2em] mb-1 text-foreground whitespace-nowrap'>
                        <span>SC</span>
                        <span className='tracking-normal'>/\</span>
                        <span className='pl-1.5'>PE</span>
                    </h2>
                    <p className='text-xs tracking-widest text-muted-foreground'>
                        by md
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default TermsOfService;
