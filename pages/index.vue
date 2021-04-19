<template>
<main>
  <div class="container">
    <h2>Jeff Lima</h2>
    <div>
    <p>Actor • Producer • Entrepenur</p>
    </div>
  </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang=scss scoped>
main {
  font-size: 16px;
  background: url('@/assets/img/centerImage.png');
  background-size:cover;
  @apply bg-center md:bg-left;

}
.container {
  @apply text-center pt-20;
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
h2 {
  @apply text-5xl text-green-800;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
