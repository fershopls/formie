<template>
  <form
    @submit.prevent="onSubmit"
    class="grid gap-4"
  >
    <!-- Fields -->
    <template
      v-for="(field, key) in form"
      :key="key"
    >
      <field
        :field="field"
        :context="context"
        :value="getFieldValue(field)"
        @update="(value) => onUpdateFieldValue(field, value)"
      />
    </template>

    <!-- Debug -->
    <template v-if="debug">
      <pre
        v-text="values"
        class="mt-8 overflow-x-auto bg-gray-800 text-white p-4 rounded"
      ></pre>
      <pre
        v-if="$props.errors"
        v-text="$props.errors"
        class="mt-3 overflow-x-auto bg-red-800 text-white p-4 rounded"
      ></pre>
    </template>

  </form>
</template>


<script>
import Field from "./Field/Field.vue";
import getSetStringProp from "./getSetStringProp.js";

export default {
  props: ["form", "model", "debug", "errors"],

  emits: ["submitted"],

  components: { Field },

  mounted() {
    this.hydrateValuesWithModelByFieldName();
  },

  data() {
    return { values: {} };
  },

  methods: {
    hydrateValuesWithModelByFieldName() {
      this.form.forEach((field) => {
        if (field.name) {
          let value = null;
          value = getSetStringProp(this.model, field.name);

          getSetStringProp(this.values, field.name, value);
        }
      });
    },

    onSubmit() {
      this.$emit("submitted", this.context);
    },

    getFieldValue(field) {
      return getSetStringProp(this.values, field.name);
    },

    onUpdateFieldValue(field, value) {
      getSetStringProp(this.values, field.name, value);
    },
  },

  computed: {
    context() {
      return {
        form: this.form,
        model: this.model,
        values: this.values,
        errors: this.errors,
        id: this.model && this.model.id ? this.model.id : null,
      };
    },
  },
};
</script>
