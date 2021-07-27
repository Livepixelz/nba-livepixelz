<template>
  <button class="button button--circle">
    <svg
      aria-hidden="true"
      class="progress"
      width="70"
      height="70"
      viewBox="0 0 70 70"
    >
      <path
        class="progress__circle"
        d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
      ></path>
      <path
        class="progress__path"
        d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
        pathLength="1"
      ></path>
    </svg>
    <span>&plus;</span>
  </button>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 30,
    },
  },
}
</script>
<style scoped>
.button--circle {
  background: none;
  padding: 0;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  width: 100%;
  height: 100%;
  font-family: 'Archivo', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
  position: relative;
}
.button--circle:focus {
  border: none;
  outline: none;
}
.button--circle span {
  position: relative;
  pointer-events: none;
  z-index: 1;
}
.progress {
  position: absolute;
  width: 180px;
  height: 180px;
  top: calc(50% - 90px);
  left: calc(50% - 90px);
  transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
}

.button--circle:hover .progress,
.button--circle.hover .progress {
  transform: scale3d(1.2, 1.2, 1);
}

.progress__circle,
.progress__path {
  fill: rgba(0, 0, 0, 0);
  stroke: transparent;
  stroke-width: 1px;
}

.progress__path {
  stroke: var(--team-color-1);
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1),
    fill 0.4s cubic-bezier(0.7, 0, 0.3, 1) 0.5s;
}
.progress__circle {
  transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1),
    fill 0.4s cubic-bezier(0.7, 0, 0.3, 1) 0.5s;
}

.progress__path:hover,
.progress__path.hover {
  transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1),
    fill 0.1s cubic-bezier(0.7, 0, 0.3, 1);
}

.button--circle:hover .progress__path,
.button--circle.hover .progress__path {
  stroke-dashoffset: 0;
}

.button--circle:hover .progress__circle,
.button--circle.hover .progress__circle {
  fill: transparent;
}

.button--circle:hover span,
.button-.circle.hover span {
  color: var(--team-color-2);
}
</style>
