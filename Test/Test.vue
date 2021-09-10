<template>
  <div class="max-w-lg mt-12 mx-auto border border-gray-200 rounded p-6">
    <formie :form="form" />
  </div>
</template>

<script>
import { Formie, inputs } from "../src/formie.js";

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
      {
        type: inputs.Buttons,
        buttons: [{ label: "Guardar" }],
      },
    ];

    return { form };
  },
};
</script>
