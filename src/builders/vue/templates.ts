const camelCaseName = (name: string) => {
  name = name.charAt(0).toLowerCase() + name.slice(1);
  name = name.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

  return name;
};

export const TEMPLATES = (name: string) => {
  return {
    vue: `<template>
  <div class="${camelCaseName(name)}" data-testid="${camelCaseName(
      name
    )}"></div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: '${name}',
})
</script>
<style lang="scss" src="./${name}.scss" scoped />`,
    scss: `// ${name}.scss
.${camelCaseName(name)} {
} `,
    test: `import { mount } from '@vue/test-utils'

import ${name} from '../${name}.vue'

describe('${name}.vue', () => {
  const wrapper = mount(${name})

  it('Should render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})`,
  };
};
