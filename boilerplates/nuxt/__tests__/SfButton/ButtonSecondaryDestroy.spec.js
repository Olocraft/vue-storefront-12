import { shallowMount } from '@vue/test-utils'
import ButtonDestroySecondary from '../../components/SfButton/Secondary/Destroy/ButtonSecondaryDestroy.vue'

let wrapper

describe('ButtonDestroySecondary.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonDestroySecondary)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
