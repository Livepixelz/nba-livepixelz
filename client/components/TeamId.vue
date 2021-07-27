<template>
  <section class="id flex-col">
    <dl class="id__line">
      <dt><span v-html="separateLetters('Arena')" /></dt>
      <dd>
        <span v-html="separateLetters(idCard.ARENA)" />
      </dd>
    </dl>
    <dl class="id__line">
      <dt><span v-html="separateLetters('Capacity')" /></dt>
      <dd>
        <span v-html="separateLetters(idCard.ARENACAPACITY)" />
      </dd>
    </dl>
    <dl class="id__line">
      <dt><span v-html="separateLetters('Head Coach')" /></dt>
      <dd>
        <span v-html="separateLetters(idCard.HEADCOACH)" />
      </dd>
    </dl>
    <dl class="id__line">
      <dt><span v-html="separateLetters('General Manager')" /></dt>
      <dd>
        <span v-html="separateLetters(idCard.GENERALMANAGER)" />
      </dd>
    </dl>
    <dl class="id__line">
      <dt><span v-html="separateLetters('Owner')" /></dt>
      <dd>
        <span v-html="separateLetters(idCard.OWNER)" />
      </dd>
    </dl>
    <dl class="id__line">
      <dt><span v-html="separateLetters('Year Founded')" /></dt>
      <dd>
        <span v-html="separateLetters(idCard.YEARFOUNDED)" />
      </dd>
    </dl>
  </section>
</template>

<script>
import { separateLetters } from '~/utils'
export default {
  props: {
    idCard: {
      type: Object,
      required: true,
    },
  },
  methods: {
    separateLetters,
  },
}
</script>
