<template>
  <div class="home">
    <home-page-carousel />
    <post-card
      v-for="post of posts"
      :key="post._id"
      :creator="post.creator"
      :content="post.content"
      :title="post.title"
      :imgSrc="post.imgSrc"
      :postId="post._id"
    />
    <Footer />
  </div>
</template>

<script>
import HomePageCarousel from "../components/HomePageCarousel.vue";
import PostCard from "../components/PostCard.vue";
import axios from "axios";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    HomePageCarousel,
    PostCard,
    Footer,
  },
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts() {
      axios
        .get("https://furkanselekspace-backend.herokuapp.com/posts/homepage")
        .then((response) => (this.posts = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
    getData(value) {
      console.log(value);
    },
  },
};
</script>
