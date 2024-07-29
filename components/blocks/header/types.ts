import { type ButtonProps, type LinkProps } from '../types';


export default interface HeaderProps {
    appName: string;
    appLogo?: string | null;
    links: LinkProps[];
    buttons?: ButtonProps[];
    announcement?: {
        title?: string,
        backgroundClass?: string
        link?: string
    };
}