<script setup lang="ts">
interface TransitionProps {
  direction?:
    | 'top-reverse'
    | 'top'
    | 'bottom-reverse'
    | 'bottom'
    | 'left-reverse'
    | 'left'
    | 'right-reverse'
    | 'right'
    | 'top-left-reverse'
    | 'top-left'
    | 'top-right-reverse'
    | 'top-right'
    | 'bottom-left-reverse'
    | 'bottom-left'
    | 'bottom-right-reverse'
    | 'bottom-right'
  tag?: string
  appear?: boolean
  duration?: string
  easing?: string
  delay?: string
  translateX?: string
  translateY?: string
  scaleX?: number
  scaleY?: number
}

const {
  direction = 'zoom',
  appear = false,
  duration = '300ms',
  easing = 'ease-in-out',
  delay = '0ms',
  translateX = '100%',
  translateY = '100%',
  scaleX = 0.1,
  scaleY = 0.1
} = defineProps<TransitionProps>()
</script>

<template>
  <TransitionGroup :name="direction" :tag="tag" :appear="appear">
    <slot></slot>
  </TransitionGroup>
</template>

<style scoped>
[class*='-move'],
[class*='-enter-active'],
[class*='-leave-active'] {
  transition:
    transform v-bind(duration) v-bind(easing) v-bind(delay),
    opacity v-bind(duration) v-bind(easing) v-bind(delay);
}

[class*='-enter-from'],
[class*='-leave-to'] {
  opacity: 0;
}

[class*='-leave-active'] {
  position: absolute;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-reverse-enter-from,
.top-reverse-leave-to {
  transform: translate3d(0, calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-enter-from {
  transform: translate3d(0, calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.top-leave-to {
  transform: translate3d(0, v-bind(translateY), 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-reverse-enter-from,
.bottom-reverse-leave-to {
  transform: translate3d(0, v-bind(translateY), 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-enter-from {
  transform: translate3d(0, v-bind(translateY), 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.bottom-leave-to {
  transform: translate3d(0, calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.left-reverse-enter-from,
.left-reverse-leave-to {
  transform: translate3d(calc(v-bind(translateX) * -1), 0, 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.left-enter-from {
  transform: translate3d(calc(v-bind(translateX) * -1), 0, 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.left-leave-to {
  transform: translate3d(v-bind(translateX), 0, 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.right-reverse-enter-from,
.right-reverse-leave-to {
  transform: translate3d(v-bind(translateX), 0, 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.right-enter-from {
  transform: translate3d(v-bind(translateX), 0, 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.right-leave-to {
  transform: translate3d(calc(v-bind(translateX) * -1), 0, 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-left-reverse-enter-from,
.top-left-reverse-leave-to {
  transform: translate3d(calc(v-bind(translateX) * -1), calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-left-enter-from {
  transform: translate3d(calc(v-bind(translateX) * -1), calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.top-left-leave-to {
  transform: translate3d(v-bind(translateX), v-bind(translateY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-right-reverse-enter-from,
.top-right-reverse-leave-to {
  transform: translate3d(v-bind(translateX), calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-right-enter-from {
  transform: translate3d(v-bind(translateX), calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.top-right-leave-to {
  transform: translate3d(calc(v-bind(translateX) * -1), v-bind(translateY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-left-reverse-enter-from,
.bottom-left-reverse-leave-to {
  transform: translate3d(calc(v-bind(translateX) * -1), v-bind(translateY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-left-enter-from {
  transform: translate3d(calc(v-bind(translateX) * -1), v-bind(translateY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.bottom-left-leave-to {
  transform: translate3d(v-bind(translateX), calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-right-reverse-enter-from,
.bottom-right-reverse-leave-to {
  transform: translate3d(v-bind(translateX), v-bind(translateY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-right-enter-from {
  transform: translate3d(v-bind(translateX), v-bind(translateY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.bottom-right-leave-to {
  transform: translate3d(calc(v-bind(translateX) * -1), calc(v-bind(translateY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
</style>
