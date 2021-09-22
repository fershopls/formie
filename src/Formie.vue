<template>
  <form @submit.prevent="onSubmit">

    <form-render
      :form="form"
      :model="model"
      :errors="errors"
      :values="values"
      :context="context"
    />

    <!-- Debug -->
    <template v-if="debug">
      <pre
        v-text="values"
        class="mt-8 text-xs overflow-x-auto bg-gray-800 text-white p-4 rounded"
      ></pre>
      <pre
        v-if="errors"
        v-text="errors"
        class="mt-3 text-xs overflow-x-auto bg-red-800 text-white p-4 rounded"
      ></pre>
    </template>

  </form>
</template>


<script>
import FormRender from "./Form/FormRender.vue";

export default {
  props: ["form", "model", "errors", "debug"],

  emits: ["submitted"],

  components: { FormRender },

  mounted() {
    // this.hydrateValuesWithModelByFieldName();
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
