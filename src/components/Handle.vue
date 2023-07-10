<script setup>
import { datas } from "../utils.js";
</script>
<template>
  <!-- Desktop -->
  <div id="handlee" class="hidden md:hidden lg:block">
    <div class="flex justify-center pb-6 pt-10">
      <div
        class="rounded-md bg-[#34559D] px-3 py-2 text-white shadow-md lg:text-2xl"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="grid grid-cols-2 gap-10">
        <div class="flex">
          <div
            class="flex flex-col items-center justify-center gap-8 rounded-l-xl bg-[#34559D] px-5 py-10"
          >
            <span class="text-3xl font-bold text-white"> 應 </span>
            <span class="text-3xl font-bold text-white"> 辦 </span>
          </div>

          <div class="rounded-r-xl bg-white p-6">
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="font-bold text-[#34559D]"
                >線上訂購校服(超商繳費)</span
              >
              <ul
                v-for="data in datas.clothes"
                :title="data.title"
                :key="data.title"
                :href="data.link"
                class="list-disc pl-6 pt-4 leading-10"
              >
                <a :href="href" target="_blank"
                  ><li class="underline">
                    {{ data.title }}
                  </li></a
                >
              </ul>
            </div>

            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="font-bold text-[#34559D]">校務系統新生填寫資料</span>
              <ul
                v-for="data in datas.write"
                :title="data.title"
                :key="data.title"
                :href="data.link"
                class="list-disc pl-6 pt-4 leading-10"
              >
                <a class="underline" :href="href" target="_blank"
                  ><li>{{ data.title }}</li></a
                >
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="font-bold text-[#34559D]"
                >校務系統多元選修選課(普體)</span
              >
              <ul
                v-for="data in datas.course"
                :title="data.title"
                :key="data.title"
                :href="data.link"
                class="list-disc pl-6 pt-4 leading-10"
              >
                <a :href="href" target="_blank" class="underline"
                  ><li>{{ data.title }}</li></a
                >
              </ul>
            </div>
          </div>
        </div>

        <div class="flex">
          <div
            class="flex flex-col items-center justify-center gap-8 rounded-l-xl bg-[#9D3434] px-5 py-10"
          >
            <span class="text-3xl font-bold text-white"> 選 </span>
            <span class="text-3xl font-bold text-white"> 辦 </span>
          </div>
          <div
            class="flex flex-col items-center justify-center gap-3 rounded-r-xl bg-white py-6 pl-8 pr-12"
          >
            <div
              class="rounded-xl border-2 border-dashed border-black py-8 pl-10 pr-12"
            >
              <span class="font-bold text-[#9D3434]">語文競賽增額報名</span>
              <ul
                v-for="data in datas.contest"
                :title="data.title"
                :key="data.title"
                :href="data.link"
                class="list-disc pl-6 pt-4 leading-10"
              >
                <a :href="href" target="_blank" class="underline"
                  ><li>{{ data.title }}</li></a
                >
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black py-8 pl-10 pr-20"
            >
              <span class="font-bold text-[#9D3434]">就學貸款申請</span>
              <ul
                v-for="data in datas.money"
                :title="data.title"
                :key="data.title"
                :href="data.link"
                class="list-disc pl-6 pt-4 leading-10"
              >
                <a :href="href" target="_blank" class="underline"
                  ><li>{{ data.title }}</li></a
                >
              </ul>
            </div>
            <br />

            <div
              class="rounded-xl border-2 border-dashed border-black py-8 pl-10 pr-20"
            >
              <span class="font-bold text-[#9D3434]">學生住宿申請</span>
              <ul
                v-for="data in datas.live"
                :title="data.title"
                :key="data.title"
                :href="data.link"
                class="list-disc pl-6 pt-4 leading-10"
              >
                <a :href="href" target="_blank" class="underline"
                  ><li>{{ data.title }}</li></a
                >
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile Tablet -->
  <div id="handle" class="lg:hidden">
    <div class="flex justify-center pb-6 pt-10">
      <div
        class="rounded-md bg-[#34559D] px-3 py-2 text-white shadow-md lg:text-2xl"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="flex flex-col items-center justify-center md:flex-row md:gap-3">
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#34559D] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 應 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-5 md:py-8">
          <div class="hidden p-1 md:block lg:hidden"></div>
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="font-bold text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul
              v-for="data in datas.clothes"
              :title="data.title"
              :key="data.title"
              :href="data.link"
              class="list-disc pl-4 pt-2 text-sm leading-10"
            >
              <a :href="href" target="_blank" class="underline"
                ><li>{{ data.title }}</li></a
              >
            </ul>
          </div>
          <br />

          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="font-bold text-[#34559D]">校務系統新生填寫資料</span>
            <ul
              v-for="data in datas.write"
              :title="data.title"
              :key="data.title"
              :href="data.link"
              class="list-disc pl-4 pt-2 text-sm leading-8"
            >
              <a class="underline" :href="href" target="_blank"
                ><li>{{ data.title }}</li></a
              >
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="font-bold text-[#34559D]"
              >校務系統多元選修選課(普體)</span
            >
            <ul
              v-for="data in datas.course"
              :title="data.title"
              :key="data.title"
              :href="data.link"
              class="list-disc pl-4 pt-2 text-sm leading-10"
            >
              <a :href="href" target="_blank" class="underline"
                ><li>{{ data.title }}</li></a
              >
            </ul>
          </div>
        </div>
      </div>
      <br />

      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#9D3434] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 選 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-6 md:py-11">
          <div
            class="rounded-xl border border-dashed border-black py-8 pl-6 pr-24"
          >
            <span class="font-bold text-[#9D3434]">語文競賽增額報名</span>
            <ul
              v-for="data in datas.contest"
              :title="data.title"
              :key="data.title"
              :href="data.link"
              class="list-disc pl-3 pt-2 text-sm leading-8"
            >
              <a :href="href" target="_blank" class="underline"
                ><li>{{ data.title }}</li></a
              >
            </ul>
          </div>
          <div class="p-4 md:block lg:hidden"></div>
          <div
            class="rounded-xl border border-dashed border-black py-8 pl-6 pr-24"
          >
            <span class="font-bold text-[#9D3434]">就學貸款申請</span>
            <ul
              v-for="data in datas.money"
              :title="data.title"
              :key="data.title"
              :href="data.link"
              class="list-disc pl-4 pt-2 text-sm leading-8"
            >
              <a :href="href" target="_blank" class="underline"
                ><li>{{ data.title }}</li></a
              >
              <a
                href="https://drive.google.com/file/d/1_CHoivZu3_4fcxoarj5DMR8hvTad2uzB/view?usp=sharing"
                target="_blank"
                class="underline"
                ><li>就學貸款申請說明</li></a
              >
            </ul>
          </div>
          <div class="p-4 md:block lg:hidden"></div>
          <div
            class="rounded-xl border border-dashed border-black py-8 pl-6 pr-24"
          >
            <span class="font-bold text-[#9D3434]">學生住宿申請</span>
            <ul
              v-for="data in datas.live"
              :title="data.title"
              :key="data.title"
              :href="data.link"
              class="list-disc pl-4 pt-2 text-sm leading-8"
            >
              <a :href="href" target="_blank" class="underline"
                ><li>{{ data.title }}</li></a
              >
            </ul>
          </div>
          <div class="p-2 md:block lg:hidden"></div>
        </div>
      </div>
    </div>
  </div>
</template>
