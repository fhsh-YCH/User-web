<script setup>
import { ref, watch } from "vue";
import { datas } from "../utils.js";

const normal_hell = ref("#");
const PE_hell = ref("#");
const drama_hell_st = ref("#");
const drama_hell_nd = ref("#");
const music_hell = ref("#");
const art_hell = ref("#");
const dance_hell = ref("#");
const language_hell = ref("#");

watch(datas, (new_data, old_data) => {
  normal_hell.value = new_data.hell[0].link;
  PE_hell.value = new_data.hell[1].link;
  drama_hell_st.value = new_data.hell[2].link;
  drama_hell_nd.value = new_data.hell[3].link;
  music_hell.value = new_data.hell[4].link;
  art_hell.value = new_data.hell[5].link;
  dance_hell.value = new_data.hell[6].link;
  language_hell.value = new_data.hell[7].link;
});
</script>
<template>
  <div id="register" class="h-12"></div>
  <div class="flex justify-center pt-10">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      公告榜單及報到編號
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

      <div
        class="grid grid-cols-1 flex-col items-center justify-center gap-3 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
      >
        <!-- 普通班 -->
        <a :href="normal_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:h-80"
          >
            <span class="text-center text-2xl font-black text-white">
              普通班免試榜單<br />及報到編號
            </span>
            <span class="pt-4 text-center text-white lg:pt-4">
              *優免榜單6/19已公告<br />*安置榜單3/31已公告
            </span>
          </div>
        </a>
        <!-- 體育班 -->
        <a :href="PE_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:h-80"
          >
            <span class="text-center text-2xl font-black text-white">
              體育班、運動<br />績優生報到編號
            </span>
            <span class="pt-4 text-center text-white lg:pt-4">
              *體育班.運動績優生<br />榜單5/8已公告
            </span>
          </div>
        </a>
        <!-- 戲劇班 -->
        <div class="flex flex-col gap-2">
          <a :href="drama_hell_st"
            ><div
              class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:py-16"
            >
              <span class="text-center text-2xl font-black text-white">
                戲劇班分發榜單<br />及報到編號
              </span>
              <span class="pt-4 text-center text-white lg:pt-4">
                *備取生遞補名單預定<br />7/12-17:00公告
              </span>
            </div></a
          >
          <a :href="drama_hell_nd">
            <div
              class="w-70 flex h-20 flex-col items-center justify-center rounded-2xl bg-[#34559D] lg:h-24"
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
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D] md:h-80 lg:h-56"
          >
            <span class="text-center text-2xl font-black text-white">
              音樂班榜單<br />及報到編號
            </span>
          </div>
        </a>
        <!-- 美術班 -->
        <a :href="art_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D]"
          >
            <span class="text-center text-2xl font-black text-white">
              美術班榜單<br />及報到編號
            </span>
          </div>
        </a>
        <!-- 舞蹈班 -->
        <a :href="dance_hell">
          <div
            class="w-70 flex h-56 flex-col items-center justify-center rounded-2xl bg-[#34559D]"
          >
            <span class="text-center text-2xl font-black text-white">
              舞蹈班分發榜單<br />及報到編號
            </span>
            <span class="pt-4 text-center text-white lg:pt-4">
              *以競榜單4/7已公告
            </span>
          </div>
        </a>
        <!-- 本土語文選課 -->
        <a :href="language_hell" class="md:col-span-2 lg:col-span-3">
          <div
            class="w-70 flex h-60 flex-col items-center justify-center rounded-2xl bg-[#9D3434] lg:h-40"
          >
            <div
              class="flex flex-col md:flex-row md:gap-4 lg:flex-row lg:gap-5"
            >
              <span class="text-center text-2xl font-black text-white">
                本土語文選課
              </span>
              <span
                class="pt-2 text-center text-2xl font-black text-white md:pt-0 lg:pt-0"
              >
                7/11(二) ~ 7/14(五)
              </span>
            </div>

            <span
              class="px-4 pt-3 text-center leading-7 text-white md:hidden lg:hidden lg:pt-4"
            >
              全體新生鏈結【本土語文選課】<br />google表單 (請用gmail帳號登<br />入，選課後收email儲存選課結<br />果，新生報到時出示選課結果)
            </span>
            <span
              class="hidden px-20 pt-6 text-center leading-7 text-white md:hidden lg:block lg:pt-4"
            >
              全體新生鏈結【本土語文選課】google表單
              <br />(請用gmail帳號登入，選課後收email儲存選課結果，新生報到時出示選課結果)
            </span>
            <span
              class="hidden px-4 pt-6 text-center leading-7 text-white md:block lg:hidden lg:pt-4"
            >
              全體新生鏈結【本土語文選課】google表單<br />
              (請用gmail帳號登入，選課後收email儲存選課結果，新生報到時出示選課結果)
            </span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
