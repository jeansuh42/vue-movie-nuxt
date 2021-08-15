<template>
  <footer>
    <Logo />
    <a
      href="https://jeansuh42.github.io/"
      targer="_blank">
      <!-- (c) {{ new Date().getFullYear }}jeansuh42 -->
      (c) {{ thisYear }} {{ name }}
    </a>
  </footer>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  components: {
    Logo
  },
  computed: {
    thisYear() {
      return new Date().getFullYear()
    },
    name() {
      return this.$store.state.about.name
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>