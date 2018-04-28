<template>
  <div>
    <h2>Items</h2>
    <TodoList
      v-bind:items="items"
      v-on:item-updated="updateItem"
      v-on:item-removed="removeItem">
    </TodoList>
    <TodoItemForm v-on:add-item="addItem"></TodoItemForm>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import TodoList from '../components/TodoList.vue';
import TodoItemForm from '../components/TodoItemForm.vue';

import { Item } from '../models';
import { randomId } from '../utils';

const items: Item[] = [
  { id: randomId(), text: 'ice cream' },
  { id: randomId(), text: 'popcorn' },
  { id: randomId(), text: 'pizza' },
];

export default Vue.extend({
  data() {
    return {
      items,
    }
  },
  methods: {
    addItem(item: Item) {
      const newItem = { ...item, id: randomId() };
      this.items.push(newItem);
    },
    updateItem(item: Item) {
      const index = this.items.findIndex((i) => i.id === item.id);
      this.$set(items, index, item);
    },
    removeItem(id: string) {
      const index = this.items.findIndex((i) => i.id === id);
      this.items.splice(index, 1);
    },
  },
  components: {
    TodoList,
    TodoItemForm,
  },
});
</script>

<style>
  h1 {
    color: blue;
  }
</style>
