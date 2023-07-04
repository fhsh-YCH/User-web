<script setup>
import { ref } from "vue";

const hk1 = ref("https://www.example.com");
const hk2 = ref("https://www.example.com");
const hk3 = ref("https://www.example.com");
</script>

<template>
  <div id="homework" class="flex justify-center pt-8">
    <div
      class="bg-[#34559D] px-5 py-1 md:text-xl lg:text-2xl md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-t-lg text-white flex items-center justify-center shadow-md"
    >
      新生暑假作業
    </div>
  </div>
  <div class="flex justify-center">
    <div
      class="flex flex-col px-4 py-6 md:px-7 md:py-10 lg:px-24 lg:py-10 bg-white rounded-lg border border-[#34559D] shadow-md gap-8"
    >
      <div class="flex items-center">
        <p class="pr-4 md:pr-8 lg:pr-8 md:text-2xl lg:text-3xl">1.</p>
        <a :href="hk1">
          <button
            role="button"
            class="button-name px-3 py-2 text-sm md:text-2xl md:px-12 md:py-3 lg:text-3xl lg:px-14 lg:py-4"
          >
            新生暑假作業說明（教學組）
          </button>
        </a>
      </div>
      <div class="flex items-center">
        <p class="pr-4 md:pr-8 lg:pr-8 md:text-2xl lg:text-3xl">2.</p>
        <a :href="hk2">
          <button
            role="button"
            class="button-name px-3 py-2 text-sm md:text-2xl md:px-12 md:py-3 lg:text-3xl lg:px-14 lg:py-4"
          >
            新生數學暑假作業（請列印前8頁列印）
          </button>
        </a>
      </div>

      <div class="flex justify-center items-center">
        <p class="pr-4 md:pr-8 lg:pr-8 md:text-2xl lg:text-3xl">3.</p>
        <a :href="hk3">
          <button
            role="button"
            class="button-name px-3 py-2 text-sm md:text-2xl md:px-12 md:py-3 lg:text-3xl lg:px-14 lg:py-4"
          >
            新生數學銜接教材（完整版51頁供參考）
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<style>
.button-name {
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.2) 0 2px 4px,
    rgba(45, 35, 66, 0.15) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;

  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;

  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
}

.button-name:focus {
  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

.button-name:hover {
  box-shadow: rgba(45, 35, 66, 0.3) 0 4px 8px,
    rgba(45, 35, 66, 0.2) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-name:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
