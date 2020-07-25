<template>
  <div class="ui center aligned container" id="container">
    <BaseHeader />
    <InputForm v-model="value" @submit="submit" />
    <p>{{ txt }}</p>
    <BaseFooter />
  </div>
</template>

<script>
import InputForm from './components/InputForm';
import BaseHeader from './components/BaseComp/BaseHeader';
import BaseFooter from './components/BaseComp/BaseFooter';

export default {
  components: {
    InputForm,
    BaseHeader,
    BaseFooter,
  },

  data() {
    return {
      value: '',
      txt: 'Search To See',
    };
  },

  methods: {
    submit() {
      this.txt = `You Searched for ${this.value}`;
      this.value = '';
    },
  },
};
</script>

<style scoped>
#container {
  margin-top: 1.5rem;
}

p {
  margin-top: 1.25rem;
}
</style>
