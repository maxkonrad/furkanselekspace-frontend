<template>
  <div class="app">
    <vueper-slides progress autoplay lazy-load-on-drag slide-image-inside>
      <vueper-slide
        v-for="banner in banners"
        :key="banner._id"
        :title="banner.title"
        :image="banner.imgSrc"
        transition-speed="250"
      />
    </vueper-slides>
  </div>
</template>

<script>
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  data() {
    return {
      banners: [],
    };
  },
  components: {
    VueperSlides,
    VueperSlide,
  },
  created() {
    this.getBanners();
  },
  methods: {
    getBanners() {
      axios
        .get("http://localhost:5000/banners")
        .then((response) => (this.banners = response.data))
        .catch((error) => {
          this.errors.push(error);
        });
    },
  },
};
</script>

<style>
/* .vueperslide__image {
  transform: scale(1.5) rotate(-10deg);
} */

.vueperslide__title {
  font-size: 7em;
  color: azure;
  opacity: 0.8;
}

@media only screen and (max-width: 600px) {
  .vueperslide__title {
    font-size: 2.3em;
  }
}
</style>
