import { type ButtonProps, type LinkProps } from '../types';


export default interface LandingHeaderProps {
    appName: string;
    appLogo?: string | null;
    links: LinkProps[];
    buttons?: ButtonProps[];
}