<script setup>
const props = defineProps(["title"]);
</script>

<template>
  <button
    class="bg-white border-4 border-[#34559D] p-2 rounded-xl text-center font-bold"
  >
    <span>{{ title }}</span>
  </button>
</template>
