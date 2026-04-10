import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseLoadingIndicator from '../BaseLoadingIndicator.vue'

function getContainer(wrapper: ReturnType<typeof mount>) {
  return wrapper.find('.loading-indicator-container')
}

describe('BaseLoadingIndicator', () => {
  it('渲染 spinner 元素', () => {
    const wrapper = mount(BaseLoadingIndicator)
    expect(wrapper.find('.spinner').exists()).toBe(true)
  })

  it('默认包含 has-mask class，不含 is-fullscreen', () => {
    const container = getContainer(mount(BaseLoadingIndicator))
    expect(container.classes()).toContain('has-mask')
    expect(container.classes()).not.toContain('is-fullscreen')
  })

  it('mask=false 时不含 has-mask class', () => {
    const container = getContainer(mount(BaseLoadingIndicator, { props: { mask: false } }))
    expect(container.classes()).not.toContain('has-mask')
  })

  it('fullscreen=true 时包含 is-fullscreen class', () => {
    const container = getContainer(mount(BaseLoadingIndicator, { props: { fullscreen: true } }))
    expect(container.classes()).toContain('is-fullscreen')
  })

  it('mask=false + fullscreen=true 组合生效', () => {
    const container = getContainer(
      mount(BaseLoadingIndicator, { props: { mask: false, fullscreen: true } })
    )
    expect(container.classes()).not.toContain('has-mask')
    expect(container.classes()).toContain('is-fullscreen')
  })
})
