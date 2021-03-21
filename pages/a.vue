<template>
  <div>a</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    console.log('a', this)
    console.log('this.$store.state.env.lang', this.$store.state.env.lang)
    console.log('a.route', this.$route.params)
  },
})
</script>