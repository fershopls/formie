<template>
  <div class="">
    <input
      class="p-3 rounded bg-transparent border border-gray-300	block w-full focus:ring-0 focus:outline-none"
      :type="field.type"
      :value="value"
      v-bind="field.attrs"
      @input="$emit('update', $event.target.value)"
    />
  </div>
</template>


<script>
export default {
  props: ["field", "value"],

  components: {
    //
  },

  data() {
    return {
      //
    };
  },
};
</script>
