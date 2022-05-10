import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import Menu from '@/components/Menu.vue';

describe('Header', () => {
  it('is a Header instance', () => {
    const wrapper = shallowMount(Menu, {
      props: {
        menuIsOpen: false,
        menuButtonHandler: () => jest.fn(),
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    });
    expect(wrapper.html()).toContain('О нас');
    expect(wrapper.html()).toContain('Галерея');
    expect(wrapper.html()).toContain('Контакты');
  });
});
