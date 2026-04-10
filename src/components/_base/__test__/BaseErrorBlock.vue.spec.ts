import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { markRaw } from 'vue'
import type { NormalizedOptions } from 'ky'
import { HTTPError } from 'ky'
import { ZodError } from 'zod'
import { APIError } from '@/plugins/fetch/ky'
import BaseErrorBlock from '../BaseErrorBlock.vue'

function createHTTPError(status: number): HTTPError {
  return new HTTPError(
    new Response(null, { status }),
    new Request('http://test.com'),
    {} as NormalizedOptions
  )
}

function mountWithError(
  error: ZodError | HTTPError | APIError | Error | null,
  onRetry?: () => void
) {
  return mount(BaseErrorBlock, {
    props: { error: error ? markRaw(error) : null, ...(onRetry ? { onRetry } : {}) }
  })
}

function getContainer(wrapper: ReturnType<typeof mount>) {
  return wrapper.find('.error-block-container')
}

describe('BaseErrorBlock', () => {
  describe('错误类型显示', () => {
    it('error=null 时显示 "未知错误"', () => {
      const wrapper = mountWithError(null)
      expect(wrapper.find('.error-block-title').text()).toBe('未知错误')
      expect(wrapper.find('.error-block-message').text()).toBe('发生了一个未知错误。')
    })

    it('ZodError 时显示 "系统异常"', () => {
      const wrapper = mountWithError(new ZodError([]))
      expect(wrapper.find('.error-block-title').text()).toBe('系统异常')
    })

    it('HTTPError 404 时显示 "内容未找到"', () => {
      const wrapper = mountWithError(createHTTPError(404))
      expect(wrapper.find('.error-block-title').text()).toBe('内容未找到')
    })

    it('HTTPError 403 时显示 "无权访问"', () => {
      const wrapper = mountWithError(createHTTPError(403))
      expect(wrapper.find('.error-block-title').text()).toBe('无权访问')
    })

    it('HTTPError 500 时显示 "服务暂时不可用"', () => {
      const wrapper = mountWithError(createHTTPError(500))
      expect(wrapper.find('.error-block-title').text()).toBe('服务暂时不可用')
    })

    it('HTTPError 502 时显示 "服务暂时不可用"', () => {
      const wrapper = mountWithError(createHTTPError(502))
      expect(wrapper.find('.error-block-title').text()).toBe('服务暂时不可用')
    })

    it('HTTPError 503 时显示 "服务暂时不可用"', () => {
      const wrapper = mountWithError(createHTTPError(503))
      expect(wrapper.find('.error-block-title').text()).toBe('服务暂时不可用')
    })

    it('HTTPError 其他状态码显示 "请求失败"', () => {
      const wrapper = mountWithError(createHTTPError(422))
      expect(wrapper.find('.error-block-title').text()).toBe('请求失败')
    })

    it('APIError 时显示 error.message', () => {
      const wrapper = mountWithError(new APIError(1001, '自定义业务错误'))
      expect(wrapper.find('.error-block-title').text()).toBe('请求失败')
      expect(wrapper.find('.error-block-message').text()).toBe('自定义业务错误')
    })

    it('普通 Error 时显示 "网络错误"', () => {
      const wrapper = mountWithError(new Error('Something broke'))
      expect(wrapper.find('.error-block-title').text()).toBe('网络错误')
    })
  })

  describe('重试按钮', () => {
    it('不传 onRetry 时不渲染重试按钮', () => {
      const wrapper = mountWithError(new Error('test'))
      expect(wrapper.find('.error-block-retry-button').exists()).toBe(false)
    })

    it('传入 onRetry 时渲染重试按钮', () => {
      const wrapper = mountWithError(new Error('test'), () => {})
      expect(wrapper.find('.error-block-retry-button').exists()).toBe(true)
      expect(wrapper.find('.error-block-retry-button').text()).toBe('重试')
    })

    it('点击重试按钮调用 onRetry', async () => {
      const onRetry = vi.fn()
      const wrapper = mountWithError(new Error('test'), onRetry)
      await wrapper.find('.error-block-retry-button').trigger('click')
      expect(onRetry).toHaveBeenCalledOnce()
    })
  })

  describe('容器 class', () => {
    it('默认包含 has-mask，不含 is-fullscreen', () => {
      const container = getContainer(mountWithError(null))
      expect(container.classes()).toContain('has-mask')
      expect(container.classes()).not.toContain('is-fullscreen')
    })

    it('mask=false 时不含 has-mask', () => {
      const container = getContainer(mount(BaseErrorBlock, { props: { error: null, mask: false } }))
      expect(container.classes()).not.toContain('has-mask')
    })

    it('fullscreen=true 时包含 is-fullscreen', () => {
      const container = getContainer(
        mount(BaseErrorBlock, { props: { error: null, fullscreen: true } })
      )
      expect(container.classes()).toContain('is-fullscreen')
    })
  })
})
