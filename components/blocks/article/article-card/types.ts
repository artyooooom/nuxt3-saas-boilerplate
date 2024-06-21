import type { ImageProps, PersonProps } from "../../types";

export interface ArticleCardProps {
    url: string
    heading: string,
    description?: string,
    person?: PersonProps,
    image?: ImageProps,
}