import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

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

const createFormSchema = (t: TFunction) =>
    z.object({
        name: z
            .string()
            .min(2, {
                message: t('contact.form.validation.nameMin', { ns: 'pages' }),
            })
            .max(35, {
                message: t('contact.form.validation.nameMax', { ns: 'pages' }),
            }),
        email: z.string().email({
            message: t('contact.form.validation.email', { ns: 'pages' }),
        }),
        orderId: z.string().optional(),
        content: z.string().min(10, {
            message: t('contact.form.validation.contentMin', { ns: 'pages' }),
        }),
        honey: z.string().max(0, t('contact.form.validation.botDetected', { ns: 'pages' })),
    });

type FormValues = {
    name: string;
    email: string;
    orderId?: string;
    content: string;
    honey: string;
};

function ContactForm() {
    const { t } = useTranslation('pages');
    const [isLoading, setIsLoading] = useState(false);

    const schema = useMemo(() => createFormSchema(t), [t]);

    const form = useForm<FormValues>({
        resolver: zodResolver(schema),
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
                toast.error(t('contact.form.toast.error'), {
                    description: t('contact.form.toast.errorDesc'),
                });
                setIsLoading(false);
                return;
            }

            toast.success(t('contact.form.toast.success'), {
                description: t('contact.form.toast.successDesc'),
            });
            setIsLoading(false);
            form.reset();
        } catch (err) {
            console.error('Failed to submit form:', err);
            toast.error(t('contact.form.toast.error'), {
                description: err instanceof Error ? err.message : t('contact.form.toast.errorDesc'),
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
                                    {t('contact.form.nameLabel')} <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className='h-11 rounded-xl bg-background border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                                        placeholder={t('contact.form.namePlaceholder')}
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
                                    {t('contact.form.emailLabel')} <span className='text-destructive'>*</span>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type='email'
                                        className='h-11 rounded-xl bg-background border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                                        placeholder={t('contact.form.emailPlaceholder')}
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
                                {t('contact.form.orderLabel')} <span className='text-muted-foreground/60 font-normal'>{t('contact.form.optional')}</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    className='h-11 rounded-xl bg-background border border-border/80 text-sm text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs'
                                    placeholder={t('contact.form.orderPlaceholder')}
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
                                {t('contact.form.messageLabel')} <span className='text-destructive'>*</span>
                            </FormLabel>
                            <FormControl>
                                <textarea
                                    id='message'
                                    rows={5}
                                    className='w-full rounded-xl bg-background border border-border/80 p-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-xs resize-none font-sans leading-relaxed'
                                    placeholder={t('contact.form.messagePlaceholder')}
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
                            className='w-full sm:w-auto min-w-42 h-12 px-8 rounded-full bg-primary text-primary-foreground border border-border cursor-not-allowed opacity-80'
                        >
                            <Spinner variant='ellipsis' />
                        </Button>
                    ) : (
                        <Button
                            type='submit'
                            className='w-full sm:w-auto min-w-42 h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:bg-primary-foreground hover:text-secondary-foreground border border-border cursor-pointer inline-flex items-center justify-center gap-2'
                        >
                            <span>{t('contact.form.submit')}</span>
                            <Send className='w-4 h-4' />
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    );
}

export default ContactForm;
