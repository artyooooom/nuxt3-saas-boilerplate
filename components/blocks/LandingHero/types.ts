import type { HTMLAttributes } from 'vue';
import { type PrimitiveProps } from 'radix-vue';
import { type ButtonVariants } from '@/components/ui/button';

interface ButtonProps extends PrimitiveProps {
    label: string;
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
    icon?: string;
}

interface ImageProps {
    url: string;
    alt?: string;
}

export interface LandingHeroProps {
    header?: string;
    description?: string;
    image?: ImageProps;
    buttons?: ButtonProps[];
}