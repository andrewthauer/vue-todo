<template>
  <div>
    <span v-bind:html="text" v-if="!editing">{{ text }}</span>
    <input type="text"
      v-focus
      v-if="editing"
      v-model="inputText"
      v-bind:class="{ invalid: !isValid }"
      v-on:keyup.enter="commit"
      v-on:keyup.esc="cancel"
    /> -
    <span role="button" v-on:click="edit" v-on:keyup.enter="edit" tabindex="0">edit</span> |
    <span role="button" v-on:click="remove" v-on:keyup.enter="remove" tabindex="0">remove</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { isTextValid } from '../utils';

export default Vue.extend({
  props: {
    id: { type: String },
    text: { type: String },
  },
  data() {
    return {
      editing: false,
      inputText: this.text,
    }
  },
  computed: {
    isValid(): boolean {
      return isTextValid(this.inputText);
    },
  },
  methods: {
    edit() {
      this.inputText = this.text;
      this.editing = true;
    },
    cancel() {
      this.editing = false;
      this.inputText = this.text;
    },
    commit() {
      if (!this.isValid) { return; }
      this.$emit('item-updated', { id: this.id, text: this.inputText });
      this.editing = false;
    },
    remove() {
      this.$emit('item-removed', this.id);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
