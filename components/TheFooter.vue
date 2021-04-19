<template>
<footer>
    <div class="social">
      <ul>
        <li><a href="">Instagram</a></li>
        <li><a href="">IMDB</a></li>
        <li><a href="">Twitter</a></li>
      </ul>
    </div>
    <div class="copy">
      <span>jeff-lima.com copyright &#174; {{getYear }}</span>
    </div>
  </footer>
</template>

<script>
  export default {
    computed: {
      getYear: () => {
        let date = new Date();
        return date.getFullYear();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .social ul {
    display: flex;

  li {
    padding: 0 10px;
  }
  }
  .copy {
    text-align: center;
  }

</style>
