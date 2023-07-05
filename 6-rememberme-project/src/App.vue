<template>
  <div>
    <base-header title="Remember Me" />
  </div>
  <stored-resource :resource="storedResources" />
</template>
<script>
import StoredResource from './components/learning-resource/StoredResources.vue'
import BaseHeader from './components/layouts/TheHeader.vue'
export default {
  components: {
    StoredResource,
    BaseHeader
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
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
