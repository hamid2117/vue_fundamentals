<template>
  <base-card>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title"> Title </label>
        <input type="text" ref="titleInput" name="title" id="title" />
      </div>
      <div class="form-control">
        <label for="description"> Description </label>
        <textarea rows="3" ref="descInput" type="text" name="description" id="description" />
      </div>
      <div class="form-control">
        <label for="link"> Link </label>
        <input type="url" ref="linkInput" name="link" id="link" />
      </div>
      <div>
        <base-button type="submit"> Add Resource </base-button>
      </div>
    </form>
  </base-card>
  <teleport to="body">
    <base-dailog v-if="dailogOpen" :close-dailog="closeDailog" @close="closeDailog">
      <template #default>
        <h1>Please input some value</h1>
      </template>
    </base-dailog>
  </teleport>
</template>

<script>
export default {
  inject: ['setStoredResources'],
  data() {
    return {
      dailogOpen: false
    }
  },
  methods: {
    closeDailog() {
      this.dailogOpen = false
    },
    handleSubmit() {
      //e.preventDefault()
      const titleInput = this.$refs.titleInput.value
      const descInput = this.$refs.descInput.value
      const linkInput = this.$refs.linkInput.value
      const resourceData = {
        id: new Date().toISOString(),
        title: titleInput,
        description: descInput,
        link: linkInput
      }
      if (titleInput.trim() === '' || descInput.trim() === '' || linkInput.trim() === '') {
        this.dailogOpen = true
        return
      }
      this.setStoredResources(resourceData)

      this.$refs.titleInput.value = ''
      this.$refs.descInput.value = ''
      this.$refs.linkInput.value = ''
    }
  }
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
