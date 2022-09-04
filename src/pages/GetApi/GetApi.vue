<script setup>
import { reactive, onMounted } from 'vue';
import NavBarVue from '../../components/NavBar.vue';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line no-unused-vars
const data = reactive({
    time: '',
    City: '',
    weatherArray: [],
});

const doRun = () => {
    data.time = new Date() + '';
    setTimeout(doRun, 1000);
};
doRun();

const now = new Date();

onMounted(() => {
    axios
        .get(
            `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-219477FA-2259-4E67-97BB-9BB03B1E394D&locationName=%E8%87%BA%E5%8C%97%E5%B8%82&timeFrom=${now}`
        )
        .then((result) => {
            console.log(result.data.records.location[0].locationName);
            data.City = result.data.records.location[0].locationName;
            console.log(result.data.records.location[0].weatherElement);
            data.weatherArray = result.data.records.location[0].weatherElement;
        });
});
</script>

<template>
    <NavBarVue></NavBarVue>
    <div class="box">
        <h1>Time : {{ data.time.slice(11, 25) }}</h1>
        <h2>{{ data.City }} 天氣 / 濕度 / 最低溫 / 體感 / 最高溫</h2>
        <h2 v-for="v of data.weatherArray" :key="uuidv4()">{{ v.time[0].parameter.parameterName }}</h2>
    </div>
</template>

<style scoped>
body {
    position: relative;
}
.box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
h1 {
    color: red;
}
</style>
