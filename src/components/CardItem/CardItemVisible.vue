<template>
  <div class="ui card">
    <div class="image">
      <img :src="img" :alt="name" @error="imgError" ref="img" />
    </div>
    <div class="content">
      <div class="header">{{ name }}</div>
      <div class="meta">{{ fullName }}</div>
      <div style="margin-top:1rem">
        <p><strong>Occupation: </strong>{{ occupation }}</p>
        <p><strong>Groups: </strong>{{ groups }}</p>
      </div>
    </div>
    <div class="extra content">
      <i aria-hidden="true" class="book icon"></i>
      First Appearance: {{ firstAppearance }}
    </div>
  </div>
</template>

<script>
export default {
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
