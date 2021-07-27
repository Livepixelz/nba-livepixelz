<template>
  <section class="id">
    <div class="w-1/2">
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Birthdate')" />
        </dt>
        <dd>
          <span v-html="separateLetters(idCard.BIRTHDATE)" />
        </dd>
      </dl>
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Country')" />
        </dt>
        <dd>
          <span v-html="separateLetters(idCard.COUNTRY)" />
        </dd>
      </dl>
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Draft')" />
        </dt>
        <dd>
          <span
            v-html="
              separateLetters(idCard.DRAFT_YEAR + ' - ' + idCard.DRAFT_ROUND)
            "
          />
        </dd>
      </dl>
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Height - Weight')" />
        </dt>
        <dd>
          <span
            v-html="separateLetters(idCard.HEIGHT + ' - ' + idCard.WEIGHT)"
          />
        </dd>
      </dl>
    </div>
    <div class="w-1/2">
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Team Name')" />
        </dt>
        <dd>
          <span
            v-html="separateLetters(idCard.TEAM_CITY + ' ' + idCard.TEAM_NAME)"
          />
        </dd>
      </dl>
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Years')" />
        </dt>
        <dd>
          <span
            v-html="separateLetters(idCard.FROM_YEAR + ' / ' + idCard.TO_YEAR)"
          />
        </dd>
      </dl>
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Position')" />
        </dt>
        <dd>
          <span v-html="separateLetters(idCard.POSITION)" />
        </dd>
      </dl>
      <dl class="id__line">
        <dt>
          <span v-html="separateLetters('Seasons')" />
        </dt>
        <dd>
          <span v-html="separateLetters(idCard.SEASON_EXP)" />
        </dd>
      </dl>
    </div>
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
