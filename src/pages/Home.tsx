import { defineComponent } from 'vue'

export default defineComponent(
  () => {
    return () => <div class="center h-[50vh] text-3xl font-bold text-blue-500">主页</div>
  },
  {
    name: 'Home'
  }
)
