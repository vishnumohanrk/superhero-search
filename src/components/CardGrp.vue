<template>
  <div class="ui centered cards">
    <CardItem v-for="i in data" :item="i" :key="i.id" />
  </div>
</template>

<script>
import CardItem from './CardItem/CardItem';

export default {
  components: {
    CardItem,
  },

  props: ['data'],
};
</script>
