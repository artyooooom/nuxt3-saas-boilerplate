<script setup lang="ts">

import ArticleContent from '@/components/blocks/article/article-content/ArticleContent.vue'
import notFound from '~/components/blocks/404/notFound.vue'
import { articleValidation } from '@/middleware/articleValidation'
import { articles } from '@/data/articles'

const articleId = useRoute().params.article

const article = articles.find((article) => {
    return article.url === articleId
})

definePageMeta({
    layout: 'default',
    middleware: [articleValidation]
})

const { appName } = useAppConfig()

</script>

<template>

    <article class="pt-12 pb-0 max-w-3xl mx-auto px-4">

        <Breadcrumb v-if="article" class="mb-4">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <a href="/">Home</a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink as-child>
                        <a href="/blog" target="_blank">
                            All Articles
                        </a>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>What's the purpose of having a blog for your SAAS?</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div class="max-w-screen-lg mx-auto mb-8">

            <ArticleContent v-if="article" v-bind="article">
                <div class="article-contents" v-html="article.content"></div>
            </ArticleContent>

            <notFound v-else />
        </div>
        
    </article>
    
</template>

<style>
.article-contents>* {
    margin: 20px 0;
}

.article-contents>*>a {
    text-decoration: underline;
    font-weight: light;
    color: dodgerblue;
}
</style>