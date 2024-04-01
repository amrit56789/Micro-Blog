<template>
<div class="blog-card">
    <div class="title">
        <h2>{{ post.title }}</h2>
    </div>
    <div class="content">
        <p>{{ post.content }}</p>
    </div>
    <div class="like-button">
        <button @click="$emit('like-post', post.id)">❤️ {{ post.likes }}</button>
        <div class="hashtag">
            <span v-for="hashtag in post.hashtags" :key="hashtag" @click="$emit('hashtag-selected', hashtag)">{{ hashtag }}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['post'],
    emits: ['like-post', 'hashtag-selected']
}
</script>

<style scoped>
.blog-card {
    width: 300px;
    height: 450px;
    border: 2px solid #DADADA;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px 10px 6px #DADADA;

}

.title {
    font-size: 17px;
    padding-bottom: 40px;
    border-bottom: 2px solid #DADADA;
    height: 60px;
}

.content {
    font-size: 0.9rem;
    padding: 0px 12px 18px 12px;
    height: 200px;
    border-bottom: 2px solid #DADADA;
    line-height: 22px;
}

.like-button {
    height: 90px;
    padding: 20px 0;
}

.like-button button {
    border: none;
    cursor: pointer;
    margin-bottom: 6px;
    background-color: #ffffff;

}

span {
    text-decoration: underline;
    font-weight: bold;
    padding: 4px 0px;
    display: block;
    cursor: pointer;
    font-size: 0.9rem;
}

@media only screen and (max-width: 600px) {
    .blog-card {
        width: 100%; 
        height: 400px;
    }

    .title {
        font-size: 16px;
        padding-bottom: 20px;
    }

    .content {
        font-size: 0.8rem; 
        padding: 0px 10px 12px 10px; 
    }

    .like-button {
        height: auto; 
        padding: 10px 0; 
    }

    .like-button button {
        margin-bottom: 4px; 
    }

    span {
        font-size: 0.8rem; 
    }
}

</style>
