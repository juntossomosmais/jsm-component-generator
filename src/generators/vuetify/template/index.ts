export const TEMPLATES = {
  vue: `<template>
<!-- If you want to use v-model add ':value="value" @input="update" @change="update"' to wrapper tag -->
  <V@name@ class="@wrapperClassName@" v-on="$listeners" :data-gtm="dataGtm" :data-testid="dataTestid">
    <template v-for="(_, scopedSlotName) in $scopedSlots"#[scopedSlotName]="slotData">
      <slot :name="scopedSlotName" v-bind="slotData" />
    </template>
    <template v-for="(_, slotName) in $slots" #[slotName]>
      <slot :name="slotName" />
    </template>
  </V@name@>
</template>

<script lang="ts">
// @todo[vuetify] Remember to add V@name@ import on '/plugins/vuetify/index.ts
import { defineComponent } from '@marketplace/utils/helpers/vue-3/vue-3'


export default defineComponent({
  name: '@name@',
  props: {
    dataGtm: {
      type: String,
      required: true
    },
    dataTestid: {
      type: String,
      required: true
    }
  // uncomment lines below if your wrapper uses v-model
  //  value: {},
  }

  /*
  uncomment lines below if your wrapper uses v-model
  methods: {
    update(newValue) {
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    },
  },

  */
})
</script>
<style lang="scss" src="./@name@.scss" scoped />`,
  scss: `// @name@.scss
.@wrapperClassName@{
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
