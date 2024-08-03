import { type ButtonProps } from '@/components/blocks/types';

export interface LandingCTAProps {
    heading: string,
    subheading: string,
    buttons?: ButtonProps[],
    filled?: boolean
}