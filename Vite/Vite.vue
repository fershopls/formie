<template>
  <div class="max-w-lg my-12 mx-auto border border-gray-200 rounded">

    <formie
      class="grid gap-4"
      :form="form"
      :model="model"
      :errors="errors"
      @submitted="onSubmit"
      debug=1
    />

  </div>
</template>

<script>
import { Formie, inputs, f, group } from "../src/main.js";
import GroupWithTitle from "./GroupWithTitle.vue";

export default {
  components: { Formie },

  setup() {
    const form = [
      group([
        group([
          f("client.name", "Cliente: Nombre").required(),
          f("client.lastname", "Cliente: Apellidos").required(),
        ]).class("grid gap-4 grid-cols-2"),
        f("client.birth_date", "Cliente: Fecha de Nacimiento")
          .date()
          .required(),
        f("client.country", "Cliente: País").required(),
        f("client.city", "Cliente: Ciudad").required(),
        f("client.email", "Cliente: Correo Electrónico").email().required(),
        f("client.phone", "Cliente: Teléfono", "phone").tel().required(),
      ]).type(GroupWithTitle, {
        title: "Cliente",
      }),

      group([
        // Goal
        f("antecedents", "Antecedentes", inputs.Textarea).extend({
          attrs: { rows: 3, placeholder: "Situacion actual..." },
        }),

        f("type", "¿Qué protocolo vas a realizar?", inputs.Select).extend({
          options: ["Protocolo General", "Protocolo de Salud"],
        }),

        f("goal", "¿Cuál es el objetivo?", inputs.Textarea),

        f(
          "kind",
          "¿En qué categoría encaja el objetivo?",
          inputs.Select
        ).extend({
          options: [
            "Autoestima",
            "Depresión y otros estados emocionales",
            "Dinero",
            "Pareja y relaciones",
            "Sobrepeso",
            "Trabajo",
            "Adicciones",
            "Enfermedades mentales",
            "Otros",
          ],
        }),

        f("details", "Detalles del Objetivo", inputs.Textarea).extend({
          attrs: {
            rows: 3,
            placeholder:
              "Introduce los detalles y definiciones necesarias para que el objetivo quede perfectamente definido. Por ejemplo, significado de palabras como óptimo, ideal, mejor, peor, …, características de la pareja ideal, del trabajo ideal, etc.",
          },
        }),
      ]).type(GroupWithTitle, {
        title: "Protocolo",
      }),

      // Buttons
      {
        type: inputs.Buttons,
        buttons: [
          {
            label: "Guardar",
            type: "submit",
          },
        ],
      },
    ];

    const model = {
      client: { name: "Ferchis" },
    };

    const errors = {
      //
    };

    const onSubmit = (ctx) => {
      alert("Submited!");
      console.log(ctx);
    };

    return {
      onSubmit,
      form,
      model,
      errors,
    };
  },
};
</script>
