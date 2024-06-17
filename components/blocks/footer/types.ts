import { type LinkProps, type FooterSocialsProps } from '../types'

export interface FooterProps {
    appName: string,
    appLogo?: string | null
    subheading?: string,
    sections: {
        heading: string,
        links: LinkProps[]
    }[],
    socials?: FooterSocialsProps,
}