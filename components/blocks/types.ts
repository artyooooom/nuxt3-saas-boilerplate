import { type Props } from '../ui/button/Button.vue';

export interface ButtonProps extends Props {
    title: string,
    icon?: {
        name: string,
        color: string,
        size?: string
    },
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
    lemonsqueezyId?: number // imported from lemonsqueezy
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
    twitter?: string | null,
    instagram?: string | null,
    linkedin?: string | null,
    github?: string | null,
    facebook?: string | null,
}

export type FeaturesProps = {
    icon?: string,
    heading: string,
    description: string
}