<template>
  <ul>
    <learning-resource
      v-for="item in resource"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :link="item.link"
    />
  </ul>
</template>

<script>
import learningResource from './learningResource.vue'
export default {
  components: {
    learningResource
  },
  inject: ['resource']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
