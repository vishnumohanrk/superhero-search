<template>
  <div style="margin: 1.5rem;">
    <div class="ui mini rounded image">
      <img :src="img" :alt="name" @error="imgError" ref="img" />
    </div>
    <p style="margin-top:0.5rem">
      <strong>Place Of Birth: </strong>{{ placeOfBirth }}
    </p>
    <ProgressBar
      v-for="(value, label) in powerstats"
      :label="label"
      :value="Number(value) || 0"
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
    'placeOfBirth',
    'fullName',
    'firstAppearance',
    'publisher',
    'alignment',
    'occupation',
    'groups',
    'img',
  ],

  methods: {
    imgError() {
      return (this.$refs.img.src =
        'https://via.placeholder.com/480x640?text=Image%20Not%20Found');
    },
  },
};
</script>
