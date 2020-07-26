<template>
  <div class="ui card">
    <div class="ui mini rounded image">
      <img :src="img" :alt="name" />
    </div>
    <ProgressBar
      v-for="(value, label) in powerstats"
      :label="label"
      :value="value"
      :key="label"
    />
    <p><strong>Alignment: </strong>{{ alignment }}</p>
    <p><strong>Publisher: </strong>{{ publisher }}</p>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar';

export default {
  components: {
    ProgressBar,
  },

  props: [
    'id',
    'name',
    'powerstats',
    'fullName',
    'firstAppearance',
    'publisher',
    'alignment',
    'occupation',
    'groups',
    'img',
  ],
};
</script>
