import { defineComponent } from 'vue'
import GeosceneMap from '@/components/GeosceneMap'

export default defineComponent(
  () => {
    return () => (
      <div class="center h-[50vh] text-3xl font-bold text-blue-500">
        <GeosceneMap />
      </div>
    )
  },
  {
    name: 'Home'
  }
)
