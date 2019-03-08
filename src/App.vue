<template>
  <div class="container">
    <header>
      <all-nav></all-nav>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <all-footer></all-footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
