import type { ImageProps, PersonProps } from "../../types";

export interface ArticleContentProps {
    heading: string,
    image: ImageProps,
    person?: PersonProps
}