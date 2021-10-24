<template>
  <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/seymen" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24" ><use class="fas fa-bolt"></use></svg>
      </a>
      <span class="text-muted">© 2021 Furkan Selek</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="https://www.instagram.com/furkanselek0/"><svg class="bi" width="24" height="24"><use class="fab fa-instagram"></use></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="https://github.com/maxkonrad/"><svg class="bi" width="24" height="24"><use class="fab fa-github"></use></svg></a></li>
      <li class="ms-3"><a class="text-muted" href="https://twitter.com/furkanselek0"><svg class="bi" width="24" height="24"><use class="fab fa-twitter"></use></svg></a></li>
    </ul>
  </footer>
</div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .text-muted{
        margin: 0 auto;
        display: block;
        width: 3em;
        }
    .nav{
        margin: 0 auto;
        display: block;
    }
}
</style>