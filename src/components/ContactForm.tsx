import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Spinner } from './ui/shadcn-io/spinner/spinner';
import { Send } from 'lucide-react';

const formSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: 'Please enter your name',
        })
        .max(35, {
            message: 'Name cannot be over 35 characters',
        }),
    email: z.email({
        message: 'Please enter a valid email address',
    }),
    orderId: z.string().optional(),
    content: z.string().min(10, {
        message: 'Please provide a message (at least 10 characters)',
    }),
    honey: z.string().max(0, 'Bot detected'),
});

type FormValues = z.infer<typeof formSchema>;

function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            orderId: '',
            content: '',
            honey: '',
        },
    });

    const onSubmit = async (values: FormValues) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    orderID: values.orderId,
                    content: values.content,
                    honey: values.honey,
                }),
            });

            if (!response.ok) {
                toast.error('Failed to submit message', {
                    description: 'Please try again later or email us directly.',
                });
                setIsLoading(false);
                return;
            }

            toast.success('Message sent successfully', {
                description: 'Takk! We will get back to you shortly.',
            });
            setIsLoading(false);
            form.reset();
        } catch (err) {
            console.error('Failed to submit form:', err);
            toast.error('Failed to submit message', {
                description: err instanceof Error ? err.message : 'Please try again later or email us directly.',
            });
            setIsLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 text-left w-full'>
                {/* Row 1: Name and Email */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-1.5'>
                                <FormLabel className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                    Your Name <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className='h-11 rounded-xl bg-background border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                                        placeholder='Ola Nordmann'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className='text-xs text-destructive' />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem className='flex flex-col gap-1.5'>
                                <FormLabel className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                    Email Address <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        className='h-11 rounded-xl bg-background border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                                        placeholder='ola@example.no'
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage className='text-xs text-destructive' />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Row 2: Order ID */}
                <FormField
                    control={form.control}
                    name='orderId'
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1.5'>
                            <FormLabel className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                Order Reference <span className='text-muted-foreground/60 font-normal'>(Optional)</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className='h-11 rounded-xl bg-background border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                                    placeholder='e.g. #12345'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className='text-xs text-destructive' />
                        </FormItem>
                    )}
                />

                {/* Row 3: Message */}
                <FormField
                    control={form.control}
                    name='content'
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-1.5'>
                            <FormLabel className='text-xs font-semibold uppercase tracking-wider text-muted-foreground'>
                                Message <span className='text-destructive'>*</span>
                            </FormLabel>
                            <FormControl>
                                <textarea
                                    id='message'
                                    rows={5}
                                    className='w-full rounded-xl bg-background border border-border/80 p-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs resize-none font-sans leading-relaxed'
                                    placeholder='Tell us about your custom terrain inquiry, question, or special request...'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className='text-xs text-destructive' />
                        </FormItem>
                    )}
                />

                {/* Anti-spam Honeypot (hidden from real users) */}
                <FormField
                    control={form.control}
                    name='honey'
                    render={({ field }) => (
                        <FormItem className='honeypot'>
                            <FormControl>
                                <Input tabIndex={-1} autoComplete='off' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div className='pt-2'>
                    {isLoading ? (
                        <Button
                            type='submit'
                            disabled
                            className='w-full sm:w-auto min-w-36 h-12 px-8 rounded-full bg-primary text-primary-foreground border border-border cursor-not-allowed opacity-80'
                        >
                            <Spinner variant='ellipsis' />
                        </Button>
                    ) : (
                        <Button
                            type='submit'
                            className='w-full sm:w-auto min-w-36 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground border border-border cursor-pointer inline-flex items-center justify-center gap-2'
                        >
                            <span>Send Message</span>
                            <Send className='w-4 h-4' />
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
}

export default ContactForm;
