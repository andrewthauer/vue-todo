import Vue from 'vue'
// import { shallow } from '@vue/test-utils';
import AppHeader from '@/components/AppHeader.vue';

describe('AppHeader.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message';
    // const wrapper = shallow(AppHeader, {
    //   propsData: { title },
    // });
    // expect(wrapper.text()).to.include(title);
    // expect(wrapper.text()).toMatch(title)

    const Constructor = Vue.extend(AppHeader)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent).toMatch(title);
  });
});
