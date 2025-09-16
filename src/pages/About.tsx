import { center } from '@styled/patterns'
import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => (
      <div class={center({ h: '50vh', fontSize: '3xl', fontWeight: 'bold', color: 'gray.500' })}>
        关于
      </div>
    )
  },
  {
    name: 'About'
  }
)
