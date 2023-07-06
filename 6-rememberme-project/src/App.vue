<template>
  <div>
    <base-header title="Remember Me" />
  </div>
  <the-resource />
</template>
<script>
import BaseHeader from './components/layouts/TheHeader.vue'
import TheResource from './components/learning-resource/TheResource.vue'

export default {
  components: {
    TheResource,
    BaseHeader
  },
  data() {
    return {
      selectedTab: 'stored-resources'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
