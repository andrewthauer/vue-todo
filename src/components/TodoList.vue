<template>
  <div v-if="hasItems">
    <ul v-for="(item) in items" v-bind:key="item.id">
      <li>
        <TodoListItem
          v-bind="item"
          v-on:item-updated="itemUpdated"
          v-on:item-removed="itemRemoved">
        </TodoListItem>
      </li>
    </ul>
  </div>
  <div v-else>
    No Items - Add Some!
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Item } from '../models';
import TodoListItem from './TodoListItem.vue';

export default Vue.extend({
  props: {
    items: { type: Array } as PropOptions<Item[]>,
  },
  computed: {
    hasItems(): boolean {
      return this.items && this.items.length > 0;
    },
  },
  methods: {
    itemUpdated(item: Item) {
      this.$emit('item-updated', item);
    },
    itemRemoved(id: string) {
      this.$emit('item-removed', id);
    },
  },
  components: {
    TodoListItem,
  },
})
</script>

<style lang="scss" scoped>
</style>
