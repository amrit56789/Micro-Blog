<template>
  <label for="search">Search HashTag : </label>
    <input v-model="searchTerm" id="search" @input="filterPosts" placeholder="Search hashtags...">
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      filterPosts() {
        this.$emit('search-filter', this.searchTerm);
      }
    }
  }
  </script>

  <style scoped>
  input{
    padding: 5px 10px 5px 3px;
    border: none;
    border-bottom: 2px solid black;
  }
  input:focus{
    outline: none;
  }
  
  </style>
  