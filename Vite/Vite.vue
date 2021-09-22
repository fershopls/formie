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
import { Formie, inputs, f } from "../src/main.js";

export default {
  components: { Formie },

  setup() {
    const form = [
      f(["client.name", "Cliente: Nombre"]),
      f(["client.lastname", "Cliente: Apellidos"]),
      f(["client.birth_date", "Cliente: Fecha de Nacimiento", "date"]),
      f(["client.country", "Cliente: País"]),
      f(["client.city", "Cliente: Ciudad"]),
      f(["client.email", "Cliente: Correo Electrónico", "email"]),
      f(["client.phone", "Cliente: Teléfono", "phone"]),

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
      dni: "El DNI es invalido.",
    };

    return { form, model, errors };
  },
};
</script>
