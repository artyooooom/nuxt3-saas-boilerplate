import { type ButtonProps, type LinkProps } from '@/components/blocks/types';

export const linksData: LinkProps[] = [{
    title: 'Pricings',
    url: '#',
    isActive: true
}, {
    title: 'Features',
    url: '#'
}, {
    title: 'Blog',
    url: '/blog'
}]


export const buttonsData: ButtonProps[] = [{
    title: 'Auth',
    link: {
        url: '/auth',
        target: '_blank'
    },
    variant: 'destructive'
}, {
    title: 'Example',
    variant: 'outline'
}]

export const announcement = {
    title: '🎉 $100 off for the first 50 customers',
    backgroundClass: 'bg-primary',
    link: '/'
}