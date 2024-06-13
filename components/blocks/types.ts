import { type Props } from '../ui/button/Button.vue';

export interface ButtonProps extends Props {
    label: string,
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

export type TestimonialProps = {
    name: string,
    tag?: string,
    content: string,  
    img?: ImageProps,
    avatar?: ImageProps,
}

export type PricingPlanProps = {
    heading: string,
    subheading?: string,
    pricing: string,
    period: string,
    features: string[],
    action: string
}

export type LinkProps = {
    label: string;
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