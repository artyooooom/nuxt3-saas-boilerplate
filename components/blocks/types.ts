import { type Props } from '../ui/button/Button.vue';

export interface ButtonProps extends Props {
    label: string;
}

export type TestimonialProps = {
    name: string,
    tag?: string,
    content: string,  
    img?: ImageProps,
    avatar?: ImageProps,
}

export type NavigationLinkProps = {
    label: string;
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
