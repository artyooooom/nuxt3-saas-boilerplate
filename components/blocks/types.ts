import { type Props } from '../ui/button/Button.vue';

export interface ButtonProps extends Props {
    label: string;
}

export type NavigationLinkProps = {
    label: string;
    isActive?: boolean;
}

export type LogoProps = {
    type: 'svg' | 'img';
    data: string;
    link?: string;
    alt?: string;
}
