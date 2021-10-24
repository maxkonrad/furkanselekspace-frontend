<template>
  <div class="card mx-auto my-5">
  <img :src=imgSrc class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{content}}</p>
    <strong class="card-text">{{creator}}</strong> 
    <a :href="'/posts/' + postId" class="btn btn-primary mx-5">Git</a>
  </div>
</div>
</template>

<script>
export default {
  props: {
    creator: String,
    content: String,
    title: String,
    imgSrc: String,
    postId: Number,
  }


}
</script>

<style scoped>
.card-text{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card{
  width: 30rem;
}
@media only screen and (max-width: 600px){
  .card {
    width: 100%
  }
  }
</style>