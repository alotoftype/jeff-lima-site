<template>
  <div>
    <img :src="require(`~/assets/img/film/${film.image}`)" :alt="film.title">
    <h1>{{film.title}}</h1>

    <p><strong>Role:</strong> {{ film.role }}</p>
    <p>{{ film.content}}</p>
    <nuxt-link to="/work" class="return">Back to Filmography</nuxt-link>
  </div>
</template>

<script>
  import films from "~/data/filmography"
  export default {
    data(){
      return {
        film: {}
      }
    },
    created(){
      const film = films.shows.find((film) => film.id == this.$route.params.id);
      this.film = film;
    }
  }
</script>

<style lang="scss" scoped>
  .return {
    color: red;
  }
</style>
