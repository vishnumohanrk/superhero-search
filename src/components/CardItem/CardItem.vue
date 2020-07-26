<template>
  <div style="margin:1.25rem">
    <div :class="`ui card ${color}`">
      <div class="ui move up reveal">
        <div class="ui visible content">
          <CardVisible v-bind="item" />
        </div>
        <div class="ui hidden content">
          <CardHidden v-bind="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardVisible from './CardItemVisible';
import CardHidden from './CardItemHidden';

export default {
  components: {
    CardVisible,
    CardHidden,
  },

  props: ['item'],

  computed: {
    color() {
      switch (this.item.alignment) {
        case 'bad':
          return 'red';
        case 'good':
          return 'green';
        default:
          return 'blue';
      }
    },
  },
};
</script>
