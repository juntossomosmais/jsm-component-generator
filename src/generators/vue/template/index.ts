export const TEMPLATES = {
  vue: `<template>
    <div class="@camelCaseName@" data-testid="@camelCaseName@" data-gtm="@camelCaseName@" data-testid="@camelCaseName@"></div>
  </template>
  <script lang="ts">
  import { defineComponent } from '@marketplace/utils/helpers/vue-3/vue-3'
  
  export default defineComponent({
    name: '@name@',
  })
  </script>
  <style lang="scss" src="./@name@.scss" scoped />`,
  scss: `// @name@.scss
  .@camelCaseName@ {
  } `,
  test: `import { mount } from '@vue/test-utils'
  import { describe, it, expect } from 'vitest'

  import @name@ from '../@name@.vue'
    
  describe('@name@.vue', () => {
    const wrapper = mount(@name@)
    
    it('Should render component', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })`,
}
