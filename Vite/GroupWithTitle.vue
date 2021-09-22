<template>
  <div>
    <div
      v-if="group.title"
      class="text-2xl text-center px-4 uppercase font-bold tracking-wider py-4 border-t border-b"
    >{{ group.title }}</div>
    <div class="mt-2 grid gap-4 px-4">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: ["group"],
};
</script>