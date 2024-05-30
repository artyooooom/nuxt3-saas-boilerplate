import { type ButtonProps, type NavigationLinkProps } from '../types';


export default interface LandingHeaderProps {
    appName: string;
    appLogo?: string;
    links: NavigationLinkProps[];
    buttons?: ButtonProps[];
}