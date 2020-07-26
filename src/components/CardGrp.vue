<template>
  <div id="group" class="ui centered cards">
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

<style scoped>
#group {
  margin-top: 1.5rem;
}
</style>
