<template>
<label for="search">Search HashTag : </label>
<input v-model="searchTerm" id="search" @input="filterPosts" placeholder="Search hashtags...">
</template>

<script>
import {
    watch
} from 'vue';

export default {
    props: ['selectedHashtag'],
    data() {
        return {
            searchTerm: ''
        };
    },
    methods: {
        filterPosts() {
            this.$emit('search-filter', this.searchTerm);
        }
    },
    mounted() {
        watch(() => this.selectedHashtag, (newVal) => {
            this.searchTerm = newVal;
        }, {
            immediate: true
        });
    },
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
</style>
