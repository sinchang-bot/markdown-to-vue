<template>
  <div id="app">
    <readme></readme>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Readme from '../README.md'

console.log(Readme);


export default Vue.extend({
  data() {
    return {
      msg: 'World'
    }
  },
  components: {
    Readme
  }
})
</script>

