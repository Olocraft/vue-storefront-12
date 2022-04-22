import { shallowMount } from '@vue/test-utils'
import ButtonSecondaryLarge from '../../components/SfButton/Secondary/ButtonSecondaryLarge.vue'
let wrapper

describe('ButtonSecondaryLarge.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(ButtonSecondaryLarge)
  })
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
