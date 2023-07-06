import axios from "axios";
import { reactive, ref } from "vue";

/*
const requests = axios.create({
  baseURL: "https://d649-203-72-59-88.ngrok-free.app",
});
*/

export const datas = reactive({
  ready: false,
});

export const data_arrive_model_control = reactive({
  is_open: true,
});

export const req = async () => {
  const response = await axios.get("https://freshman.fhsh.tp.edu.tw/api/items");
  response.data.items.map((item) => {
    if (!datas[item.category]) {
      datas[item.category] = [];
    }
    datas[item.category].push(item);
  });
  data_arrive_model_control.is_open = false;
  datas.ready = true;
};
