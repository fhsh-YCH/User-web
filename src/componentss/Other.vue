<script setup>
defineProps(["content_line1", "content_line2", "href"]);
</script>
<template>
  <div class="hidden md:block lg:block">
    <div class="flex justify-center pt-4 w-full max-w-sm">
      <a
        :href="href"
        class="bg-white flex items-center border-8 rounded-xl border-[#34559D] w-full py-7"
      >
        <span
          class="font-bold pr-12 pl-10 text-2xl text-center w-full leading-9"
        >
          {{ content_line1 }}<br />{{ content_line2 }}</span
        >
      </a>
    </div>
  </div>
  <div class="lg:hidden md:hidden">
    <div class="flex justify-center pt-4 w-full max-w-sm">
      <a
        :href="href"
        class="bg-white flex items-center border-4 rounded-xl border-[#34559D] px-4 py-7"
      >
        <span class="font-bold pr-3 pl-3 text-2xl text-center w-full leading-9">
          {{ content_line1 }}<br />{{ content_line2 }}</span
        >
      </a>
    </div>
  </div>
</template>
