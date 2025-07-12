import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => (
      <div class="h-50vh center text-(3xl green-500) font-bold">
        关于 <span class="i-gis:earth-gear ml-3"></span>
      </div>
    )
  },
  {
    name: 'About'
  }
)
