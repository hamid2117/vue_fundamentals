<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resource')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resources</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import StoredResource from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
  components: {
    StoredResource,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resource',
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
          link: 'https://google.com'
        }
      ]
    }
  },
  provide() {
    return {
      resource: this.storedResources
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>
