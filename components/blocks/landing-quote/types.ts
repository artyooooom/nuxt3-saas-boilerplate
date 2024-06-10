import { type ImageProps } from '@/components/blocks/types'

export interface LandingQuoteProps {
    content: string,
    author: string,
    avatar?: ImageProps,
    asideInfo?: string
}