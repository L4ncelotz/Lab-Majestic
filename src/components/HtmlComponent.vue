<template>
    <div>
      <p v-if="showText">{{ text }}</p>
      <p v-else>No text</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HtmlComponent',
    props: {
      text: {
        type: String,
        default: 'Default text'
      },
      showText: {
        type: Boolean,
        default: true
      }
    }
  }
  </script>
  