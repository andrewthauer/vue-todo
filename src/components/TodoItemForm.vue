<template>
  <form v-on:submit.prevent="submit(text)">
    <input type="text" v-model="text" />
    <button type="submit" v-bind:disabled="!isValid">Add</button>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Item } from '../models';

export default Vue.extend({
  data() {
    return {
      text: '',
    }
  },
  computed: {
    isValid(): boolean {
      return !!this.text && this.text.length > 0;
    },
  },
  methods: {
    submit(text: string) {
      const newItem = { text };
      this.$emit('add-item', newItem);
      this.text = '';
    },
  },
})
</script>

<style lang="scss" scoped>
</style>
