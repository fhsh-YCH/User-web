<script setup>
import DesktopNavBar from "./DesktopNav.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeModel = () => {
  isMenuOpen.value = false;
};
</script>
<template>
  <div class="overflow-x-hidden">
    <div class="relative w-screen overflow-x-hidden bg-[#FAF7EF]">
      <!-- nav bar -->
      <nav
        class="bg-[#FAF7EF] inset-x-0 p-4 rounded-b-xl drop-shadow-md flex w-full items-center justify-center fixed top-0 left-0 right-0 z-50 lg:hidden"
      >
        <a
          href="http://www.fhsh.tp.edu.tw/"
          target="_blank"
          class="absolute left-8"
        >
          <img src="../assets/FHSH-logo.png" class="w-8 h-6" />
        </a>
        <p class="text-[#34559D] font-bold md:text-xl">復興高中新生網頁</p>

        <button @click="toggleMenu" class="absolute right-8">
          <img src="../assets/menu_icon.png" alt="Menu" class="w-6 h-6" />
        </button>
        <div v-if="isMenuOpen">
          <div
            class="absolute top-0 right-0 w-screen h-screen bg-black bg-opacity-50 z-50"
            @click="closeModel"
          >
            <ul class="absolute right-10 top-10">
              <li>
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-6"
                  >新生入學時程表</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-8"
                  >新生線上報到</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-8"
                  href=""
                  >輔導選課手冊</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-8"
                  href="presentation"
                  >入學說明簡報</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-12"
                  href="homework"
                  >暑假作業</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-6"
                  href="handle"
                  >應辦＆選辦事項</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-8"
                  href="date"
                  >實體到校日期</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-8"
                  href="otherprecautions"
                  >其他宣導事項</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-12"
                  href="profile"
                  >學校簡介</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="bg-white rounded-full font-black text-[#34559D] py-3 px-5"
                  href="linegroup"
                  >高一LINE家長群</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Desktop nav -->
      <DesktopNavBar />
    </div>
  </div>
</template>
