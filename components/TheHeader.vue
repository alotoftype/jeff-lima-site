<template>
  <header class="">
    <nav
      class=" text-center sm:text-left sm:flex md:flex-wrap p-5 md:items-center md:justify-between"
    >
      <div class="logo">
        <NuxtLink to="/"><img src="~/assets/img/Logo.svg" class="logo" alt="Jeff Lima Logo"></NuxtLink>
      </div>
      <ul class="flex flex-col lg:flex-row list-none ml-auto">
        <li class="nav-item"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="nav-item">
          <NuxtLink to="/work">Television / Film</NuxtLink>
        </li>
        <!-- <li class="nav-item">
          <NuxtLink to="/innovative">Innovative Pictures</NuxtLink>
        </li> -->
        <li class="nav-item"><NuxtLink to="/Contact">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "custom-header",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.logo {
  width: 50px;
}
.nav-item {
  @apply font-black text-green-700 px-4;
}
</style>
