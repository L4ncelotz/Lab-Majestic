<template>
    <div class="htmlClass">
      <h1>{{ title }}</h1>
      <form @submit.prevent="submitForm">  <!-- ใช้ @submit.prevent แทน @click -->
        <input type="text" id="firstName" v-model="firstName" />
        <input type="text" id="secondName" v-model="secondName" />
        <button type="submit" class="submitForm">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputPage',
    data() {
      return {
        title: 'Vue is awesome.',
        firstName: '',
        secondName: '',
      }
    },
    methods: {
      submitForm() {
        this.$emit('submit-form', { firstName: this.firstName, secondName: this.secondName });
      },
    }
  }
  </script>
  