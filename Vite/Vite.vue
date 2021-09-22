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
      // Client
      f("client.name", "Cliente: Nombre"),
      f("client.lastname", "Cliente: Apellidos"),
      f("client.birth_date", "Cliente: Fecha de Nacimiento", "date"),
      f("client.country", "Cliente: País"),
      f("client.city", "Cliente: Ciudad"),
      f("client.email", "Cliente: Correo Electrónico", "email"),
      f("client.phone", "Cliente: Teléfono", "phone"),

      // Goal
      f("antecedents", "Antecedentes", inputs.Textarea, {
        attrs: { rows: 3, placeholder: "Situacion actual..." },
      }),

      f("type", "¿Qué protocolo vas a realizar?", inputs.Select, {
        options: ["Protocolo General", "Protocolo de Salud"],
      }),

      // Buttons
      {
        type: inputs.Buttons,
        buttons: [{ label: "Guardar" }],
      },
    ];

    const model = {
      user: { name: "Ferchis" },
    };

    const errors = {
      "client.name": "Este campo es requerido",
      type: "Selecciona un tipo.",
    };

    return { form, model, errors };
  },
};
</script>
