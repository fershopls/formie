<template>
  <div>

    <!-- Label -->
    <template v-if="field.label">
      <field-label>{{ field.label }}</field-label>
    </template>

    <!-- Field -->
    <component
      :is="component"
      :field="safeField(field)"
      :value="value"
      :context="context"
      @update="(value) => $emit('update', value)"
    />

    <!-- Errors -->
    <template v-if="field.name && context.errors">
      <field-error
        v-for="error, key in errors"
        :key="key"
      >
        {{ error }}
      </field-error>
    </template>

  </div>
</template>


<script>
import FieldLabel from "./Label.vue";
import FieldError from "./Error.vue";

import InputDefault from "../Inputs/Default.vue";

export default {
  props: ["field", "value", "context"],
  emits: ["update"],

  components: {
    FieldLabel,
    FieldError,
  },

  methods: {
    safeField(field) {
      return {
        name: null,
        label: null,
        type: "text",
        ...field,
      };
    },
  },

  computed: {
    component() {
      if (typeof this.field.type === "object") {
        return this.field.type;
      }

      return InputDefault;
    },

    errors() {
      if (this.field.preventNestedErrors) {
        return this.context.errors[this.field.name];
      } else {
        return Object.keys(this.context.errors)
          .filter((key) => key.startsWith(this.field.name))
          .map((key) => this.context.errors[key]);
      }
    },
  },
};
</script>
