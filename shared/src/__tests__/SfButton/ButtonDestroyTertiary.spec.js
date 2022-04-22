import { shallowMount } from '@vue/test-utils'
import ButtonDestroyTertiary from '../../components/SfButton/Tertiary/Destroy/ButtonDestroyTertiary.vue'

let wrapper

describe('ButtonDestroyTertiary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroyTertiary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
