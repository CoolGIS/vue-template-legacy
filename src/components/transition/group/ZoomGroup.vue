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
  offsetX?: string
  offsetY?: string
  scaleX?: number
  scaleY?: number
}

const {
  direction = 'zoom',
  appear = false,
  duration = '350ms',
  easing = 'ease-in-out',
  delay = '0ms',
  offsetX = '100%',
  offsetY = '100%',
  scaleX = 0.1,
  scaleY = 0.1
} = defineProps<TransitionProps>()
</script>

<template>
  <TransitionGroup :name="direction" :tag="tag" :appear="appear">
    <slot></slot>
  </TransitionGroup>
</template>

<style>
.zoom-move,
.zoom-enter-active,
.zoom-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.zoom-leave-active {
  position: absolute;
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-reverse-move,
.top-reverse-enter-active,
.top-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-reverse-leave-active {
  position: absolute;
}
.top-reverse-enter-from,
.top-reverse-leave-to {
  opacity: 0;
  transform: translate3d(0, calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-move,
.top-enter-active,
.top-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-leave-active {
  position: absolute;
}
.top-enter-from {
  opacity: 0;
  transform: translate3d(0, calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.top-leave-to {
  opacity: 0;
  transform: translate3d(0, v-bind(offsetY), 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-reverse-move,
.bottom-reverse-enter-active,
.bottom-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-reverse-leave-active {
  position: absolute;
}
.bottom-reverse-enter-from,
.bottom-reverse-leave-to {
  opacity: 0;
  transform: translate3d(0, v-bind(offsetY), 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-move,
.bottom-enter-active,
.bottom-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-leave-active {
  position: absolute;
}
.bottom-enter-from {
  opacity: 0;
  transform: translate3d(0, v-bind(offsetY), 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.left-reverse-move,
.left-reverse-enter-active,
.left-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.left-reverse-leave-active {
  position: absolute;
}
.left-reverse-enter-from,
.left-reverse-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), 0, 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.left-move,
.left-enter-active,
.left-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.left-leave-active {
  position: absolute;
}
.left-enter-from {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), 0, 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.left-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), 0, 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.right-reverse-move,
.right-reverse-enter-active,
.right-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.right-reverse-leave-active {
  position: absolute;
}
.right-reverse-enter-from,
.right-reverse-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), 0, 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.right-move,
.right-enter-active,
.right-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.right-leave-active {
  position: absolute;
}
.right-enter-from {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), 0, 0) scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.right-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), 0, 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-left-reverse-move,
.top-left-reverse-enter-active,
.top-left-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-left-reverse-leave-active {
  position: absolute;
}
.top-left-reverse-enter-from,
.top-left-reverse-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-left-move,
.top-left-enter-active,
.top-left-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-left-leave-active {
  position: absolute;
}
.top-left-enter-from {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.top-left-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), v-bind(offsetY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-right-reverse-move,
.top-right-reverse-enter-active,
.top-right-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-right-reverse-leave-active {
  position: absolute;
}
.top-right-reverse-enter-from,
.top-right-reverse-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.top-right-move,
.top-right-enter-active,
.top-right-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.top-right-leave-active {
  position: absolute;
}
.top-right-enter-from {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.top-right-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), v-bind(offsetY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-left-reverse-move,
.bottom-left-reverse-enter-active,
.bottom-left-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-left-reverse-leave-active {
  position: absolute;
}
.bottom-left-reverse-enter-from,
.bottom-left-reverse-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), v-bind(offsetY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-left-move,
.bottom-left-enter-active,
.bottom-left-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-left-leave-active {
  position: absolute;
}
.bottom-left-enter-from {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), v-bind(offsetY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.bottom-left-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-right-reverse-move,
.bottom-right-reverse-enter-active,
.bottom-right-reverse-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-right-reverse-leave-active {
  position: absolute;
}
.bottom-right-reverse-enter-from,
.bottom-right-reverse-leave-to {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), v-bind(offsetY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}

.bottom-right-move,
.bottom-right-enter-active,
.bottom-right-leave-active {
  transition: all v-bind(duration) v-bind(easing) v-bind(delay);
}
.bottom-right-leave-active {
  position: absolute;
}
.bottom-right-enter-from {
  opacity: 0;
  transform: translate3d(v-bind(offsetX), v-bind(offsetY), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
.bottom-right-leave-to {
  opacity: 0;
  transform: translate3d(calc(v-bind(offsetX) * -1), calc(v-bind(offsetY) * -1), 0)
    scale3d(v-bind(scaleX), v-bind(scaleY), 0);
}
</style>
