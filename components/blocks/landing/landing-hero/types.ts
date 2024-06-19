import { type ButtonProps, type ImageProps } from '../types';

export interface LandingHeroProps {
    header?: string;
    description?: string;
    image?: ImageProps;
    buttons?: ButtonProps[];
}