import { defineComponent, type VNode } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Counter from '@/components/Counter'
import Zoom from '@/components/_transition/Zoom.vue'
import { center } from '@styled/patterns'
import { Box } from '@styled/jsx'

export default defineComponent(
  () => {
    return () => (
      <>
        <Counter />
        <ul
          class={center({
            m: '2.5',
            gap: '2.5',
            rounded: 'md',
            border: '1px solid {colors.gray.300}',
            bg: 'white',
            p: '2.5'
          })}
        >
          <li>
            <RouterLink to="/">主页</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">关于</RouterLink>
          </li>
        </ul>
        <Box overflow={'hidden'}>
          <RouterView>
            {{
              default: ({ Component }: { Component: VNode }) => (
                <Zoom direction="left" mode="out-in">
                  {Component}
                </Zoom>
              )
            }}
          </RouterView>
        </Box>
      </>
    )
  },
  {
    name: 'App'
  }
)
