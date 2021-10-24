<template>
<div class="input-group rounded">
  <input type="text" class="form-control rounded search-bar" name="msg" v-model="searchItem" placeholder="Blogda arayın..." v-on:keyup.enter="getText(searchItem)" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0  search-bar" id="search-addon">
    <button class="btn" v-on:click="getText(searchItem)"><i class="fab fa-searchengin"></i></button>
  </span>
</div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return { 
      searchItem: ''
    }
  },
  methods: {
    passEvent(){
      this.$emit('search', this.searchItem)
    }
  },
  props: {
    getText: Function,
  }
}
</script>

<style scoped>
.search-bar{
    margin-top: 5%;
    margin-left: 30%;
    margin-right: 30%;
}
.form-control{
    margin-right: 0;
}
@media only screen and (max-width: 600px) {
  .search-bar{
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>