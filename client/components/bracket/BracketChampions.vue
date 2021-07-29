<template>
  <header class="bracket-champions bracket-header">
    <div class="champions">
      <div class="champions-header">
        <team-logo
          :team-abbr="champions.abbr.toLowerCase()"
          :size="96"
          class="xl:w-32"
        />
        <h3 class="text-white">
          <span class="block text-sm">{{ champions.city }}</span
          ><span class="block uppercase font-bold">{{
            champions.nickname
          }}</span>
        </h3>
      </div>
      <div class="champions-text">
        <p class="text-xl text-white font-bold">2021 NBA CHAMPIONS</p>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    champions: {
      type: Object,
      required: true,
    },
  },
}
</script>
