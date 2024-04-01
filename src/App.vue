<template>
<div id="app">
    <div class="container">
        <SearchHastag @search-filter="searchQuery = $event" />
        <HashTag :hashtags="allHashtags" @hashtag-filter="currentHashtag = $event" />
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
    computed
} from 'vue';
import {
    useMicroblog
} from './components/use-microblog';
import BlogCard from './components/BlogCard.vue';
import HashTag from './components/HashTag.vue';
import SearchHastag from './components/SearchHastag.vue';
import {
    postsData
} from "./PostData"

export default {
    components: {
        HashTag,
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

        return {
            posts,
            likePost,
            searchQuery,
            allHashtags,
            currentHashtag,
            filteredPosts
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
    margin-left: 60px;

}

.container {
    text-align: left;
    margin: 20px 0;
}

.blog-cards-container {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 3;
    gap: 80px;
    margin-bottom: 50px;
}
</style>
