import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';


const formSchema = z.object({
    name: z.string()
        .min(2, {
            message: 'Please enter your name',
        })
        .max(25, {
            message: 'Name cannot be over 25 characters',
        }),
    email: z.email(),
    content: z.string().min(10, {
        message: 'Please provide a message',
    }),
    honey: z.string().max(0, 'Bot detected'),
});

function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            content: '',
            honey: '',
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className='w-2/8 text-neutral-900 bg-neutral-200/20 border-1 p-10 rounded-sm'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 flex flex-col items-center'>
                    <FormField 
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='ml-2 text-neutral-800'>Name</FormLabel>
                                <FormControl>
                                    <Input className='bg-white w-70 rounded-sm p-5' placeholder='Your Name' {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
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
                                    <Input className='bg-white w-70 rounded-sm p-5' placeholder='example@gmail.com' {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
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
                                    <Input className='bg-white w-70 rounded-sm p-5 h-20' autoComplete='off' placeholder='What is on your mind?' {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
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
                    <Button 
                        type='submit'
                        className='bg-neutral-900 border-neutral-300 border-1 hover:bg-neutral-200 active:bg-white text-neutral-100 hover:text-neutral-900 rounded-full cursor-pointer'
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
}


export default Contact;