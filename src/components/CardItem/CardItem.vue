<template>
  <div class="ui move up reveal">
    <div class="visible content">
      <CardVisible v-bind="item" />
    </div>
    <div class="hidden content">
      <CardHidden v-bind="item" />
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
};
</script>
