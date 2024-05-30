import { type ButtonProps } from '../types';

type ImageProps = {
    url: string;
    alt?: string;
}

export interface LandingHeroProps {
    header?: string;
    description?: string;
    image?: ImageProps;
    buttons?: ButtonProps[];
}