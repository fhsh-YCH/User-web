<script setup>
import { ref } from "vue";

const normal_hell = ref("https://www.example.com");
const PE_hell = ref("https://www.example.com");
const drama1_hell = ref("https://www.example.com");
const drama2_hell = ref("https://www.example.com");
const music_hell = ref("https://www.example.com");
const art_hell = ref("https://www.example.com");
const dance_hell = ref("https://www.example.com");
</script>
<template>
  <div id="register" class="flex justify-center pt-10">
    <div
      class="bg-[#34559D] px-5 py-1 rounded-t-lg text-white md:text-xl lg:text-2xl md:px-4 md:py-1 lg:px-6 lg:py-2 flex items-center justify-center shadow-md"
    >
      新生線上報到
    </div>
  </div>
  <div class="flex justify-center items-center">
    <div class="p-8 bg-white rounded-lg border border-[#34559D] shadow-md">
      <p
        class="text-[20px] md:text-3xl lg:text-3xl font-black text-[#34559D] text-center"
      >
        !!!新生請先線上報到!!!
      </p>
      <p class="text-[14px] text-center pt-3 md:text-lg lg:text-xl">
        (1)查詢錄取名單(報到編號)<br />(2)線上報到、上傳畢證、本土語文選課
      </p>
      <p
        class="text-[20px] font-semibold text-[#EC6261] text-center pt-10 md:text-3xl lg:text-4xl"
      >
        逾期未報到<br />視同放棄錄取資格
      </p>
      <div
        class="flex-col justify-center items-center pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5"
      >
        <!-- 普通班 -->
        <a :href="normal_hell">
          <div class="lg:py-16 py-6 px-8 bg-[#34559D] rounded-2xl">
            <div class="flex flex-col justify-center items-center">
              <p class="text-[20px] text-center font-semibold text-white">
                普通班免試<br />新生線上報到
              </p>
              <p
                class="text-[16px] text-white text-center font-semibold pt-2 pb-4 lg:pt-4 lg:pb-8"
              >
                (優免/安置上傳畢證)
              </p>
              <div
                class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-8 py-1 flex"
              >
                7月19日11:00<br />~7月21日11:00
              </div>
            </div>
          </div>
        </a>
        <!-- 體育班 -->
        <a :href="PE_hell">
          <div class="py-10 md:py-6 lg:py-16 px-10 bg-[#34559D] rounded-2xl">
            <div class="flex flex-col justify-center items-center">
              <p
                class="text-[20px] text-center font-semibold text-white pb-4 lg:pb-12 md:py-6"
              >
                體育班<br />新生上傳畢冊
              </p>

              <div
                class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-6 py-1 flex"
              >
                7月19日11:00<br />~7月21日12:00
              </div>
            </div>
          </div>
        </a>
        <!-- 戲劇班 -->
        <div class="flex flex-col gap-2">
          <a :href="drama1_hell"
            ><div class="py-4 px-8 bg-[#34559D] rounded-2xl">
              <div class="flex flex-col justify-center items-center">
                <p
                  class="text-[20px] text-center font-semibold text-white pb-4"
                >
                  戲劇班<br />正取生線上報到
                </p>

                <div
                  class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-6 py-1 flex"
                >
                  7月19日09:00<br />~7月20日12:00
                </div>
              </div>
            </div></a
          >
          <a :href="drama2_hell">
            <div class="py-4 px-8 bg-[#34559D] rounded-2xl">
              <div class="flex flex-col justify-center items-center">
                <p
                  class="text-[20px] text-center font-semibold text-white pb-4"
                >
                  備取生線上報到
                </p>

                <div
                  class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-6 py-1 flex"
                >
                  7月20日17:00<br />~7月21日12:00
                </div>
              </div>
            </div></a
          >
        </div>

        <!-- 音樂班 -->
        <a :href="music_hell">
          <div class="py-10 lg:py-6 md:py-20 px-10 bg-[#34559D] rounded-2xl">
            <div class="flex flex-col justify-center items-center">
              <p
                class="text-[20px] text-center font-semibold text-white md:pb-8 lg:py-6 pb-4"
              >
                音樂班<br />新生線上報到
              </p>

              <div
                class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-6 py-1 flex"
              >
                7月19日11:00<br />~7月20日_12:00
              </div>
            </div>
          </div>
        </a>
        <!-- 美術班 -->
        <a :href="art_hell">
          <div class="py-6 px-8 bg-[#34559D] rounded-2xl">
            <div class="flex flex-col justify-center items-center">
              <p class="text-[20px] text-center font-semibold text-white">
                美術班<br />新生線上報到
              </p>
              <p
                class="text-[16px] text-white text-center font-semibold pt-2 pb-4"
              >
                （已經上傳畢證）
              </p>

              <div
                class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-6 py-1 flex"
              >
                7月19日11:00<br />~7月20日12:00
              </div>
            </div>
          </div>
        </a>
        <!-- 舞蹈班 -->
        <a :href="dance_hell">
          <div class="py-10 px-10 lg:py-6 bg-[#34559D] rounded-2xl">
            <div class="flex flex-col justify-center items-center">
              <p
                class="text-[20px] text-center font-semibold text-white pb-4 md:py-6 lg:py-6"
              >
                舞蹈班<br />新生線上報到
              </p>

              <button
                class="text-[20px] bg-white rounded-full text-center font-semibold text-[#EC6261] px-6 py-1 flex"
              >
                7月19日11:00<br />~7月20日12:00
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
