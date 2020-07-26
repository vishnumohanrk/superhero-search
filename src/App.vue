<template>
  <div class="ui center aligned container" id="container">
    <BaseHeader />
    <InputForm v-model="value" @submit="submit" />
    <p>{{ txt }}</p>
    <BaseLoader v-if="loading" />
    <CardGroup v-if="data.length" :data="data" />
    <BaseFooter />
  </div>
</template>

<script>
import APIResp from './utils/APIResp';
import InputForm from './components/InputForm';
import BaseHeader from './components/BaseComp/BaseHeader';
import BaseFooter from './components/BaseComp/BaseFooter';
import BaseLoader from './components/BaseComp/Loader';
import CardGroup from './components/CardGrp';

export default {
  components: {
    InputForm,
    BaseHeader,
    BaseFooter,
    CardGroup,
    BaseLoader,
  },

  data() {
    return {
      value: '',
      txt: 'Search To See',
      loading: false,
      data: [],
    };
  },

  methods: {
    submit() {
      this.loading = true;
      this.txt = `You Searched for ${this.value}. Hover to reveal`;
      APIResp(this.value)
        .then(res => {
          if (!res.error) {
            return (this.data = res);
          }
          this.data = [];
          return (this.txt = `Check the search term. Try hyphen instead of space something like that.`);
        })
        .finally(() => (this.loading = false));
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
