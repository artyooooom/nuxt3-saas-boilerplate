import { type Props } from '../ui/button/Button.vue';

export interface ButtonProps extends Props {
    title: string,
    link?: {
        url: string,
        target?: '_blank'
    }
}

export type AccordionItemProps = {
    value: string,
    title: string,
    content: string
}

export type PersonProps = {
    name: string,
    description?: string,
    avatar?: ImageProps
}

export type TestimonialProps = {
    person: PersonProps,
    content: string,  
    image?: ImageProps,
}

export type PricingPlanProps = {
    heading: string,
    subheading?: string,
    pricing: string,
    period: string,
    features: string[],
    action: {
        title: string,
        event?: any
    },
    lemonsqueezyId?: number
}

export type LinkProps = {
    title: string;
    url: string;
    isActive?: boolean;
}

export type ImageProps = {
    url: string,
    alt?: string
}

export type LogoProps = {
    type: 'svg' | 'img';
    data: string;
    link?: string;
    alt?: string;
}

export type FooterSocialsProps = {
    twitter?: string,
    instagram?: string,
    linkedin?: string,
    github?: string,
    facebook?: string,
}