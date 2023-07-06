<script setup>
import { ref, watch } from "vue";
import { datas } from "../utils.js";

const normal_hell = ref("#");
const PE_hell = ref("#");
const drama1_hell = ref("#");
const drama2_hell = ref("#");
const music_hell = ref("#");
const art_hell = ref("#");
const dance_hell = ref("#");

watch(datas, (new_data, old_data) => {
  normal_hell.value = new_data.hell[0].link;
  PE_hell.value = new_data.hell[1].link;
  drama1_hell.value = new_data.hell[2].link;
  drama2_hell.value = new_data.hell[3].link;
  music_hell.value = new_data.hell[4].link;
  art_hell.value = new_data.hell[5].link;
  dance_hell.value = new_data.hell[6].link;
});
</script>
<template>
  <div id="register" class="flex justify-center pt-10">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      新生線上報到
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div class="rounded-lg border border-[#34559D] bg-white p-8 shadow-md">
      <p
        class="text-center text-[20px] font-black text-[#34559D] md:text-3xl lg:text-3xl"
      >
        !!!新生請先線上報到!!!
      </p>
      <p class="pt-3 text-center text-[14px] md:text-lg lg:text-xl">
        (1)查詢錄取名單(報到編號)<br />(2)線上報到、上傳畢證、本土語文選課
      </p>
      <p
        class="pt-10 text-center text-[20px] font-semibold text-[#EC6261] md:text-3xl lg:text-4xl"
      >
        逾期未報到<br />視同放棄錄取資格
      </p>
      <div
        class="grid grid-cols-1 flex-col items-center justify-center gap-3 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      >
        <!-- 普通班 -->
        <a :href="normal_hell">
          <div class="rounded-2xl bg-[#34559D] px-8 py-6 lg:py-16">
            <div class="flex flex-col items-center justify-center">
              <p class="text-center text-[20px] font-semibold text-white">
                普通班免試<br />新生線上報到
              </p>
              <p
                class="pb-4 pt-2 text-center text-[16px] font-semibold text-white lg:pb-8 lg:pt-4"
              >
                (優免/安置上傳畢證)
              </p>
              <div
                class="flex rounded-full bg-white px-8 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
              >
                7月19日11:00<br />~7月21日11:00
              </div>
            </div>
          </div>
        </a>
        <!-- 體育班 -->
        <a :href="PE_hell">
          <div class="rounded-2xl bg-[#34559D] px-10 py-10 md:py-6 lg:py-16">
            <div class="flex flex-col items-center justify-center">
              <p
                class="pb-4 text-center text-[20px] font-semibold text-white md:py-6 lg:pb-12"
              >
                體育班<br />新生上傳畢冊
              </p>

              <div
                class="flex rounded-full bg-white px-6 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
              >
                7月19日11:00<br />~7月21日12:00
              </div>
            </div>
          </div>
        </a>
        <!-- 戲劇班 -->
        <div class="flex flex-col gap-2">
          <a :href="drama1_hell"
            ><div class="rounded-2xl bg-[#34559D] px-8 py-4">
              <div class="flex flex-col items-center justify-center">
                <p
                  class="pb-4 text-center text-[20px] font-semibold text-white"
                >
                  戲劇班<br />正取生線上報到
                </p>

                <div
                  class="flex rounded-full bg-white px-6 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
                >
                  7月19日09:00<br />~7月20日12:00
                </div>
              </div>
            </div></a
          >
          <a :href="drama2_hell">
            <div class="rounded-2xl bg-[#34559D] px-8 py-4">
              <div class="flex flex-col items-center justify-center">
                <p
                  class="pb-4 text-center text-[20px] font-semibold text-white"
                >
                  備取生線上報到
                </p>

                <div
                  class="flex rounded-full bg-white px-6 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
                >
                  7月20日17:00<br />~7月21日12:00
                </div>
              </div>
            </div></a
          >
        </div>

        <!-- 音樂班 -->
        <a :href="music_hell">
          <div class="rounded-2xl bg-[#34559D] px-10 py-10 md:py-20 lg:py-6">
            <div class="flex flex-col items-center justify-center">
              <p
                class="pb-4 text-center text-[20px] font-semibold text-white md:pb-8 lg:py-6"
              >
                音樂班<br />新生線上報到
              </p>

              <div
                class="flex rounded-full bg-white px-6 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
              >
                7月19日11:00<br />~7月20日_12:00
              </div>
            </div>
          </div>
        </a>
        <!-- 美術班 -->
        <a :href="art_hell">
          <div class="rounded-2xl bg-[#34559D] px-8 py-6">
            <div class="flex flex-col items-center justify-center">
              <p class="text-center text-[20px] font-semibold text-white">
                美術班<br />新生線上報到
              </p>
              <p
                class="pb-4 pt-2 text-center text-[16px] font-semibold text-white"
              >
                （已經上傳畢證）
              </p>

              <div
                class="flex rounded-full bg-white px-6 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
              >
                7月19日11:00<br />~7月20日12:00
              </div>
            </div>
          </div>
        </a>
        <!-- 舞蹈班 -->
        <a :href="dance_hell">
          <div class="rounded-2xl bg-[#34559D] px-10 py-10 lg:py-6">
            <div class="flex flex-col items-center justify-center">
              <p
                class="pb-4 text-center text-[20px] font-semibold text-white md:py-6 lg:py-6"
              >
                舞蹈班<br />新生線上報到
              </p>

              <button
                class="flex rounded-full bg-white px-6 py-1 text-center text-[20px] font-semibold text-[#EC6261]"
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
