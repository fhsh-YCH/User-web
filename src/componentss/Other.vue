<script setup>
defineProps(["content_line1", "content_line2", "href"]);
</script>
<template>
  <div class="hidden md:block lg:block">
    <div class="flex w-full max-w-sm justify-center pt-4">
      <a
        :href="href"
        class="flex w-full items-center rounded-xl border-8 border-[#34559D] bg-white py-7"
      >
        <span
          class="w-full pl-10 pr-12 text-center text-2xl font-bold leading-9 md:pl-6 md:pr-6"
        >
          {{ content_line1 }}<br />{{ content_line2 }}</span
        >
      </a>
    </div>
  </div>
  <div class="md:hidden lg:hidden">
    <div class="flex w-full max-w-sm justify-center pt-4">
      <a
        :href="href"
        class="flex items-center rounded-xl border-4 border-[#34559D] bg-white px-4 py-10"
      >
        <span class="w-full pl-3 pr-3 text-center text-2xl font-bold leading-9">
          {{ content_line1 }}<br />{{ content_line2 }}</span
        >
      </a>
    </div>
  </div>
</template>
