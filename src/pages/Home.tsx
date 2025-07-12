import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => (
      <div class="h-50vh center text-(3xl blue-500) font-bold">
        主页 <span class="i-lucide:house ml-3"></span>
      </div>
    )
  },
  {
    name: 'Home'
  }
)
