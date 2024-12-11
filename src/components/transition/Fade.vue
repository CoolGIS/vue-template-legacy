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
  mode?: 'out-in' | 'in-out'
  appear?: boolean
  duration?: string
  easing?: string
  delay?: string
  offsetX?: string
  offsetY?: string
}

const {
  direction = 'fade',
  appear = false,
  duration = '350ms',
  easing = 'ease-in-out',
  delay = '0ms',
  offsetX = '100%',
  offsetY = '100%'
} = defineProps<TransitionProps>()
</script>

<template>
  <Transition :name="direction" :mode="mode" :appear="appear">
    <slot></slot>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind(duration) v-bind(easing) v-bind(delay);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.top-reverse-enter-active,
.top-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-reverse-enter-from,
.top-reverse-leave-to {
  opacity: 0;
  transform: translate3d(0, calc(v-bind(offsetY) * -1), 0);
}

.top-enter-active,
.top-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-enter-from {
  opacity: 0;
  transform: translate3d(0, calc(v-bind(offsetY) * -1), 0) scale3d(0.3, 0.3, 0.3);
}
.top-leave-to {
  opacity: 0;
  transform: translate3d(0, v-bind(offsetY), 0) scale3d(0.3, 0.3, 0.3);
}

.bottom-reverse-enter-active,
.bottom-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-reverse-enter-from,
.bottom-reverse-leave-to {
  opacity: 0;
  transform: translate3d(0, v-bind(offsetY), 0);
}

.bottom-enter-active,
.bottom-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-enter-from {
  opacity: 0;
  transform: translate3d(0, v-bind(offsetY), 0);
}
.bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, calc(v-bind(offsetY) * -1), 0);
}

.left-reverse-enter-active,
.left-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.left-reverse-enter-from,
.left-reverse-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), 0, 0);
}

.left-enter-active,
.left-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.left-enter-from {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), 0, 0);
}
.left-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), 0, 0);
}

.right-reverse-enter-active,
.right-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.right-reverse-enter-from,
.right-reverse-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), 0, 0);
}

.right-enter-active,
.right-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.right-enter-from {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), 0, 0);
}
.right-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), 0, 0);
}

.top-left-reverse-enter-active,
.top-left-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-left-reverse-enter-from,
.top-left-reverse-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), calc(v-bind(offsetY) * -1), 0);
}

.top-left-enter-active,
.top-left-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-left-enter-from {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), calc(v-bind(offsetY) * -1), 0);
}
.top-left-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), v-bind(offsetY), 0);
}

.top-right-reverse-enter-active,
.top-right-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-right-reverse-enter-from,
.top-right-reverse-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), calc(v-bind(offsetY) * -1), 0);
}

.top-right-enter-active,
.top-right-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-right-enter-from {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), calc(v-bind(offsetY) * -1), 0);
}
.top-right-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), v-bind(offsetY), 0);
}

.bottom-left-reverse-enter-active,
.bottom-left-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-left-reverse-enter-from,
.bottom-left-reverse-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), v-bind(offsetY), 0);
}

.bottom-left-enter-active,
.bottom-left-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-left-enter-from {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), v-bind(offsetY), 0);
}
.bottom-left-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), calc(v-bind(offsetY) * -1), 0);
}

.bottom-right-reverse-enter-active,
.bottom-right-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-right-reverse-enter-from,
.bottom-right-reverse-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), v-bind(offsetY), 0);
}

.bottom-right-enter-active,
.bottom-right-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-right-enter-from {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), v-bind(offsetY), 0);
}
.bottom-right-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), calc(v-bind(offsetY) * -1), 0);
}
</style>
