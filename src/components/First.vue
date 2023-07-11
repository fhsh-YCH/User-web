<template>
  <a href="../assets/fhsh_poster.png" class="mx-auto w-8/12"
    ><img class="mx-auto h-auto w-8/12" /></a
  ><button
    @click="nextpage"
    class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white"
  >
    下一頁
  </button>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const nextpage = () => {
  router.push("/next");
};
</script>
