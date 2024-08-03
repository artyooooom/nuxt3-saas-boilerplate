import { type ButtonProps, type ImageProps, type LinkProps, type FeatureProps } from "@/components/blocks/types";

export interface LandingSectionProps {
    tagline?: string;
    heading?: string;
    description?: string;
    links?: LinkProps[];
    buttons?: ButtonProps[];
    secondBlock?: ImageProps | FeatureProps[];
    filled?: boolean;
    align?: 'left' | 'center' | 'right';
}