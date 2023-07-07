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
const language = ref("#");

watch(datas, (new_data, old_data) => {
  normal_hell.value = new_data.hell[0].link;
  PE_hell.value = new_data.hell[1].link;
  drama1_hell.value = new_data.hell[2].link;
  drama2_hell.value = new_data.hell[3].link;
  music_hell.value = new_data.hell[4].link;
  art_hell.value = new_data.hell[5].link;
  dance_hell.value = new_data.hell[6].link;
  language.value = new_data.hell[7].link;
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
    <div class="rounded-lg border border-[#34559D] bg-white p-10 shadow-md">
      <div>
        <span class="pt-3 text-center text-sm md:text-lg lg:text-xl">
          7/11(二) 11:00
        </span>
        <span class="pt-3 text-center text-sm font-bold md:text-lg lg:text-xl">
          查詢錄取名單及報到編號
        </span>
      </div>
      <div>
        <span class="pt-3 text-center text-sm md:text-lg lg:text-xl">
          7/11(二) ~ 7/14(五)
        </span>
        <span class="pt-3 text-center text-sm font-bold md:text-lg lg:text-xl">
          本土語文選課
        </span>
      </div>

      <div
        class="grid grid-cols-1 flex-col items-center justify-center gap-3 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      >
        <!-- 普通班 -->
        <a :href="normal_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
          >
            <span class="text-center text-2xl font-black text-white">
              普通班免試榜單<br />及報到編號
            </span>
            <span class="pt-4 text-center text-white lg:pb-8 lg:pt-4">
              *優免榜單6/19已公告<br />*安置榜單3/31已公告
            </span>
          </div>
        </a>
        <!-- 體育班 -->
        <a :href="PE_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
          >
            <span class="text-center text-2xl font-black text-white">
              體育班、運動<br />績優生報到編號
            </span>
            <span class="pt-4 text-center text-white lg:pb-8 lg:pt-4">
              *體育班.運動績優生<br />榜單5/8已公告
            </span>
          </div>
        </a>
        <!-- 戲劇班 -->
        <div class="flex flex-col gap-2">
          <a :href="drama1_hell"
            ><div
              class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
            >
              <span class="text-center text-2xl font-black text-white">
                戲劇班分班榜單<br />及報到編號
              </span>
              <span class="pt-4 text-center text-white lg:pb-8 lg:pt-4">
                *備取生遞補名單預定<br />7/12-17:00公告
              </span>
            </div></a
          >
          <a :href="drama2_hell">
            <div
              class="w-70 flex h-20 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
            >
              <span class="text-center text-2xl font-black text-white">
                備取生遞補名單
              </span>
            </div></a
          >
        </div>

        <!-- 音樂班 -->
        <a :href="music_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
          >
            <span class="text-center text-2xl font-black text-white">
              音樂班榜單<br />及報到編號
            </span>
          </div>
        </a>
        <!-- 美術班 -->
        <a :href="art_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
          >
            <span class="text-center text-2xl font-black text-white">
              美術班榜單<br />及報到編號
            </span>
          </div>
        </a>
        <!-- 舞蹈班 -->
        <a :href="dance_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
          >
            <span class="text-center text-2xl font-black text-white">
              舞蹈班分發榜單<br />及報到編號
            </span>
            <span class="pt-4 text-center text-white lg:pb-8 lg:pt-4">
              *以競榜單4/7已公告
            </span>
          </div>
        </a>
        <!-- 本土語文選課 -->
        <a :href="language">
          <div
            class="w-70 flex h-60 flex-col items-center justify-center rounded-2xl bg-[#9D3434] lg:py-16"
          >
            <span class="text-center text-2xl font-black text-white">
              本土語文選課
            </span>
            <span
              class="px-4 pt-6 text-center leading-7 text-white lg:pb-8 lg:pt-4"
            >
              全體新生鏈結【本土語文選課<br />google表單 (請用gmail帳號登<br />入，選課後收email儲存選課結<br />果，新生報到時出示選課結果)
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
