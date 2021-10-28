import { mount, shallowMount, RouterLinkStub } from '@vue/test-utils';
import Header from '@/components/Header.vue';


describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});

describe('Header', () => {
  it('is a Header instance', () => {
    const wrapper = shallowMount(Header, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    expect(wrapper.html()).toContain('<header class="header">');
  });
});
