import { shallowMount } from '@vue/test-utils';
import NavbarTopCounter from '../../components/NavbarTop/NavbarTopCounter.vue';

let wrapper;

describe('NavbarTopCounter.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(NavbarTopCounter);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
