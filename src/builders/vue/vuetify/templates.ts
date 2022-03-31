import { camelCaseName, VueTemplates } from '../templates'

const className = (name: string): string => {
  return `${camelCaseName(name)}__wrapper`
}

export const VUETIFY_TEMPLATES = (name: string): VueTemplates => {
  return {
    vue: `<template>
<!-- If you want to use v-model add ':value="value" @input="update" @change="update"' to wrapper tag -->
  <V${name} class="${className(
      name
    )}" v-bind="{ ...$props, ...$attrs }" v-on="$listeners">
    <template v-for="(_, scopedSlotName) in $scopedSlots"#[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </V${name}>
</template>

<script lang="ts">
// Remember to add V${name} import on '/plugins/vuetify/index.ts
import Vue from 'vue'

export default Vue.extend({
  name: '${name}',
  // uncomment lines below if your wrapper uses v-model
  /*
  props: {
    value: {},
  },
  methods: {
    update(newValue) {
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    },
  },

  */
})
</script>
<style lang="scss" src="./${name}.scss" scoped />`,
    scss: `// ${name}.scss
.${className(name)} {
} `,
    test: `import { mount } from '@vue/test-utils'

import ${name} from '../${name}.vue'

describe('${name}.vue', () => {
  const wrapper = mount(${name})

  it('Should render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})`,
  }
}
