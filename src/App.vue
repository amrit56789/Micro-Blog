<template>
<div id="app">
    <div class="container">
        <SearchHastag @search-filter="searchQuery = $event" @clear-filter="clearFilter" :selected-hashtag="searchQuery" />
    </div>
    <div class="blog-cards-container">
        <div v-for="post in filteredPosts" :key="post.id">
            <BlogCard :post="post" @like-post="likePost" @hashtag-selected="currentHashtag = $event" />
        </div>
    </div>
</div>
</template>

<script>
import {
    ref,
    computed,
    watch
} from 'vue';
import {
    useMicroblog
} from './components/use-microblog';

import BlogCard from './components/BlogCard.vue';
import SearchHastag from './components/SearchHastag.vue';
import {
    postsData
} from "./components/jsonData/PostData"

export default {
    components: {
        BlogCard,
        SearchHastag
    },
    setup() {
        const {
            posts,
            likePost,
            searchQuery
        } = useMicroblog(ref(postsData));
        const currentHashtag = ref('');

        const allHashtags = computed(() => {
            const tags = new Set();
            posts.value.forEach(post => {
                post.hashtags.forEach(tag => tags.add(tag));
            });
            return Array.from(tags);
        });

        const filteredPosts = computed(() => {
            if (currentHashtag.value) {
                return posts.value.filter(post => post.hashtags.includes(currentHashtag.value));
            } else {
                return posts.value;
            }
        });

        function clearFilter() {
            currentHashtag.value = '';
        }

        watch(currentHashtag, (newVal) => {
            searchQuery.value = newVal;
        });

        return {
            posts,
            likePost,
            searchQuery,
            allHashtags,
            currentHashtag,
            filteredPosts,
            clearFilter
        };
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

}

.container {
    text-align: left;
    margin: 20px 30px;
}

.blog-cards-container {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 3;
    gap: 80px;
    margin: 30px;
}
</style>
