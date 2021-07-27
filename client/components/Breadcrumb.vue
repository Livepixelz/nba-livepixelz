<template>
  <ol class="breadcrumb">
    <li v-for="(link, index) in links" :key="index" class="breadcrumb__item">
      <nuxt-link v-if="link.href" :to="link.href">{{ link.title }}</nuxt-link>
      <span v-else>{{ link.title }}</span>
    </li>
  </ol>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
