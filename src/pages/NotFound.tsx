import { center } from '@styled/patterns'
import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => (
      <div class={center({ h: '50vh', fontSize: '3xl', fontWeight: 'bold', color: 'red.500' })}>
        页面不存在！
      </div>
    )
  },
  {
    name: 'NotFound'
  }
)
