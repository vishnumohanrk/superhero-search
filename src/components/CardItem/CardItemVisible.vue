<template>
  <div class="ui card">
    <div class="image">
      <img :src="img" :alt="name" />
    </div>
    <div class="content">
      <p class="header">{{ name }}</p>
      <p class="meta">{{ fullName }}</p>
      <p><strong>Occupation: </strong>{{ occupation }}</p>
      <p><strong>Groups: </strong>{{ groups }}</p>
    </div>
    <div class="extra content">
      <i aria-hidden="true" class="book icon"></i>
      <p>First Appearance: {{ firstAppearance }}</p>
    </div>
  </div>
</template>

<script>
export default {
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
