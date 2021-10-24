<template>
<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand text-warning ms-5" href="/"><img src="../assets/rocket.png" width="30" alt="" class="d-inline-block align-text-top"> furkanselek</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto order-0 mb-2 mb-lg-0 me-5">
        <li class="nav-item">
          <a class="nav-link active text-warning" aria-current="page" href="/">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-warning" aria-current="page" href="/posts">POSTS</a>
        </li>
        <router-link to="/about" style="text-decoration: none;" class="nav-item">
          <a class="nav-link active text-warning" aria-current="page" href="#">ABOUT ME</a>
        </router-link>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Ubuntu&display=swap');
.navbar{
  background-color: #511730;
}
.navbar-brand{
  font-family: 'Ubuntu', sans-serif;
}
.navbar-nav{
  font-family: 'Barlow', sans-serif;
}
</style>