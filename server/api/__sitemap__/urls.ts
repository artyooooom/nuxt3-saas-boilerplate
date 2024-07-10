// https://nuxtseo.com/sitemap/guides/dynamic-urls
import { articles } from '@/data/articles'

export default defineSitemapEventHandler(() => {
    const urls = articles.map((article) => {
        return { loc: `/blog/${article.url}` }
    })

    return urls
})