<template>
  <div class="max-w-lg mt-12 mx-auto border border-gray-200 rounded p-6">
    <formie
      :form="form"
      :model="model"
      :errors="errors"
      debug=1
    />
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
        name: "user.name",
        label: "Nombre completo",
        type: "text",
      },
      {
        name: "user.email",
        label: "Correo",
        type: "email",
      },
      {
        name: "birth_date",
        label: "Fecha de Nacimiento",
        type: "date",
      },
      {
        name: "dni",
        label: "DNI",
        type: "tel",
      },
      {
        type: inputs.Buttons,
        buttons: [{ label: "Guardar" }],
      },
    ];

    const model = {
      user: { name: "Ferchis" },
    };

    const errors = {
      "user.name": "Te equivocaste wey",
    };

    return { form, model, errors };
  },
};
</script>
