<template>
  <div class="login">
    <h1>{{ headline }}</h1>
    <p>Hello</p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      headline: 'Login'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: red
  }
</style>
