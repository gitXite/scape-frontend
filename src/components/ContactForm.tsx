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
});

function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
        }
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className='h-2/4 w-2/8 text-neutral-900'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5 flex flex-col items-center'>
                    <FormField 
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='ml-2 text-neutral-800'>Name</FormLabel>
                                <FormControl>
                                    <Input className='bg-white w-50 rounded-sm p-5' placeholder='Your Name Here' {...field} />
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
                                    <Input className='bg-white w-50 rounded-sm p-5' placeholder='Your Email' {...field} />
                                </FormControl>
                                <FormDescription>
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button 
                        type='submit'
                        className='cursor-pointer rounded-full'
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
}


export default Contact;