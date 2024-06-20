import { type ButtonProps, type LinkProps } from '@/components/blocks/types';

export const linksData: LinkProps[] = [{
    label: 'Pricings',
    url: '/pricings',
    isActive: true
}, {
    label: 'Features',
    url: '/features'
}, {
    label: 'Blog',
    url: '/blog/'
}]

export const buttonsData: ButtonProps[] = [{
    label: 'Auth',
    link: {
        url: '/auth',
        target: '_blank'
    },
    variant: 'destructive'
}, {
    label: 'Example',
    variant: 'outline'
}]