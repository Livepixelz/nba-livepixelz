<template>
  <nav class="teams-nav flex bg-gray-900">
    <nuxt-link
      v-for="team of navItemsSortedAZ"
      :key="team.id"
      :to="`/teams/${team.id}`"
      class="nav__item flex-1 p-2"
      :title="team.full_name"
    >
      <img
        svg-inline
        :src="`/icons/logos/teams/${team.abbreviation.toLowerCase()}.svg`"
        class="w-full"
      />
    </nuxt-link>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      navItems: [],
    }
  },
  async fetch() {
    this.navItems = await this.$axios.$get('/teams')
    this.$nuxt.context.store.commit('teams/setTeams', this.navItems)
  },
  computed: {
    navItemsSortedAZ() {
      return [...this.navItems].sort((a, b) =>
        a.full_name < b.full_name ? -1 : 1
      )
    },
  },
}
</script>
