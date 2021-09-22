<template>
  <div>

    <!-- Label -->
    <template v-if="field.label">
      <component :is="fieldLabel">{{ field.label }}</component>
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
      <component
        :is="fieldError"
        v-for="error, key in errors"
        :key="key"
      >
        {{ error }}
      </component>
    </template>

  </div>
</template>


<script>
import FieldLabel from "./Label.vue";
import FieldError from "./Error.vue";

import InputDefault from "../Inputs/Default.vue";

export default {
  props: {
    field: null,
    value: null,
    context: null,

    fieldLabel: {
      default: FieldLabel,
    },

    fieldError: {
      default: FieldError,
    },
  },

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
