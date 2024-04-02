import { ref, computed } from 'vue';

export function useMicroblog(postsData) {
  const posts = ref(postsData);
  const searchQuery = ref('');

  function likePost(id) {
    const post = posts.value.find(p => p.id === id);
    if (post) {
      post.likes += 1;
    }
  }

  function filterByHashtag(hashtag) {
    return posts.value.filter(p => 
      p.hashtags.map(tag => tag.trim().toLowerCase()).includes(hashtag.toLowerCase())
    );
  }

  const filteredPosts = computed(() => {
    if (!searchQuery.value) {
      return posts.value;
    }

    const lowercaseQuery = searchQuery.value.toLowerCase().trim();
    return posts.value.filter(post => 
      post.hashtags.some(tag => tag.toLowerCase().trim().includes(lowercaseQuery))
    );

  });

  return { posts: filteredPosts, likePost, filterByHashtag, searchQuery };
}
