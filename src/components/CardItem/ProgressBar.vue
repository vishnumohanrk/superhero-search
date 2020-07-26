<template>
  <div class="ui green active progress" :data-percent="value">
    <div class="bar" :style="{ width: value + '%' }">
      <div class="progress">{{ value }} %</div>
    </div>
    <p class="label">{{ label }}</p>
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
};
</script>
