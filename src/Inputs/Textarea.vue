<template>
  <div>
    <div
      class="border rounded border-gray-300 cursor-text flex"
      @click="focusTextarea"
    >
      <textarea
        class="resize-none box-border
        p-2 w-full
        bg-white
        outline-none ring-none border-none
        focus:outline-none focus:ring-transparent focus:border-none"
        v-model="currentValue"
        ref="textarea"
        v-bind="field.attrs"
        @change="resize"
        @cut="resize"
        @paste="resize"
        @drop="resize"
        @input="resize"
      ></textarea>
    </div>
  </div>
</template>


<style scoped>
textarea {
  font-size: inherit !important;
  line-height: inherit !important;
}
</style>


<script>
export default {
  props: ["field", "value", "context"],

  emits: ["update"],

  data() {
    return {
      currentValue: this.value,
    };
  },

  watch: {
    value(value) {
      this.currentValue = value;
    },
    currentValue() {
      this.$emit("update", this.currentValue);
    },
  },

  mounted() {
    this.resize();
  },

  methods: {
    resize() {
      this.$refs.textarea.style.height = `auto`;
      const scrollHeight = this.$refs.textarea.scrollHeight;
      this.$refs.textarea.style.height = `${scrollHeight}px`;
    },

    focusTextarea() {
      this.$refs.textarea.focus();
    },
  },
};
</script>
