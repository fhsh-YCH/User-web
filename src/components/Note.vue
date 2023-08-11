//my note
<template>
  <nav
    class="bg-[#EBE7DB] p-4 rounded-t-xl flex w-full items-center justify-center fixed bottom-0 left-0 right-0 z-50"
  >
    <div class="flex justify-center items-center">
      <div class="">
        <button class="flex flex-col justify-center items-center">
          <p class="font-bold">新生入學時程表</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>
      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">新生線上報到</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>
      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">選課輔導手冊</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>
      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">暑假作業</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>
      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">應辦＆選辦事項</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>
      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">實體到校日期</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>

      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">其他宣導事項</p>
          <div
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>

      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">高一LINE家長群</p>
          <div
            class="bg-[#34559D] py-1 px-16 rounded-full fixed bottom-0"
          ></div>
        </button>
      </div>

      <div class="px-4">
        <button class="flex flex-col justify-center items-center pl-4">
          <p class="font-bold">學校簡介</p>
          <div
            class="bg-[#34559D] py-1 px-14 rounded-full fixed bottom-0"
          ></div>
        </button>
      </div>
    </div>
  </nav>
</template>

<template>
  <nav
    class="bg-[#EBE7DB] p-4 rounded-t-xl flex w-full items-center justify-center fixed bottom-0 left-0 right-0 z-50"
  >
    <div class="flex justify-center items-center">
      <div v-for="(item, index) in navItems" :key="index" class="px-4">
        <button
          class="flex flex-col justify-center items-center pl-4 focus:outline-none"
          :class="{ 'text-blue-500': activeIndex === index }"
          @click="handleNavItemClick(index)"
        >
          <p class="font-bold">{{ item.title }}</p>
          <div
            v-show="activeIndex !== index"
            class="bg-[#34559D] py-1 px-16 fixed bottom-0 rounded-full"
          ></div>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      navItems: [
        { title: "新生入學時程表", link: "#schedule" },
        { title: "新生線上報到", link: "#registration" },
        { title: "選課輔導手冊", link: "#course-guide" },
        { title: "暑假作業", link: "#summer-homework" },
        { title: "應辦＆選辦事項", link: "#tasks" },
        { title: "實體到校日期", link: "#physical-schooling" },
        { title: "其他宣導事項", link: "#other-info" },
        { title: "高一LINE家長群", link: "#line-group" },
        { title: "學校簡介", link: "#school-intro" },
      ],
    };
  },
  methods: {
    handleNavItemClick(index) {
      this.activeIndex = index;
      const navItem = this.navItems[index];
      const element = document.querySelector(navItem.link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
/* 在这里添加您的其他自定义样式 */
</style>

<template>
  <div id="#date" class="flex justify-center pt-10 pb-2">
    <span class="bg-[#34559D] px-3 py-2 text-white rounded-md shadow-md">
      新生實體到校日期
    </span>
  </div>
  <div class="">
    <div>
      <!-- 新生始業輔導實施計畫 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/16<br />公告
          </div>
          <span class="font-bold pr-12 pl-10 text-2xl">
            新生始業輔導<br />實施計畫
          </span>
        </button>
      </div>
      <!-- 高一編班座號學號 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/19<br />公告
          </div>
          <span class="font-bold pr-6 pl-4 text-2xl"> 高一編班座號學號 </span>
        </button>
      </div>
      <!-- 新生住宿名單 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-3 text-white font-bold text-l"
          >
            8/19<br />16:00<br />公告
          </div>
          <span class="font-bold pr-12 pl-10 text-2xl"> 新生住宿名單 </span>
        </button>
      </div>
      <!-- 新生始業輔導手冊 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-6 pl-4 text-2xl"> 新生始業輔導手冊 </span>
        </button>
      </div>
      <!-- 開學日實施計畫 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-10 pl-8 text-2xl"> 開學日實施計畫 </span>
        </button>
      </div>
    </div>
    <div>
      <!-- 學生開學日領取教科書 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-16 pl-14 text-2xl">
            學生開學日<br />領取教科書
          </span>
        </button>
      </div>
      <!-- 新生開學日領取校服 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-16 pl-14 text-2xl">
            新生開學日<br />領取校服
          </span>
        </button>
      </div>
      <!-- 學生信箱與單一身分帳號 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-12 pl-10 text-2xl">
            學生信箱與<br />單一身分帳號
          </span>
        </button>
      </div>
      <!-- 學生家長校務行政系統說明 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-6 pl-4 text-2xl">
            學生家長<br />校務行政系統說明
          </span>
        </button>
      </div>
      <!-- 校園繳費系統親子身分綁定 -->
      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/23<br />公告
          </div>
          <span class="font-bold pr-12 pl-10 text-2xl">
            校園繳費系統<br />親子身分綁定
          </span>
        </button>
      </div>
      <!-- 110-1學期行事曆 -->

      <div class="flex justify-center pt-4">
        <button
          class="bg-white rounded-full flex items-center border border-[#34559D]"
        >
          <div
            class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
          >
            8/24<br />公告
          </div>
          <span class="font-bold pr-7 pl-5 text-2xl"> 110-1學期行事曆 </span>
        </button>
      </div>
    </div>
  </div>
</template>

<template>
  <div id="#profile" class="flex justify-center pt-4">
    <div
      class="bg-[#34559D] px-5 py-1 rounded-t-lg text-white text-center shadow-md"
    >
      學校簡介
    </div>
  </div>
  <div class="bg-white w-full p-4 border border-[#34559D] shadow-md">
    <div class="flex overflow-x-scroll">
      <!-- 校長室 -->
      <div class="flex-none mr-4 p-4">
        <div
          class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
        >
          <div class="flex flex-col pr-4">
            <span class="font-bold text-[#34559D] text-3xl">校</span>
            <span class="font-bold text-[#34559D] text-3xl">長</span>
            <span class="font-bold text-[#34559D] text-3xl">室</span>
          </div>
          <img src="../assets/fake_pic.png" class="w-[155px]" />
        </div>
      </div>
      <!-- 學務處 -->
      <div class="flex-none mr-4 p-4">
        <div
          class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
        >
          <div class="flex flex-col pr-4">
            <span class="font-bold text-[#34559D] text-3xl">學</span>
            <span class="font-bold text-[#34559D] text-3xl">務</span>
            <span class="font-bold text-[#34559D] text-3xl">處</span>
          </div>
          <img src="../assets/fake_pic.png" class="w-[155px]" />
        </div>
      </div>
      <!-- 教務處 -->
      <div class="flex-none mr-4 p-4">
        <div
          class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
        >
          <div class="flex flex-col pr-4">
            <span class="font-bold text-[#34559D] text-3xl">教</span>
            <span class="font-bold text-[#34559D] text-3xl">務</span>
            <span class="font-bold text-[#34559D] text-3xl">處</span>
          </div>
          <img src="../assets/fake_pic.png" class="w-[155px]" />
        </div>
      </div>
      <!-- 圖書館 -->
      <div class="flex-none mr-4 p-4">
        <div
          class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
        >
          <div class="flex flex-col pr-4">
            <span class="font-bold text-[#34559D] text-3xl">圖</span>
            <span class="font-bold text-[#34559D] text-3xl">書</span>
            <span class="font-bold text-[#34559D] text-3xl">館</span>
          </div>
          <img src="../assets/fake_pic.png" class="w-[155px]" />
        </div>
      </div>
      <!-- 輔導室 -->
      <div class="flex-none mr-4 p-4">
        <div
          class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
        >
          <div class="flex flex-col pr-4">
            <span class="font-bold text-[#34559D] text-3xl">輔</span>
            <span class="font-bold text-[#34559D] text-3xl">導</span>
            <span class="font-bold text-[#34559D] text-3xl">室</span>
          </div>
          <img src="../assets/fake_pic.png" class="w-[155px]" />
        </div>
      </div>
      <!-- 總務處 -->
      <div class="flex-none mr-4 p-4">
        <div
          class="bg-white border border-[#34559D] pl-4 pr-5 py-6 shadow-lg flex"
        >
          <div class="flex flex-col pr-4">
            <span class="font-bold text-[#34559D] text-3xl">總</span>
            <span class="font-bold text-[#34559D] text-3xl">務</span>
            <span class="font-bold text-[#34559D] text-3xl">處</span>
          </div>
          <img src="../assets/fake_pic.png" class="w-[155px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div id="handle">
    <div class="flex justify-center pt-10 pb-6">
      <div
        class="bg-[#34559D] px-3 py-2 md:text-xl lg:text-2xl md:px-4 md:py-1 lg:px-6 lg:py-2 text-white rounded-md shadow-md"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="lg:flex lg:justify-center lg:gap-6">
      <div class="flex justify-center">
        <div class="flex">
          <div
            class="bg-[#34559D] px-2 pt-2 md:px-4 md:font-bold lg:font-black pb-1 lg:px-4 text-white rounded-l-md flex flex-col justify-center items-center gap-2"
          >
            <p>應</p>
            <p>辦</p>
          </div>
          <div
            class="px-9 py-6 md:px-10 lg:px-8 lg:w-[35vw] lg:h-[30vw] bg-white border border-[#34559D] rounded-r-md shadow-md md:flex md:gap-3 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2"
          >
            <button
              class="px-14 py-3 md:py-4 md:px-12 md:text-xl lg:text-2xl lg:px-20 outline-dashed"
            >
              學雜費減免申請
            </button>
            <div class="p-3"></div>
            <button
              class="px-16 py-3 md:px-14 md:py-4 md:text-xl lg:text-2xl lg:px-24 outline-dashed"
            >
              就學貸款申請
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center pt-4">
        <div class="flex">
          <div
            class="bg-[#34559D] px-2 pt-2 pb-1 md:px-4 lg:px-4 md:font-bold lg:font-black text-white rounded-l-md flex flex-col justify-center items-center gap-2"
          >
            <p>選</p>
            <p>辦</p>
          </div>
          <div
            class="px-9 py-6 lg:px-8 lg:w-[35vw] lg:h-[30vw] bg-white border md:px-10 border-[#34559D] rounded-r-md shadow-md lg:py-10"
          >
            <div
              class="md:flex md:flex-col lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2"
            >
              <div
                class="md:flex md:gap-3 lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-2"
              >
                <button
                  class="px-14 py-3 md:py-4 md:px-12 md:text-xl lg:text-2xl lg:px-20 outline-dashed"
                >
                  學雜費減免申請
                </button>
                <div class="p-3"></div>
                <button
                  class="px-16 py-3 md:px-14 md:py-4 md:text-xl lg:text-2xl lg:px-24 outline-dashed"
                >
                  就學貸款申請
                </button>
              </div>
              <div class="p-3"></div>
              <button
                class="px-16 py-3 md:px-14 md:py-4 md:text-xl lg:text-2xl lg:px-24 outline-dashed"
              >
                就學貸款申請
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<div class="lg:flex-col lg:flex">
    <div class="lg:flex lg:grid-cols-2 lg:gap-x-10 lg:justify-center">
      <div>
        <!-- 新生始業輔導實施計畫 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/16<br />公告
            </div>
            <span class="font-bold pr-12 pl-10 text-2xl">
              新生始業輔導<br />實施計畫
            </span>
          </button>
        </div>
        <!-- 高一編班座號學號 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/19<br />公告
            </div>
            <span class="font-bold pr-6 pl-4 text-2xl"> 高一編班座號學號 </span>
          </button>
        </div>
        <!-- 新生住宿名單 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-3 text-white font-bold text-l"
            >
              8/19<br />16:00<br />公告
            </div>
            <span class="font-bold pr-12 pl-10 text-2xl"> 新生住宿名單 </span>
          </button>
        </div>
        <!-- 新生始業輔導手冊 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-6 pl-4 text-2xl"> 新生始業輔導手冊 </span>
          </button>
        </div>
        <!-- 開學日實施計畫 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-10 pl-8 text-2xl"> 開學日實施計畫 </span>
          </button>
        </div>
      </div>
      <div>
        <!-- 學生開學日領取教科書 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-16 pl-14 text-2xl">
              學生開學日<br />領取教科書
            </span>
          </button>
        </div>
        <!-- 新生開學日領取校服 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-16 pl-14 text-2xl">
              新生開學日<br />領取校服
            </span>
          </button>
        </div>
        <!-- 學生信箱與單一身分帳號 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-12 pl-10 text-2xl">
              學生信箱與<br />單一身分帳號
            </span>
          </button>
        </div>
        <!-- 學生家長校務行政系統說明 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-6 pl-4 text-2xl">
              學生家長<br />校務行政系統說明
            </span>
          </button>
        </div>
        <!-- 校園繳費系統親子身分綁定 -->
        <div class="flex justify-center pt-4">
          <button
            class="bg-white rounded-full flex items-center border border-[#34559D]"
          >
            <div
              class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
            >
              8/23<br />公告
            </div>
            <span class="font-bold pr-12 pl-10 text-2xl">
              校園繳費系統<br />親子身分綁定
            </span>
          </button>
        </div>
      </div>
    </div>
    <!-- 110-1學期行事曆 -->

    <div class="flex justify-center pt-4">
      <button
        class="bg-white rounded-full flex items-center border border-[#34559D]"
      >
        <div
          class="rounded-full bg-[#34559D] px-6 py-4 text-white font-bold text-xl"
        >
          8/24<br />公告
        </div>
        <span class="font-bold pr-7 pl-5 text-2xl"> 110-1學期行事曆 </span>
      </button>
    </div>
  </div>



  <script setup>
import DateAnnounce from "../componentss/DateAnnounce.vue";

const temp_datas = [
  {
    date: "8/16",
    content: "新生始業輔導實施計劃",
    href: "#",
    splitNumber: 6,
  },
  {
    date: "8/16",
    content: "高一編班座號學號",
    href: "#",
    splitNumber: 8,
  },
  {
    date: "8/16",
    content: "新生住宿名單",
    href: "#",
    splitNumber: 6,
  },
  {
    date: "8/23",
    content: "新生始業輔導手冊",
    href: "#",
    splitNumber: 8,
  },
  {
    date: "8/23",
    content: "開學日實施計畫",
    href: "#",
    splitNumber: 7,
  },
  {
    date: "8/23",
    content: "學生開學日領取教科書",
    href: "#",
    splitNumber: 5,
  },
  {
    date: "8/23",
    content: "新生開學日領取校服",
    href: "#",
    splitNumber: 5,
  },
  {
    date: "8/23",
    content: "學生信箱與單一身分帳號",
    href: "#",
    splitNumber: 5,
  },
  {
    date: "8/23",
    content: "學生家長校務行政系統說明",
    href: "#",
    splitNumber: 4,
  },
  {
    date: "8/23",
    content: "校園繳費系統親子身分綁定",
    href: "#",
    splitNumber: 6,
  },
  {
    date: "8/23",
    content: "110-1學期行事曆",
    href: "#",
    splitNumber: 10,
  },
];
</script>
<template>
  <div id="date" class="flex justify-center pt-12 pb-2">
    <span
      class="bg-[#34559D] px-3 py-2 md:text-xl md:px-4 md:py-1 lg:px-6 lg:py-2 lg:text-2xl text-white rounded-md shadow-md"
    >
      新生實體到校日期
    </span>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-24 gap-x-14 gap-y-3"
  >
    <DateAnnounce
      v-for="(data, index) in temp_datas"
      :date="data.date"
      :href="data.href"
      :content_line1="data.content.slice(0, data.splitNumber)"
      :content_line2="data.content.slice(data.splitNumber)"
      :class="{
        'justify-self-end ': index % 2 === 0,
      }"
    />
  </div>
</template>


<script setup></script>
<template>
  <div id="otherprecautions" class="flex justify-center pt-6">
    <span class="bg-[#34559D] px-3 py-2 text-white rounded-t-md shadow-md">
      其他注意事項
    </span>
  </div>
  <div class="flex justify-center items-center">
    <div
      class="p-4 bg-white rounded-lg border border-[#34559D] shadow-md grid grid-cols-2 gap-3 gap-y-4"
    >
      <!-- 語文競賽增額報名(教學組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>語文競賽增額報名<br />(教學組)</span>
      </button>
      <!-- 學科增能(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] rounded-xl text-center font-bold"
      >
        <span>學科增能<br />(實研組)</span>
      </button>
      <!-- 彈性學習說明(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>彈性學習說明<br />(實研組)</span>
      </button>
      <!-- 跑班課程說明(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>跑班課程說明<br />(實研組)</span>
      </button>
      <!-- 臺英學士培育計畫(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>臺英學士培育計畫<br />(實研組)</span>
      </button>
      <!-- 圖書館介紹(圖書館) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>圖書館介紹<br />(圖書館)</span>
      </button>
      <!-- 語文競賽增額報名(教學組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>語文競賽增額報名<br />(教學組)</span>
      </button>
      <!-- 學科增能(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] rounded-xl text-center font-bold"
      >
        <span>學科增能<br />(實研組)</span>
      </button>
      <!-- 彈性學習說明(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>彈性學習說明<br />(實研組)</span>
      </button>
      <!-- 跑班課程說明(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>跑班課程說明<br />(實研組)</span>
      </button>
      <!-- 臺英學士培育計畫(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>臺英學士培育計畫<br />(實研組)</span>
      </button>
      <!-- 圖書館介紹(圖書館) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>圖書館介紹<br />(圖書館)</span>
      </button>
      <!-- 語文競賽增額報名(教學組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>語文競賽增額報名<br />(教學組)</span>
      </button>
      <!-- 學科增能(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] rounded-xl text-center font-bold"
      >
        <span>學科增能<br />(實研組)</span>
      </button>
      <!-- 彈性學習說明(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>彈性學習說明<br />(實研組)</span>
      </button>
      <!-- 跑班課程說明(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>跑班課程說明<br />(實研組)</span>
      </button>
      <!-- 臺英學士培育計畫(實研組) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>臺英學士培育計畫<br />(實研組)</span>
      </button>
      <!-- 圖書館介紹(圖書館) -->
      <button
        class="bg-white border-4 border-[#34559D] px-2 py-3 rounded-xl text-center font-bold"
      >
        <span>圖書館介紹<br />(圖書館)</span>
      </button>
    </div>
  </div>
</template>

<template>
  <div id="handle" class="block md:block lg:hidden">
    <div class="flex justify-center pt-10 pb-6">
      <div
        class="bg-[#34559D] px-3 py-3 md:text-xl lg:text-2xl md:px-4 md:py-1 text-white rounded-md shadow-md"
      >
        新生應辦&選辦事項
      </div>
    </div>

    <div class="flex justify-center">
      <div class="flex">
        <div
          class="bg-[#34559D] px-2 pt-2 md:px-4 md:font-bold lg:font-black pb-1 text-white rounded-l-md flex flex-col justify-center items-center gap-2"
        >
          <p>應</p>
          <p>辦</p>
        </div>
        <div
          class="px-9 py-6 md:px-10 bg-white border border-[#34559D] rounded-r-md shadow-md md:flex md:gap-3"
        >
          <button class="px-14 py-3 md:py-4 md:px-12 md:text-xl outline-dashed">
            學雜費減免申請
          </button>
          <div class="p-3"></div>
          <button class="px-16 py-3 md:px-14 md:py-4 md:text-xl outline-dashed">
            就學貸款申請
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center pt-4">
      <div class="flex">
        <div
          class="bg-[#34559D] px-2 pt-2 pb-1 md:px-4 md:font-bold text-white rounded-l-md flex flex-col justify-center items-center gap-2"
        >
          <p>選</p>
          <p>辦</p>
        </div>
        <div
          class="px-9 py-6 bg-white border md:px-10 border-[#34559D] rounded-r-md shadow-md"
        >
          <div class="md:flex md:flex-col">
            <div class="md:flex md:gap-3">
              <button
                class="px-14 py-3 md:py-4 md:px-12 md:text-xl outline-dashed"
              >
                學雜費減免申請
              </button>
              <div class="p-3"></div>
              <button
                class="px-16 py-3 md:px-14 md:py-4 md:text-xl outline-dashed"
              >
                就學貸款申請
              </button>
            </div>
            <div class="p-3"></div>
            <button
              class="px-16 py-3 md:px-14 md:py-4 md:text-xl outline-dashed"
            >
              就學貸款申請
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="handlee" class="hidden md:hidden lg:block">
    <div class="flex justify-center pt-10 pb-6">
      <div
        class="bg-[#34559D] px-3 py-2 lg:text-2xl text-white rounded-md shadow-md"
      >
        新生應辦&選辦事項
      </div>
    </div>
    <div class="flex justify-center items-center gap-5">
      <div class="flex justify-center">
        <div class="flex">
          <div
            class="bg-[#34559D] px-2 pt-2 pb-1 text-white rounded-l-md flex flex-col justify-center items-center gap-2"
          >
            <p>應</p>
            <p>辦</p>
          </div>
          <div
            class="px-9 py-24 bg-white border border-[#34559D] rounded-r-md shadow-md"
          >
            <button class="px-14 py-3 outline-dashed">學雜費減免申請</button>
            <div class="p-3"></div>
            <button class="px-16 py-3 outline-dashed">就學貸款申請</button>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center pt-4">
        <div class="flex">
          <div
            class="bg-[#34559D] px-2 pt-2 pb-1 text-white rounded-l-md flex flex-col justify-center items-center gap-2"
          >
            <p>選</p>
            <p>辦</p>
          </div>
          <div
            class="px-9 py-14 bg-white border border-[#34559D] rounded-r-md shadow-md"
          >
            <div class="">
              <div class="">
                <button class="px-14 py-3 outline-dashed">
                  學雜費減免申請
                </button>
                <div class="p-3"></div>
                <button class="px-16 py-3 outline-dashed">就學貸款申請</button>
              </div>
              <div class="p-3"></div>
              <button class="px-16 py-3 outline-dashed">就學貸款申請</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
;

<script setup>
import { ref } from "vue";
const one = ref("https://www.example.com");
const two = ref("https://www.example.com");
const three = ref("https://www.example.com");
const four = ref("https://www.example.com");
const five = ref("https://www.example.com");
const six = ref("https://www.example.com");
const seven = ref("https://www.example.com");
const eight = ref("https://www.example.com");
const nine = ref("https://www.example.com");
const ten = ref("https://www.example.com");
const eleven = ref("https://www.example.com");
const twelve = ref("https://www.example.com");
const thirteen = ref("https://www.example.com");
const fourteen = ref("https://www.example.com");
const fourtyfour = ref("https://www.example.com");
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
    <div class="">
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-8 rounded-l-xl bg-[#34559D] px-5 py-10"
        >
          <span class="text-3xl font-bold text-white"> 應 </span>
          <span class="text-3xl font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-6">
          <div class="rounded-xl border-2 border-dashed border-black px-8 py-4">
            <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pl-6 pt-4 leading-10">
              <a :href="three"><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
              <a :href="four"><li>新生線上訂購校服流程說明</li></a>
              <a :href="five"><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border-2 border-dashed border-black px-8 py-4">
            <span class="text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pl-6 pt-4 leading-10">
              <a :href="eight"><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a :href="ten"><li>校務系統新生填寫應備資料說明</li></a>
              <a :href="twelve"><li>校務系統高一多元選修選課說明(普體)</li></a>
              <a :href="nine"><li>學生受款帳戶登記說明</li></a>
              <a :href="eleven"><li>教育部12年國教免學費補助查調說明</li></a>
              <a :href="fourtyfour"><li>數位學生證整合服務說明</li></a>
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
        <div class="rounded-r-xl bg-white p-6">
          <div class="rounded-xl border-2 border-dashed border-black px-8 py-4">
            <span class="text-[#9D3434]">學雜費減免申請</span>
            <ul class="list-disc pl-6 pt-4 leading-10">
              <a :href="one"><li>學雜費減免申請鏈結表單</li></a>
              <a :href="two"><li>學雜費減免申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border-2 border-dashed border-black px-8 py-4">
            <span class="text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pl-6 pt-4 leading-10">
              <a :href="six"><li>就學貸款申請鏈結表單</li></a>
              <a :href="seven"><li>就學貸款申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border-2 border-dashed border-black px-8 py-4">
            <span class="text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pl-6 pt-4 leading-10">
              <a :href="thirteen"><li>學生住宿申請鏈結表單</li></a>
              <a :href="fourteen"><li>學生住宿申請說明</li></a>
            </ul>
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
    <div class="flex flex-col items-center justify-center md:flex-row md:gap-5">
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#34559D] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 應 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-5 md:py-8">
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-10">
              <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
              <a><li>新生線上訂購校服流程說明</li></a>
              <a><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />

          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a><li>學生受款帳戶登記說明</li></a>
              <a><li>校務系統新生填寫應備資料說明</li></a>
              <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a><li>校務系統高一多元選修選課說明(普體)</li></a>
              <a><li>數位學生證整合服務說明</li></a>
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
        <div class="rounded-r-xl bg-white p-6">
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">學雜費減免申請</span>
            <ul class="list-disc pl-3 pt-2 text-sm leading-8">
              <a><li>學雜費減免申請鏈結表單</li></a>
              <a><li>學雜費減免申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>就學貸款申請鏈結表單</li></a>
              <a><li>就學貸款申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>學生住宿申請鏈結表單</li></a>
              <a><li>學生住宿申請說明</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
              <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
                <a><li>新生線上訂購校服流程說明</li></a>
                <a><li>復興高中新生校服介紹</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="text-[#34559D]">校務系統新生填寫資料</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
                <a><li>校務系統新生填寫應備資料說明</li></a>
                <a><li>校務系統高一多元選修選課說明(普體)</li></a>
                <a><li>學生受款帳戶登記說明</li></a>
                <a><li>教育部12年國教免學費補助查調說明</li></a>
                <a><li>數位學生證整合服務說明</li></a>
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
          <div class="rounded-r-xl bg-white py-6 pl-10 pr-14">
            <div
              class="rounded-xl border-2 border-dashed border-black py-4 pl-10 pr-16"
            >
              <span class="text-[#9D3434]">學雜費減免申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>學雜費減免申請鏈結表單</li></a>
                <a><li>學雜費減免申請說明</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black py-4 pl-10 pr-16"
            >
              <span class="text-[#9D3434]">就學貸款申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>就學貸款申請鏈結表單</li></a>
                <a><li>就學貸款申請說明</li></a>
              </ul>
            </div>
            <br />
            <div
              class="rounded-xl border-2 border-dashed border-black py-4 pl-10 pr-16"
            >
              <span class="text-[#9D3434]">學生住宿申請</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>學生住宿申請鏈結表單</li></a>
                <a><li>學生住宿申請說明</li></a>
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
    <div class="flex flex-col items-center justify-center md:flex-row md:gap-5">
      <div class="flex">
        <div
          class="flex flex-col items-center justify-center gap-4 rounded-l-xl bg-[#34559D] px-2 py-5"
        >
          <span class="text-md font-bold text-white"> 應 </span>
          <span class="text-md font-bold text-white"> 辦 </span>
        </div>
        <div class="rounded-r-xl bg-white p-5 md:py-8">
          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-10">
              <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
              <a><li>新生線上訂購校服流程說明</li></a>
              <a><li>復興高中新生校服介紹</li></a>
            </ul>
          </div>
          <br />

          <div class="rounded-xl border border-dashed border-black p-3">
            <span class="text-[#34559D]">校務系統新生填寫資料</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a><li>學生受款帳戶登記說明</li></a>
              <a><li>校務系統新生填寫應備資料說明</li></a>
              <a><li>新生填寫資料(7/21鏈結校務系統)</li></a>
              <a><li>校務系統高一多元選修選課說明(普體)</li></a>
              <a><li>數位學生證整合服務說明</li></a>
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
        <div class="rounded-r-xl bg-white p-6">
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">學雜費減免申請</span>
            <ul class="list-disc pl-3 pt-2 text-sm leading-8">
              <a><li>學雜費減免申請鏈結表單</li></a>
              <a><li>學雜費減免申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">就學貸款申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>就學貸款申請鏈結表單</li></a>
              <a><li>就學貸款申請說明</li></a>
            </ul>
          </div>
          <br />
          <div class="rounded-xl border border-dashed border-black px-12 py-5">
            <span class="text-[#9D3434]">學生住宿申請</span>
            <ul class="list-disc pl-4 pt-2 text-sm leading-8">
              <a><li>學生住宿申請鏈結表單</li></a>
              <a><li>學生住宿申請說明</li></a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<div
              class="rounded-xl border-2 border-dashed border-black px-8 py-4"
            >
              <span class="text-[#34559D]">線上訂購校服(超商繳費)</span>
              <ul class="list-disc pl-6 pt-4 leading-10">
                <a><li>新生線上訂購校服(7/21鏈結飛宇系統)</li></a>
                <a><li>新生線上訂購校服流程說明</li></a>
                <a><li>復興高中新生校服介紹</li></a>
              </ul>
            </div>


            <button @click="toggleMenu" class="absolute right-8">
          <img src="../assets/menu_icon.png" alt="Menu" class="h-6 w-6" />
        </button>
        <div v-if="isMenuOpen">
          <div
            class="absolute right-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-50"
            @click="closeModel"
          >
            <ul class="absolute right-10 top-10">
              <li>
                <a
                  id="timeline"
                  class="rounded-full bg-white px-6 py-3 font-black text-[#34559D]"
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
            </ul>
          </div>
        </div>

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

<script setup>
import { ref } from "vue";

const hk1 = ref("https://www.example.com");
const hk2 = ref("https://www.example.com");
const hk3 = ref("https://www.example.com");
</script>

<template>
  <div id="homework" class="flex justify-center pt-8">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      新生暑假作業
    </div>
  </div>
  <div class="flex justify-center">
    <div
      class="flex flex-col gap-8 rounded-lg border border-[#34559D] bg-white px-4 py-6 shadow-md md:px-7 md:py-10 lg:px-24 lg:py-10"
    >
      <div class="flex items-center">
        <a :href="hk1">
          <button
            role="button"
            class="button-name px-3 py-2 text-sm md:px-12 md:py-3 md:text-2xl lg:px-14 lg:py-4 lg:text-3xl"
          >
            1. 新生暑假作業說明（教學組）
          </button>
        </a>
      </div>
      <div class="flex items-center">
        <a :href="hk2">
          <button
            role="button"
            class="button-name px-3 py-2 text-sm md:px-12 md:py-3 md:text-2xl lg:px-14 lg:py-4 lg:text-3xl"
          >
            2. 新生數學暑假作業（請列印前8頁列印）
          </button>
        </a>
      </div>

      <div class="flex items-center justify-center">
        <a :href="hk3">
          <button
            role="button"
            class="button-name px-3 py-2 text-sm md:px-12 md:py-3 md:text-2xl lg:px-14 lg:py-4 lg:text-3xl"
          >
            3. 新生數學銜接教材（完整版51頁供參考）
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<a
                  v-for="data in datas.clothes"
                  :content="data.title"
                  :href="data.link"
                  ><li>新生線上訂購校服流程說明</li></a
                >
                <a
                  v-for="data in datas.clothes"
                  :content="data.title"
                  :href="data.link"
                  ><li>復興高中新生校服介紹</li></a
                >


                <template>
  <div id="profile" class="flex justify-center pt-12">
    <div
      class="flex items-center justify-center rounded-t-lg bg-[#34559D] px-5 py-1 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      學校簡介
    </div>
  </div>
  <div class="lg:hidden">
    <div class="w-full border border-[#34559D] bg-white p-4 shadow-md">
      <div class="flex overflow-x-scroll">
        <!-- 校長室 -->
        <div class="mr-4 flex-none p-4">
          <div
            class="flex border border-[#34559D] bg-white py-6 pl-4 pr-5 shadow-lg"
          >
            <div class="flex flex-col pr-4">
              <span class="text-3xl font-bold text-[#34559D]">校</span>
              <span class="text-3xl font-bold text-[#34559D]">長</span>
              <span class="text-3xl font-bold text-[#34559D]">室</span>
            </div>
            <a
              ><iframe
                class="h-[110px] w-[155px]"
                src="http://www.fhsh.tp.edu.tw/"
              >
                你的瀏覽器不支援 iframe
              </iframe></a
            >
          </div>
        </div>
        <!-- 學務處 -->
        <div class="mr-4 flex-none p-4">
          <div
            class="flex border border-[#34559D] bg-white py-6 pl-4 pr-5 shadow-lg"
          >
            <div class="flex flex-col pr-4">
              <span class="text-3xl font-bold text-[#34559D]">學</span>
              <span class="text-3xl font-bold text-[#34559D]">務</span>
              <span class="text-3xl font-bold text-[#34559D]">處</span>
            </div>
            <iframe
              class="h-[110px] w-[155px]"
              src="http://www.fhsh.tp.edu.tw/"
            >
              你的瀏覽器不支援 iframe
            </iframe>
          </div>
        </div>
        <!-- 教務處 -->
        <div class="mr-4 flex-none p-4">
          <div
            class="flex border border-[#34559D] bg-white py-6 pl-4 pr-5 shadow-lg"
          >
            <div class="flex flex-col pr-4">
              <span class="text-3xl font-bold text-[#34559D]">教</span>
              <span class="text-3xl font-bold text-[#34559D]">務</span>
              <span class="text-3xl font-bold text-[#34559D]">處</span>
            </div>
            <iframe
              class="h-[110px] w-[155px]"
              src="http://www.fhsh.tp.edu.tw/"
            >
              你的瀏覽器不支援 iframe
            </iframe>
          </div>
        </div>
        <!-- 圖書館 -->
        <div class="mr-4 flex-none p-4">
          <div
            class="flex border border-[#34559D] bg-white py-6 pl-4 pr-5 shadow-lg"
          >
            <div class="flex flex-col pr-4">
              <span class="text-3xl font-bold text-[#34559D]">圖</span>
              <span class="text-3xl font-bold text-[#34559D]">書</span>
              <span class="text-3xl font-bold text-[#34559D]">館</span>
            </div>
            <iframe
              class="h-[110px] w-[155px]"
              src="http://www.fhsh.tp.edu.tw/"
            >
              你的瀏覽器不支援 iframe
            </iframe>
          </div>
        </div>
        <!-- 輔導室 -->
        <div class="mr-4 flex-none p-4">
          <div
            class="flex border border-[#34559D] bg-white py-6 pl-4 pr-5 shadow-lg"
          >
            <div class="flex flex-col pr-4">
              <span class="text-3xl font-bold text-[#34559D]">輔</span>
              <span class="text-3xl font-bold text-[#34559D]">導</span>
              <span class="text-3xl font-bold text-[#34559D]">室</span>
            </div>
            <iframe
              class="h-[110px] w-[155px]"
              src="http://www.fhsh.tp.edu.tw/"
            >
              你的瀏覽器不支援 iframe
            </iframe>
          </div>
        </div>
        <!-- 總務處 -->
        <div class="mr-4 flex-none p-4">
          <div
            class="flex border border-[#34559D] bg-white py-6 pl-4 pr-5 shadow-lg"
          >
            <div class="flex flex-col pr-4">
              <span class="text-3xl font-bold text-[#34559D]">總</span>
              <span class="text-3xl font-bold text-[#34559D]">務</span>
              <span class="text-3xl font-bold text-[#34559D]">處</span>
            </div>
            <iframe
              class="h-[110px] w-[155px]"
              src="http://www.fhsh.tp.edu.tw/"
            >
              你的瀏覽器不支援 iframe
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden md:hidden lg:flex lg:items-center lg:justify-center">
    <div
      class="flex w-[90vw] items-center justify-center rounded-xl border-2 border-[#34559D] bg-white p-4 shadow-md"
    >
      <div class="flex flex-col">
        <div class="flex">
          <!-- 校長室 -->
          <div class="mr-4 flex-none p-4">
            <div
              class="flex border-2 border-[#34559D] bg-white py-9 pl-7 pr-8 shadow-lg"
            >
              <div class="flex flex-col pr-4">
                <span class="text-4xl font-bold text-[#34559D]">校</span>
                <span class="text-4xl font-bold text-[#34559D]">長</span>
                <span class="text-4xl font-bold text-[#34559D]">室</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 學務處 -->
          <div class="mr-4 flex-none p-4">
            <div
              class="flex border-2 border-[#34559D] bg-white py-9 pl-7 pr-8 shadow-lg"
            >
              <div class="flex flex-col pr-4">
                <span class="text-4xl font-bold text-[#34559D]">學</span>
                <span class="text-4xl font-bold text-[#34559D]">務</span>
                <span class="text-4xl font-bold text-[#34559D]">處</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 教務處 -->
          <div class="mr-4 flex-none p-4">
            <div
              class="flex border-2 border-[#34559D] bg-white py-9 pl-7 pr-8 shadow-lg"
            >
              <div class="flex flex-col pr-4">
                <span class="text-4xl font-bold text-[#34559D]">教</span>
                <span class="text-4xl font-bold text-[#34559D]">務</span>
                <span class="text-4xl font-bold text-[#34559D]">處</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
        </div>
        <div class="flex">
          <!-- 圖書館 -->
          <div class="mr-4 flex-none p-4">
            <div
              class="flex border-2 border-[#34559D] bg-white py-9 pl-7 pr-8 shadow-lg"
            >
              <div class="flex flex-col pr-4">
                <span class="text-4xl font-bold text-[#34559D]">圖</span>
                <span class="text-4xl font-bold text-[#34559D]">書</span>
                <span class="text-4xl font-bold text-[#34559D]">館</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 輔導室 -->
          <div class="mr-4 flex-none p-4">
            <div
              class="flex border-2 border-[#34559D] bg-white py-9 pl-7 pr-8 shadow-lg"
            >
              <div class="flex flex-col pr-4">
                <span class="text-4xl font-bold text-[#34559D]">輔</span>
                <span class="text-4xl font-bold text-[#34559D]">導</span>
                <span class="text-4xl font-bold text-[#34559D]">室</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
          <!-- 總務處 -->
          <div class="mr-4 flex-none p-4">
            <div
              class="flex border-2 border-[#34559D] bg-white py-9 pl-7 pr-8 shadow-lg"
            >
              <div class="flex flex-col pr-4">
                <span class="text-4xl font-bold text-[#34559D]">總</span>
                <span class="text-4xl font-bold text-[#34559D]">務</span>
                <span class="text-4xl font-bold text-[#34559D]">處</span>
              </div>
              <img src="../assets/fake_pic.png" class="w-[190px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>












<template>
  <div v-show="isModalOpen.value">
    <div
      class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
    >
      <div
        class="mb-28 flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#FAF7EF] bg-[#FAF7EF] p-0 sm:left-5 sm:top-5 md:left-0 md:top-0 md:mb-16 md:max-w-xl lg:mb-0 lg:border-[#34559D] lg:px-6 lg:py-5"
      >
        <div class="relative">
          <!-- 使用 v-for 生成幻燈片 -->
          <div
            v-for="(slide, index) in slides.data"
            :key="index"
            :class="{ slide: true, hidden: index !== slideIndex - 1 }"
          >
            <a :href="slide.href">
              <img
                :src="slide.img_src"
                class="lg:-webkit-500 w-full lg:h-[500px]"
              />
            </a>
          </div>

          <!-- The previous button -->
          <a
            class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/30 p-4 text-white hover:bg-black/50 hover:text-amber-500"
            @click="() => moveSlide(-1)"
            >❮</a
          >

          <!-- The next button -->
          <a
            class="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/30 p-4 text-white hover:bg-black/50 hover:text-amber-500"
            @click="handleNextClick"
            >❯</a
          >
        </div>
        <div class="hidden md:hidden lg:flex lg:items-center lg:justify-center">
          <button
            v-if="closeCounter.value >= 1"
            @click="closeModel"
            class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TechPoster from "../assets/fhsh_freshman_112.png";
import MediaPoster from "../assets/fhsh_poster.png";

const isModalOpen = ref(true);
const closeCounter = ref(0);

const closeModel = () => {
  isModalOpen.value = false;
};

const slides = ref({
  now_index: 0,
  data: [
    {
      href: "https://forms.gle/MqyJwotKKT6qthH36",
      img_src: TechPoster,
    },
    {
      href: "https://forms.gle/MqyJwotKKT6qthH36",
      img_src: MediaPoster,
    },
  ],
});

let slideIndex = 1;

onMounted(() => {
  showSlide(slideIndex);
});

function moveSlide(moveStep) {
  slideIndex = (slideIndex + moveStep + slides.value.data.length) % slides.value.data.length;
  showSlide(slideIndex);
}

function showSlide(n) {
  const slidesList = document.getElementsByClassName("slide");

  if (n < 1) {
    slideIndex = slidesList.length;
  } else if (n > slidesList.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slidesList.length; i++) {
    slidesList[i].classList.add("hidden");
  }

  slidesList[slideIndex - 1].classList.remove("hidden");
}

function handleNextClick() {
  moveSlide(1);

  if (slideIndex >= 2) {
    closeCounter.value = 1;
  }
}
</script>




<template>
  <div v-if="isModalOpen.value">
    <div
      class="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-auto bg-black/70 p-4"
    >
      <div
        class="mb-20 flex flex-col items-center justify-center gap-2 lg:flex-none"
      >
        <div
          class="mb-4 flex flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-4 border-[#FAF7EF] bg-[#FAF7EF] md:mb-6 md:max-w-xl lg:mb-0 lg:border-[#34559D] lg:px-6 lg:py-5"
        >
          <div class="relative">
            <!-- 使用 v-for 生成幻燈片 -->
            <div
              v-for="(slide, index) in slides.data"
              :key="index"
              :class="{ slide: true, hidden: index !== slideIndex - 1 }"
            >
              <a :href="slide.href">
                <img
                  :src="slide.img_src"
                  class="lg:-webkit-500 w-full lg:h-[500px]"
                />
              </a>
            </div>

            <!-- The previous button -->
            <!-- The next button -->
            <a
              class="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-[#9D3434] px-5 py-2 text-center text-2xl font-black text-white lg:-right-5"
              @click="handleNextClick"
              >❯</a
            >
          </div>
          <div
            class="hidden md:hidden lg:flex lg:items-center lg:justify-center"
          >
            <button
              v-if="closeCounter.value >= 1"
              @click="closeModel"
              class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
            >
              關閉
            </button>
          </div>
        </div>
        <div class="lg:hidden">
          <button
            v-if="closeCounter.value >= 1"
            @click="closeModel"
            class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import TechPoster from "../assets/fhsh_freshman_112.png";
import MediaPoster from "../assets/fhsh_poster.png";

const isModalOpen = reactive({ value: true });
const closeCounter = reactive({ value: 0 });

const closeModel = () => {
  isModalOpen.value = false;
};

const slides = reactive({
  now_index: 0,
  data: [
    {
      href: "https://forms.gle/MqyJwotKKT6qthH36",
      img_src: TechPoster,
    },
    {
      href: "https://forms.gle/MqyJwotKKT6qthH36",
      img_src: MediaPoster,
    },
  ],
});

let slideIndex = 1;

onMounted(() => {
  showSlide(slideIndex);
});

function moveSlide(moveStep) {
  slideIndex =
    (slideIndex + moveStep + slides.data.length) % slides.data.length;
  showSlide(slideIndex);
}

function showSlide(n) {
  const slidesList = document.getElementsByClassName("slide");

  if (n < 1) {
    slideIndex = slidesList.length;
  } else if (n > slidesList.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < slidesList.length; i++) {
    slidesList[i].classList.add("hidden");
  }

  slidesList[slideIndex - 1].classList.remove("hidden");
}

function handleNextClick() {
  moveSlide(1);

  if (slideIndex >= 2) {
    closeCounter.value = 1;
  }
}
</script>

<!-- <a<div class="hidden md:hidden lg:flex lg:items-center lg:justify-center">
          <button
            v-if="closeCounter.value >= 1"
            @click="closeModel"
            class="rounded-md bg-[#34559D] px-4 py-2 text-center text-white md:px-6 md:py-3 lg:text-lg"
          >
            關閉
          </button>
        </div>
            class="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-black/30 p-4 text-white hover:bg-black/50 hover:text-amber-500"
            @click="() => moveSlide(-1)"
            >❮</a
          > -->

