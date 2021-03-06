export const TEMPLATES = {
  vue: `<template>
    <div class="@camelCaseName@" data-testid="@camelCaseName@"></div>
  </template>
  <script lang="ts">
  import Vue from 'vue'
  
  export default Vue.extend({
    name: '@name@',
  })
  </script>
  <style lang="scss" src="./@name@.scss" scoped />`,
  scss: `// @name@.scss
  .@camelCaseName@ {
  } `,
  test: `import { mount } from '@vue/test-utils'
  
  import @name@ from '../@name@.vue'
  
  describe('@name@.vue', () => {
    const wrapper = mount(@name@)
  
    it('Should render component', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })`,
}
