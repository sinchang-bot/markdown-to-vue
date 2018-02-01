<template>
  <div id="app">
    <readme></readme>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Readme from '../README.md'

export default Vue.extend({
  components: {
    Readme
  }
})
</script>

