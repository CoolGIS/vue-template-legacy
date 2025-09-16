import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import Fade from '@/components/_transition/Fade.vue'
import { Center } from '@styled/jsx'
import { css } from '@styled/css'

export default defineComponent(
  () => {
    const counter = useCounterStore()
    const { count } = storeToRefs(counter)
    const { inc } = counter

    return () => (
      <Center h="30vh">
        <button
          class={css({
            h: '10',
            w: '32',
            rounded: 'full',
            bg: 'blue.500',
            color: 'white',
            cursor: 'pointer'
          })}
          onClick={() => inc()}
        >
          count is:&nbsp;
          <Fade mode="out-in">
            <span key={count.value}>{count.value}</span>
          </Fade>
        </button>
      </Center>
    )
  },
  {
    name: 'Counter'
  }
)
