<script setup>
import DesktopNavBar from "./DesktopNav.vue";
import Nav from "../componentss/Nav.vue";
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
        class="fixed inset-x-0 left-0 right-0 top-0 z-30 flex w-full items-center justify-center rounded-b-xl bg-[#FAF7EF] p-4 drop-shadow-md lg:hidden"
      >
        <a
          href="http://www.fhsh.tp.edu.tw/"
          target="_blank"
          class="absolute left-8 md:left-8 lg:left-8"
        >
          <img src="../assets/FHSH-logo.png" class="h-6 w-8" />
        </a>
        <p class="font-bold text-[#34559D] md:text-xl">復興高中新生網頁</p>

        <button @click="toggleMenu" class="absolute right-8">
          <img src="../assets/menu_icon.png" alt="Menu" class="h-6 w-6" />
        </button>
        <div v-if="isMenuOpen">
          <div
            class="absolute right-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-50"
            @click="closeModel"
          >
            <!-- <ul class="absolute right-10 top-10">
              <li>
                <a
                  id="timeline"
                  class="rounded-full bg-white px-6 py-3 font-black text-[#34559D]"
                  @click="scrollToSection('timeline')"
                  >新生入學時程表</a
                >
              </li>
              <li class="pt-8">
                <a
                  :href="register"
                  class="rounded-full bg-white px-8 py-3 font-black text-[#34559D]"
                  >新生線上報到</a
                >
              </li>

              <li class="pt-8">
                <a
                  :href="presentation"
                  class="rounded-full bg-white px-8 py-3 font-black text-[#34559D]"
                  >入學說明簡報</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-12 py-3 font-black text-[#34559D]"
                  :href="homework"
                  >暑假作業</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-6 py-3 font-black text-[#34559D]"
                  :href="handle"
                  >應辦＆選辦事項</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-8 py-3 font-black text-[#34559D]"
                  :href="date"
                  >實體到校日期</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-8 py-3 font-black text-[#34559D]"
                  :href="otherprecautions"
                  >其他宣導事項</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-12 py-3 font-black text-[#34559D]"
                  :href="profile"
                  >學校簡介</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-5 py-3 font-black text-[#34559D]"
                  :href="linegroup"
                  >高一LINE家長群</a
                >
              </li>
              <li class="pt-8">
                <a
                  class="rounded-full bg-white px-8 py-3 font-black text-[#34559D]"
                  :href="handbook"
                  >輔導選課手冊</a
                >
              </li>
            </ul> -->
            <Nav />
          </div>
        </div>
      </nav>

      <!-- Desktop nav -->
      <DesktopNavBar />
    </div>
  </div>
</template>
