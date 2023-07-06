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
</template>

<script>
export default {
  inject: ['setStoredResources'],
  data() {
    return {
      resourceData: {
        title: '',
        description: '',
        link: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      //e.preventDefault()
      const resourceData = {
        id: new Date().toISOString(),
        title: this.$refs.titleInput.value,
        description: this.$refs.descInput.value,
        link: this.$refs.linkInput.value
      }
      this.setStoredResources(resourceData)
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
