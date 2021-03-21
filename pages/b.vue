<template>
  <div>b</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    console.log('b', this.$route.params)
  },
})
</script>