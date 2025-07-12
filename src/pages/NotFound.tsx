import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => <div class="h-50vh center text-(3xl red-500) font-bold">页面不存在！</div>
  },
  {
    name: 'NotFound'
  }
)
