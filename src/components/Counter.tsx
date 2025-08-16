import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import Fade from '@/components/_transition/Fade.vue'

export default defineComponent(
  () => {
    const counter = useCounterStore()
    const { count } = storeToRefs(counter)
    const { inc } = counter

    return () => (
      <div class="center h-[30vh]">
        <button class="h-10 w-32 rounded-full bg-blue-500 text-white" onClick={() => inc()}>
          count is:&nbsp;
          <Fade mode="out-in">
            <span key={count.value}>{count.value}</span>
          </Fade>
        </button>
      </div>
    )
  },
  {
    name: 'Counter'
  }
)
