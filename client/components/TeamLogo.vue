<template>
  <img
    svg-inline
    :src="`/icons/logos/teams/${teamAbbr}.svg`"
    :width="size"
    :height="size"
  />
</template>
<script>
export default {
  props: {
    teamAbbr: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 240,
    },
  },
}
</script>
