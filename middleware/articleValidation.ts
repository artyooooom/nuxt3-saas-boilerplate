import { articles } from '@/data/articles'

// validation of article url
export let articleValidation = defineNuxtRouteMiddleware((to, from) => {

    const articleId = to.params.article
    const event = useRequestEvent()

    const article = articles.find((article) => {
        return article.url === articleId
    })

    useSeoMeta({
        title: article?.heading,
    })

    if (!event) return abortNavigation()
    if (!article) return setResponseStatus(event, 404)

    return

})