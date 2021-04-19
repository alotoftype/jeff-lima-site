<template>
  <div>
    <img :src="require(`~/assets/img/television/${show.image}`)" :alt="show.title">
    <h1>{{show.title}}</h1>

    <p><strong>Role:</strong> {{ show.role }}</p>
    <p>{{ show.content}}</p>
    <nuxt-link to="/work" class="return">Back to Filmography</nuxt-link>
  </div>
</template>

<script>
  import tv from "~/data/televison";
  export default {
    data(){
      return {
        show: {}
      }
    },
    created(){
      const show = tv.shows.find((show) => show.id == this.$route.params.id);
      this.show = show;
    }
  }
</script>

<style lang="scss" scoped>

</style>
