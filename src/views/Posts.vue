<template>
<div class="app">
    <search-bar :getText="getData" />
    <post-card v-for="post of filteredBlogs.slice().reverse()" :key="post._id" :creator="post.creator" :content="post.content" :title="post.title" :imgSrc="post.imgSrc" :postId="post._id"/>
    <Footer />
</div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
import SearchBar from '../components/SearchBar.vue'
import axios from 'axios'
import Footer from '@/components/footer.vue'

export default {
  components: { PostCard, SearchBar, Footer},
  created(){
    this.getPosts()
  },
  data() {
    return {
      posts: [],
      search: ''
    }
  },
  methods: {
    getPosts(){
      axios.get('http://localhost:5000/posts')
      .then(response => (this.posts = response.data))
      .catch(error => {
            this.errors.push(error);
          })
    },
    getData(value){
      this.search = value
    }
  },
  computed: {
    filteredBlogs(){
      return this.posts.filter((post) => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>