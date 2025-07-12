import { defineComponent, type VNode } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Counter from '@/components/Counter'
import Zoom from '@/components/_transition/Zoom.vue'

export default defineComponent(
  () => {
    return () => (
      <>
        <Counter />
        <ul class="m-2.5 center gap-2.5 border border-gray-300 rounded-md bg-white p-2.5">
          <li>
            <RouterLink to="/">主页</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">关于</RouterLink>
          </li>
        </ul>
        <div class="overflow-hidden">
          <RouterView>
            {{
              default: ({ Component }: { Component: VNode }) => (
                <Zoom direction="left" mode="out-in">
                  {Component}
                </Zoom>
              )
            }}
          </RouterView>
        </div>
      </>
    )
  },
  {
    name: 'App'
  }
)
