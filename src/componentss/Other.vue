<script setup>
defineProps(["title", "href"]);
</script>
<template>
  <div class="hidden md:block lg:block">
    <div class="flex w-full max-w-sm justify-center pt-4">
      <a
        :href="href"
        class="flex w-full items-center rounded-xl border-8 border-[#34559D] bg-white py-14"
      >
        <span class="w-full text-center text-2xl font-bold leading-9 md:px-6">
          {{ title }}</span
        >
      </a>
    </div>
  </div>
  <div class="md:hidden lg:hidden">
    <div class="flex w-full max-w-sm justify-center pt-4">
      <a
        :href="href"
        class="flex w-full items-center rounded-xl border-4 border-[#34559D] bg-white px-2 py-16"
      >
        <span class="w-full pl-3 pr-3 text-center text-2xl font-bold leading-9">
          {{ title }}</span
        >
      </a>
    </div>
  </div>
</template>
