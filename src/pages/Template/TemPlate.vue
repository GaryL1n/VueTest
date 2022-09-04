<script setup>
import { reactive, ref, watch, useCssModule } from 'vue';
import NavBarVue from '../../components/NavBar.vue';

const styles = useCssModule();

const data = reactive({
    time: '',
    timeButton: 'Close Time',
});

const doRun = () => {
    data.time = new Date() + '';
    setTimeout(doRun, 1000);
};
doRun();

const showMessage = ref(true);

// 若要深層監聽 在第三個參數放入{deep:true}
watch(showMessage, () => {
    if (showMessage.value === true) {
        data.timeButton = 'Close Time';
    } else {
        data.timeButton = 'Show Time';
    }
});
</script>

<template>
    <NavBarVue></NavBarVue>
    <div :class="styles.flex">
        <div>
            <h1>reactive / ref / watch / v-if</h1>
            <button
                @:click="
                    () => {
                        showMessage = !showMessage;
                    }
                "
            >
                {{ data.timeButton }}
            </button>
            <p v-if="showMessage">{{ data.time.slice(11, 25) }}</p>
        </div>
        <img src="../../../public/imgs/messageImage_1662294934239.jpg" alt="" />
    </div>
</template>

<style module lang="scss" scoped>
.flex {
    display: flex;
    justify-content: space-around;
    button {
        font-size: 1.2rem;
    }
    p {
        font-size: 1.5rem;
    }
}
</style>
