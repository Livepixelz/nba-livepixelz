<template>
  <img
    svg-inline
    :src="`/icons/logos/teams/${teamAbbr}.svg`"
    width="240"
    height="240"
  />
</template>
<script>
export default {
  props: {
    teamAbbr: {
      type: String,
      required: true,
    },
  },
}
</script>
