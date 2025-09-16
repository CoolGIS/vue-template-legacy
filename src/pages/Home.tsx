import { defineComponent } from 'vue'
import GeosceneMap from '@/components/GeosceneMap'
import { center } from '@styled/patterns'

export default defineComponent(
  () => {
    return () => (
      <div class={center({ h: '50vh', fontSize: '3xl', fontWeight: 'bold', color: 'blue.500' })}>
        <GeosceneMap />
      </div>
    )
  },
  {
    name: 'Home'
  }
)
