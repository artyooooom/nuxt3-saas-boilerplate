import { type ButtonProps, type ImageProps } from "../types";

export interface LandingSectionProps {
    header: string;
    description?: string;
    features?: string[];
    image?: ImageProps;
    buttons?: ButtonProps[];
    align: 'left' | 'center' | 'right'
}