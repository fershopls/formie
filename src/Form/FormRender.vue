<template>
  <template
    v-for="item, key in form"
    :key="key"
  >

    <!-- If group -->
    <template v-if="item.constructor.name == 'Group'">
      <div v-bind="item.attrs">
        <form-render
          :form="item.fields"
          :model="model"
          :errors="errors"
          :context="context"
          :values="values"
        />
      </div>
    </template>

    <!-- If field -->
    <template v-else>
      <field
        :field="item"
        :context="context"
        :value="getFieldValue(item)"
        @update="(value) => onUpdateFieldValue(item, value)"
        :fieldLabel="$attrs.fieldLabel"
        :fieldError="$attrs.fieldError"
      />
    </template>

  </template>
</template>

<script>
import Field from "./../Field/Field.vue";
import getSetStringProp from "./../getSetStringProp.js";

export default {
  name: "form-render",
  props: ["form", "model", "errors", "context", "values"],

  components: {
    Field,
  },

  methods: {
    isGroup(field) {
      return field.constructor.name == "Group";
    },

    getFieldValue(field) {
      return getSetStringProp(this.values, field.name);
    },

    onUpdateFieldValue(field, value) {
      getSetStringProp(this.values, field.name, value);
    },
  },
};
</script>
