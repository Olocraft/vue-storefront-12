import { shallowMount } from '@vue/test-utils';
import DividerBase from './DividerBase.vue';

let wrapper;

describe('DividerBase.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(DividerBase);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
