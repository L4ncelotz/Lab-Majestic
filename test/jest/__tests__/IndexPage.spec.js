import { shallowMount } from '@vue/test-utils'
import HtmlComponent from 'src/components/HtmlComponent.vue'

describe('HtmlComponent', () => {
  it('should render text when showText is true', () => {
    const wrapper = shallowMount(HtmlComponent, {
      propsData: {
        text: 'Visible text',
        showText: true
      }
    })
    expect(wrapper.text()).toContain('Visible text')
  })

  it('should not render text when showText is false', () => {
    const wrapper = shallowMount(HtmlComponent, {
      propsData: {
        showText: false
      }
    })
    expect(wrapper.text()).toContain('No text')
  })
})
