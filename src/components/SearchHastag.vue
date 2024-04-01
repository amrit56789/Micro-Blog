<template>
<div>
    <div>
        <label for="search">Search HashTag : </label>
        <input v-model="searchTerm" id="search" @input="filterPosts" placeholder="Search hashtags...">
    </div>
    <div>
        <span v-for="hashtag in hashtags" :key="hashtag" @click="filterByHashtag(hashtag)">{{ hashtag }}</span>
    </div>
</div>
</template>

<script>
export default {
    props: ['selectedHashtag', 'hashtags'],
    data() {
        return {
            searchTerm: ''
        };
    },
    methods: {
        filterPosts() {
            this.$emit('search-filter', this.searchTerm);
        },
        filterByHashtag(hashtag) {
            this.searchTerm = hashtag;
            this.$emit('hashtag-filter', hashtag);
        }
    },
    watch: {
        selectedHashtag: {
            immediate: true,
            handler(newVal) {
                this.searchTerm = newVal;
            }
        },
        searchTerm() {
            this.filterPosts();
        }
    }
}
</script>

<style scoped>
input {
    padding: 5px 10px 5px 3px;
    border: none;
    border-bottom: 2px solid black;
}

input:focus {
    outline: none;
}

span {
    cursor: pointer;
    margin-right: 10px;
}
</style>
