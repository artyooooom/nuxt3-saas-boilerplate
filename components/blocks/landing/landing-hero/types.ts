import { type ButtonProps, type ImageProps } from '@/components/blocks/types';

export interface LandingHeroProps {
    heading?: {
        title: string;
        styling?: number
    }
    description?: { 
        title: string;
        styling?: number
    }
    image?: ImageProps;
    buttons?: ButtonProps[];
    alreadyUsing?: {
        images: ImageProps[],
        showStars?: boolean,
        description?: string
    };
    align?: 'left' | 'center';
}