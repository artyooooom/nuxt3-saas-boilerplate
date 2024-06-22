import { type ButtonProps, type LinkProps } from '@/components/blocks/types';

export const linksData: LinkProps[] = [{
    title: 'Pricings',
    url: '/pricings',
    isActive: true
}, {
    title: 'Features',
    url: '/features'
}, {
    title: 'Blog',
    url: '/blog/'
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