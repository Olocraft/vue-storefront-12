import { shallowMount } from '@vue/test-utils'
import ProgressXl from '../../components/Progress/ProgressXl.vue'

let wrapper

describe('ProgressXl.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ProgressXl)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
