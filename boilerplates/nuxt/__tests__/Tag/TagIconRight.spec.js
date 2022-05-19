import { shallowMount } from '@vue/test-utils';
import TagIconRight from '../../components/Tag/TagIconRight.vue';
let wrapper;

describe('TagIconRight.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(TagIconRight);
  });
  it('render component correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
