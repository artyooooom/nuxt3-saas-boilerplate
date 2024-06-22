import { type ButtonProps, type ImageProps } from '@/components/blocks/types';

export interface LandingHeroProps {
    header?: string;
    description?: string;
    image?: ImageProps;
    buttons?: ButtonProps[];
    alreadyUsing?: {
        images: ImageProps[],
        showStars?: boolean,
        description?: string
    };
    align?: 'left' | 'center';
}