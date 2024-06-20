<script setup lang="ts">

    import ArticleCard from '~/components/blocks/article/article-card/ArticleCard.vue';
    
    definePageMeta({
        layout: 'default'
    })


    // here set up your articles that should be showing on "All Articles" page
    const articles = [
        {
            url: '/blog/article-example-page',
            heading: "What's the purpose of having a blog for your SAAS?",
            description: `Daniel Day, widely known as Dapper Dan, was born in Harlem, New York, in 1944. Described as a "natural
                born hustler," Dan's diverse passions spanned fashion, journalism, and gambling. In the late 1960s, Dan
                worked for the Harlem-based newspaper Forty Acres and a Mule, where he wrote commentaries on topics
                ranging from gentrification to pop culture.`,
            image: {
                url: '/images/bg.jpeg'
            },
            author: {
                name: 'Big L',
                description: "December 23, 2023",
                avatar: {
                    url: '/images/avatar.jpeg'
                }
            }
        },
    ]

</script>

<template>
    <article class="pt-32 max-w-screen-xl mx-auto px-4">
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