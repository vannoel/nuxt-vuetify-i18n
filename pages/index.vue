<template>
  <div>Index
    <p>{{ $t('hi') }}</p>
    <p>{{ $t('test') }}</p>
    <v-data-table
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    console.log('index', this)
  },
})
</script>