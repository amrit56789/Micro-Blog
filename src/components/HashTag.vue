<template>
    <div>
      <span v-for="hashtag in hashtags" :key="hashtag" @click="filterByHashtag(hashtag)"></span>
    </div>
  </template>
  
  <script>
  export default {
    props: ['hashtags'],
    methods: {
      filterByHashtag(hashtag) {
        this.$emit('hashtag-filter', hashtag);
      },
      selectHashtag(tag) {
      this.$emit('hashtag-selected', tag);
    }
    }
  }
  </script>
  