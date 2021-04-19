<template>
<main>
  <div class="container">
    <p>{{ bio.content }}</p>
  </div>
</main>
</template>

<script>
  import bio from '~/data/bio.json';
  export default {
    data() {
      return {
        bio
      }
    }
  }
</script>

<style lang="scss" scoped>
  main {
  font-size: 16px;
  background: url('@/assets/img/centerImage.png');
  background-size:cover;
  @apply bg-center md:bg-left bg-none lg:bg-about ;

}
.container {
  @apply text-center pt-20 text-green-900;
  margin: 0 auto;
  min-height: 100vh;

  @media screen and (min-width: 768px){
    @apply text-left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  }
}
  p {
    line-height: 2;
    //width: 50%;
    @apply md:w-2/4 px-6;


  }
</style>
