<!-- <script setup>
import { datas } from "../utils.js";
</script>
<template>
  <div id="otherprecautions" class="flex justify-center pt-12">
    <span
      class="rounded-t-md bg-[#34559D] px-3 py-2 text-white shadow-md md:px-4 md:py-1 md:text-xl lg:px-6 lg:py-2 lg:text-2xl"
    >
      新生始業輔導
    </span>
  </div>
  <div class="flex items-center justify-center">
    <div
      class="rounded-xl border-2 border-[#34559D] bg-white px-4 py-2 md:py-10 lg:px-4 lg:py-12"
    >
      <div
        class="grid grid-cols-1 gap-x-14 gap-y-3 sm:grid-cols-2 lg:px-24 xl:grid-cols-3"
      >
        <Other
          v-for="(data, index) in datas.notice"
          :href="data.link"
          :content_line1="data.title.slice(0, data.splitNumber)"
          :content_line2="data.title.slice(data.splitNumber)"
          :class="{
            'justify-self-end ': index % 2 === 0,
          }"
        />
      </div>
    </div>
  </div>
</template> -->
<script setup>
import { datas } from "../utils.js";
</script>
<template>
  <div class="flex items-center justify-center p-6">
    <div class="card">
      <div class="header">新生始業輔導</div>
      <div class="body">
        <ul
          class="skill pl-6"
          v-for="data in datas.help"
          :content="data.title"
          :href="data.link"
        >
          <li class="skill-name list-disc">{{ content }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 300px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.header {
  background-color: #34559d;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 18px;
}

.body {
  padding: 20px;
}

.skill {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.skill-name {
  width: 120px;
  font-size: 16px;
}
</style>
