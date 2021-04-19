<template>
  <main>

    <div class="content">
      <div class="film" style="width:60%;">
      <h2>Films</h2>
    <ul class="" v-for="film in films" :key="`${film.title}-${film.order}`" >
      <li class="list-item"><nuxt-link :to="`/film/${film.id}`">{{ film.title }}</nuxt-link></li>
    </ul>
    </div>

    <div class="television" style="width: 60%;">
    <h2>Television</h2>
    <ul class="" v-for="show in tvShows" :key="`${show.title}-${show.order}`" >
      <li class="list-item"><nuxt-link :to="`/television/${show.id}`">{{ show.title}}</nuxt-link></li>
    </ul>
    </div>
    </div>
  </main>
</template>

<script>
  import televison from '~/data/televison';
  import film from '~/data/filmography'
  export default {
    data(){
      return{
        films: film.shows,
        tvShows: televison.shows

      }
    }
  }
</script>

<style lang="scss" scoped>
  main {
    font-size: 16px;
    background-size: cover;
    background-position: -75vw;
    height: 100vh;
    @apply bg-no-repeat md:bg-left bg-film;
  }

  .content {
    padding: 0 .5rem;
    padding-top: 80%;
    display: flex;
    //flex-direction: column;
    @media screen and (min-width: 768px) {
      padding-left: 50%;
      padding-top: 15%;
    }

    h2{
      text-decoration: underline;
      color: #fff;
      font-size: 2rem;
    }
  }
  .list-item {
    color: #ffff;
    line-height: 1.5;
    @apply py-1 font-bold;
    &:hover {
      @apply bg-green-800
    }
  }
</style>
