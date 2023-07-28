<template>
  <base-card>
    <base-button :mode="storedResourceBtn" @click="setSelectedTab('stored-resource')"
      >Stored Resources</base-button
    >
    <base-button :mode="addResourceBtn" @click="setSelectedTab('add-resource')"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
<script>
import StoredResource from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default {
  components: {
    StoredResource,
    AddResource
  },
  computed: {
    storedResourceBtn() {
      return this.selectedTab === 'stored-resource' ? null : 'flat'
    },
    addResourceBtn() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
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
      resource: this.storedResources,
      setStoredResources: this.setStoredResources,
      deleteResource: this.deleteResource
    }
  },
  methods: {
    deleteResource(id) {
      const resourceIndex = this.storedResources.findIndex((data) => {
        return data.id === id
      })
      this.storedResources.splice(resourceIndex, 1)
    },
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    setStoredResources(data) {
      this.storedResources.unshift(data)
      this.selectedTab = 'stored-resource'
    }
  }
}
</script>
