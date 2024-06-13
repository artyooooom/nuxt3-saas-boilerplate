import { type LinkProps, type FooterSocialsProps } from '../types'

export interface LandingFooterProps {
    appName: string,
    appLogo?: string | null
    subheading?: string,
    sections: {
        heading: string,
        links: LinkProps[]
    }[],
    socials?: FooterSocialsProps,
}