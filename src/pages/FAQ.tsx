import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

function FAQ() {
    return (
        <div className='flex flex-col min-h-full w-full bg-neutral-100'>
            <BackButton page='home' />
            <div className='flex h-full w-full py-20 text-neutral-900 justify-evenly'>
                <div className='flex flex-col min-h-full w-2/5'>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full p-20 space-y-5 pt-5'
                    >
                        <h1 className='text-2xl font-medium tracking-widest'>
                            Returns & Refunds
                        </h1>
                        <AccordionItem
                            value='item-1'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Do I have a right to return my order?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    No. Since all our products are custom-made
                                    and created based on your specifications,
                                    returns are not possible unless the item is
                                    faulty or damaged.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-2'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                What if my order arrives damaged or with a
                                mistake?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    If your order arrives damaged, defective, or
                                    not as described, please reach out to us
                                    within 7 days.
                                </p>
                                <p className='text-[16px] text-neutral-600'>
                                    We may ask for photos so we can assess the
                                    issue and arrange a replacement or solution.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-3'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Can I cancel my order after placing it?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    We begin work on your custom order shortly
                                    after it is placed. Once production has
                                    started, cancellations are not possible.
                                </p>
                                <p className='text-[16px] text-neutral-600'>
                                    If you contact us immediately after
                                    ordering, we may be able to stop production
                                    - please reach out as soon as possible.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-4'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Do these rules apply if I order as a business?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    Yes. Orders placed by businesses are not
                                    covered by consumer return rights and follow
                                    the same no-return policy for custom-made
                                    products.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full p-20 space-y-5 pt-5'
                    >
                        <h1 className='text-2xl font-medium tracking-widest'>
                            Payments & Security
                        </h1>
                        <AccordionItem
                            value='item-1'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Which payment methods do you accept?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-neutral-600 text-[16px]'>
                                <p>
                                    We use Vipps as our main payment provider,
                                    to make purchases as easy as possible.
                                </p>
                                <p>
                                    You can choose to either pay by card or with
                                    Vipps/MobilePay. We accept both Visa and
                                    Mastercard.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-2'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Is payment secure?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    Yes. All payments are processed through
                                    trusted third-party providers using
                                    industry-standard encryption.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full p-20 space-y-5 pt-5'
                    >
                        <h1 className='text-2xl font-medium tracking-widest'>
                            Problems & Support
                        </h1>
                        <AccordionItem
                            value='item-1'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                My order arrived damaged - what do I do?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-neutral-600 text-[16px]'>
                                <p>
                                    Please contact us within 7 days with photos
                                    of the damage, and we'll arrange a
                                    replacement or solution.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-2'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                I made a mistake in my order - can it be fixed?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    If you realize there's an error, contact us
                                    immediately.
                                </p>
                                <p>
                                    If production hasn't started yet, we may be
                                    able to adjust it. Once production is
                                    underway, changes are usually not possible.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-3'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                How can I contact you?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    Contact us at <b>scapebymd@gmail.com</b>
                                </p>
                                <p>
                                    Or by going to the{' '}
                                    <a href='/contact-us'>
                                        <b>Contact Us</b>
                                    </a>{' '}
                                    page and filling out the form.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className='flex flex-col min-h-full w-2/5'>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full p-20 space-y-5 pt-5'
                    >
                        <h1 className='text-2xl font-medium tracking-widest'>
                            Shipping & Delivery
                        </h1>
                        <AccordionItem
                            value='item-1'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                How long does it take to receive my order?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    Since each item is custom-made, production
                                    times vary. On average, production takes
                                    [X–Y business days], plus shipping time
                                    depending on your location.
                                </p>
                                <p className='text-[16px] text-neutral-600'>
                                    That being said, we always try to deliver
                                    within 7 days.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-2'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Do you ship internationally?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    No, as of right now we only ship within
                                    Norway. 
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-3'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                How can I track my order?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    Once your order has shipped, you'll receive
                                    a confirmation email with tracking details.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full p-20 space-y-5 pt-5'
                    >
                        <h1 className='text-2xl font-medium tracking-widest'>
                            Product & Customization
                        </h1>
                        <AccordionItem
                            value='item-1'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                What kind of customization can I request?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    You can choose any part of Norway as your
                                    Scape. 
                                </p>
                                <p>
                                    Once you've selected your location, you can
                                    personalize the presentation by selecting
                                    from our range of frames and passepartouts
                                    to match your style. More options to come.
                                </p>
                                <p>
                                    If you have a specific request, feel free to
                                    contact us before placing your order.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-2'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Can I see a preview before production?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    Yes, we provide a digital render of your
                                    model as you go. This ensures that you're
                                    happy with your Scape.
                                </p>
                                <p>
                                    We also visualize the final product before
                                    checkout to make sure you're happy with the
                                    design
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-3'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                What if I want something completely unique?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance'>
                                <p className='text-[16px] text-neutral-600'>
                                    We're always happy to discuss special
                                    projects! Contact us with your idea, and
                                    we'll let you know what's possible and
                                    provide a quote.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion
                        type='single'
                        collapsible
                        className='w-full p-20 space-y-5 pt-5'
                    >
                        <h1 className='text-2xl font-medium tracking-widest'>
                            Cookies & Privacy
                        </h1>
                        <AccordionItem
                            value='item-1'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Do you use cookies on this website?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    Yes, but only the cookies that are from the
                                    third-party payment provider, and are
                                    strictly necessary to make the website work
                                    properly.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-2'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Do you use cookies for advertising or tracking?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    No. We do not use cookies for advertising,
                                    analytics, or tracking your activity across
                                    other websites.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-3'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Can I disable cookies?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    Since we only use essential cookies,
                                    disabling them may prevent the website from
                                    working as intended - especially checkout.
                                </p>
                                <p>
                                    For this reason, we recommend keeping them
                                    enabled when shopping with us.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                            value='item-4'
                            className='pb-5 border-neutral-300'
                        >
                            <AccordionTrigger className='text-[18px] cursor-pointer text-neutral-800 tracking-wide'>
                                Do you collect personal data?
                            </AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-4 text-balance text-[16px] text-neutral-600'>
                                <p>
                                    We only collect the personal information that you provide us. 
                                    Like your name, email address, and shipping or billing address. 
                                </p>
                                <p>
                                    These are only used to produce and ship your product, and to contact you regarding any issues. 
                                    We do not sell any information to third-parties. 
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;
