<template>
  <form class="ui form" autocomplete="off" @submit.prevent="$emit('submit')">
    <div class="inline field">
      <label for="input">
        <input
          type="text"
          id="input"
          placeholder="Search For SuperHero"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
      </label>
    </div>
    <button type="submit" class="ui button">Search</button>
  </form>
</template>

<script>
export default {
  props: ['value'],
};
</script>
