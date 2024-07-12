<script setup lang="ts">

    import ArticleCard from '~/components/blocks/article/article-card/ArticleCard.vue';
    import { articles } from '@/data/articles'
    definePageMeta({
        layout: 'default'
    })


</script>

<template>
    <article class="pb-8 pt-20 max-w-screen-xl mx-auto px-4">
        <h1 class="text-4xl tracking-tighter font-extrabold mb-12">All Articles</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <ArticleCard v-for="article in articles" :key="article.url" v-bind="article"/>
        </div>

    </article>
</template>

<style scoped>
.article-contents>* {
    margin: 20px unset;
}

.article-contents>p>a {
    text-decoration: underline;
    font-weight: light;
    color: dodgerblue;
}
</style>