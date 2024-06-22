import { type ButtonProps, type ImageProps } from "@/components/blocks/types";

export interface LandingSectionProps {
    heading?: string;
    description?: string;
    features?: string[];
    image?: ImageProps;
    buttons?: ButtonProps[];
    filled?: boolean;
    align?: 'left' | 'center' | 'right';
}