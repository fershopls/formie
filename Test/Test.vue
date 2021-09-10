<template>
  <div class="max-w-lg mt-12 mx-auto border border-gray-200 rounded p-2">
    <formie :form="form" />
  </div>
</template>

<script>
import Formie from "../src/Formie.vue";

export default {
  components: {
    Formie,
  },

  setup() {
    const form = [
      {
        name: "fullname",
        label: "Nombre completo",
        type: "text",
      },
    ];

    return { form };
  },
};
</script>
