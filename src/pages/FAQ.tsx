import BackButton from '@/components/BackButton';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


function FAQ() {
    return (
        <div className='flex flex-col h-full w-full items-center bg-neutral-100'>
            <BackButton />
            <div className='flex min-h-full w-full py-20 text-neutral-900'>
                <div className='flex flex-col h-full w-2/4 items-center'>
                    <h1 className='text-2xl tracking-widest font-normal'>
                        Frequently Asked Questions (FAQ)
                    </h1>
                    <Accordion 
                        type='single' 
                        collapsible
                        className='w-full p-20 space-y-5'
                    >
                        <AccordionItem value='item-1' className='space-y-5 border-neutral-300'>
                            <AccordionTrigger className='text-xl cursor-pointer'>Do I have a right to return my order?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-lg'>
                                    No. Since all our products are custom-made and created based on your specifications, returns are not possible unless the item is faulty or damaged.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-2' className='space-y-5 border-neutral-300'>
                            <AccordionTrigger className='text-xl cursor-pointer'>What if my order arrives damaged or with a mistake?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-lg'>
                                    If your order arrives damaged, defective, or not as described, please reach out to us within 7 days. 
                                </p>
                                <p className='text-lg'>
                                    We may ask for photos so we can assess the issue and arrange a replacement or solution.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-3' className='space-y-5 border-neutral-300'>
                            <AccordionTrigger className='text-xl cursor-pointer'>Can I cancel my order after placing it?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-lg'>
                                    We begin work on your custom order shortly after it is placed. Once production has started, cancellations are not possible. 
                                </p>
                                <p className='text-lg'>
                                    If you contact us immediately after ordering, we may be able to stop production - please reach out as soon as possible.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-4' className='space-y-5 border-neutral-300'>
                            <AccordionTrigger className='text-xl cursor-pointer'>Do these rules apply if I order as a business?</AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <p className='text-lg'>
                                    Yes. Orders placed by businesses are not covered by consumer return rights and follow the same no-return policy for custom-made products.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div className='flex flex-col h-full w-2/4'>

                </div>
            </div>
            <Footer />
        </div>
    );
}


export default FAQ;