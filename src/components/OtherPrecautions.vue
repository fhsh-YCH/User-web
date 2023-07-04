<script setup>
import Other from "../componentss/Other.vue";
const temp_datas = [
  {
    content: "語文競賽增額報名(教學組)",
    href: "#",
    splitNumber: 8,
  },
  {
    content: "學科增能(實研組)",
    href: "#",
    splitNumber: 4,
  },
  {
    content: "彈性學習說明(實研組)",
    href: "#",
    splitNumber: 6,
  },
  {
    content: "跑班課程說明(實研組)",
    href: "#",
    splitNumber: 6,
  },
  {
    content: "臺英學士培育計畫(實研組)",
    href: "#",
    splitNumber: 8,
  },
  {
    content: "圖書館介紹(圖書館)",
    href: "#",
    splitNumber: 5,
  },
  {
    content: "圖書館推廣活動(圖書館)",
    href: "#",
    splitNumber: 7,
  },
  {
    content: "自主學習規範(圖書館)",
    href: "#",
    splitNumber: 6,
  },
  {
    content: "志工、工讀生招募(圖書館)",
    href: "#",
    splitNumber: 8,
  },
  {
    content: "合作社介紹(合作社)",
    href: "#",
    splitNumber: 5,
  },
  {
    content: "社團一覽表(訓育組)",
    href: "#",
    splitNumber: 5,
  },
  {
    content: "獎學金(註冊組)就學扶助(生輔組)",
    href: "#",
    splitNumber: 8,
  },
  {
    content: "111學生家長手冊(生輔組)",
    href: "#",
    splitNumber: 9,
  },
  {
    content: "學習評量相關規定(註冊組)",
    href: "#",
    splitNumber: 8,
  },
  {
    content: "輔導室介紹(輔導室)",
    href: "#",
    splitNumber: 5,
  },
  {
    content: "學生學習歷程檔案(輔導室)",
    href: "#",
    splitNumber: 8,
  },
  {
    content: "教室位置平面圖(設備組)",
    href: "#",
    splitNumber: 7,
  },
  {
    content: "本校交通圖、接駁車(生輔組)",
    href: "#",
    splitNumber: 9,
  },
];
</script>
<template>
  <div id="otherprecautions" class="flex justify-center pt-12">
    <span
      class="bg-[#34559D] px-3 py-2 md:text-xl md:px-4 md:py-1 lg:px-6 lg:py-2 lg:text-2xl text-white rounded-t-md shadow-md"
    >
      其他注意事項
    </span>
  </div>
  <div class="flex justify-center items-center">
    <div
      class="bg-white border-2 border-[#34559D] py-2 px-2 md:py-10 lg:px-4 lg:py-12 rounded-xl"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 px-24 gap-x-14 gap-y-3"
      >
        <Other
          v-for="(data, index) in temp_datas"
          :href="data.href"
          :content_line1="data.content.slice(0, data.splitNumber)"
          :content_line2="data.content.slice(data.splitNumber)"
          :class="{
            'justify-self-end ': index % 2 === 0,
          }"
        />
      </div>
    </div>
  </div>
</template>
