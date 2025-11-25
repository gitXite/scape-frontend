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
import { cn } from '@/lib/utils';
import { Spinner } from './ui/shadcn-io/spinner/spinner';


const formSchema = z.object({
    name: z.string()
        .min(2, {
            message: 'Please enter your name',
        })
        .max(25, {
            message: 'Name cannot be over 25 characters',
        }),
    email: z.email(),
    orderId: z.string().optional(),
    content: z.string().min(10, {
        message: 'Please provide a message',
    }),
    honey: z.string().max(0, 'Bot detected'),
});


function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            orderId: '',
            content: '',
            honey: '',
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true);
            const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/contact`, {
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
                toast.error('Failed to submit form', {
                    description: 'Please try again later',
                });
                setIsLoading(false);
                return;
            }

            toast.success('Contact form submitted', {
                description: 'We will reach out to you shortly',
            });
            setIsLoading(false);
            form.reset();
        } catch (err) {
            console.log('Failed to submit form: ', err);
            toast.error('Failed to submit form', {
                description: err instanceof Error ? err.message : 'Please try again later'
            });
            setIsLoading(false);
        }
    };

    return (
        <div className='w-full text-neutral-900 p-10'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 flex flex-col items-center'>
                    <FormField 
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='ml-2 text-neutral-800'>Name</FormLabel>
                                <FormControl>
                                    <Input className='bg-white w-70 rounded-sm p-5 font-normal' placeholder='Your Name' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='ml-2 text-neutral-800'>Email</FormLabel>
                                <FormControl>
                                    <Input className='bg-white w-70 rounded-sm p-5 font-normal' placeholder='example@gmail.com' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='orderId'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='ml-2 text-neutral-800'>Order ID</FormLabel>
                                <FormControl>
                                    <Input className='bg-white w-70 rounded-sm p-5 font-normal' placeholder='Please provide an order ID (optional)' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='content'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='ml-2 text-neutral-800'>Message</FormLabel>
                                <FormControl>
                                    {/* <Input className='bg-white w-70 rounded-sm p-5 h-40 font-normal' autoComplete='off' placeholder='What is on your mind?' {...field} /> */}
                                    <textarea id="message" className={cn(
                                            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                                            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                                            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                                            "bg-white h-30 w-70 rounded-sm p-5 font-normal resize-none"
                                          )} autoComplete='off' placeholder='What is on your mind?' {...field} ></textarea>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='honey'
                        render={({ field }) => (
                            <FormItem className='honeypot'>
                                <FormControl>
                                    <Input className='' autoComplete='off' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {isLoading ? (
                        <Button
                            type='submit'
                            disabled
                            className='p-5 min-w-30 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                        >
                            <Spinner variant={'ellipsis'} />
                        </Button>
                    ) : (
                        <Button 
                            type='submit'
                            className='p-5 min-w-30 bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                        >
                            Submit
                        </Button>
                    )}
                </form>
            </Form>
        </div>
    );
}


export default Contact;
