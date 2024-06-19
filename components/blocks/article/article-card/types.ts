import type { ImageProps, PersonProps } from "../../types";

export interface ArticleCardProps {
    url: string
    heading: string,
    description?: string,
    author?: PersonProps,
    image?: ImageProps,
}