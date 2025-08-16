import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => <div class="center h-[50vh] text-3xl font-bold text-red-500">页面不存在！</div>
  },
  {
    name: 'NotFound'
  }
)
