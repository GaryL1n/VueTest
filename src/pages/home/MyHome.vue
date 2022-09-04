<script setup>
import { useCssModule, ref, onMounted } from 'vue';
import NavBarVue from '../../components/NavBar.vue';
import { gsap } from 'gsap';

const styles = useCssModule();

const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);

onMounted(() => {
    gsap.from(box1.value, {
        opacity: 0,
        x: -800,
        duration: 1.5,
        delay: 0,
        // ease: 'expo',
        ease: 'circ',
    });
    gsap.from(box2.value, {
        opacity: 0,
        x: -800,
        duration: 1.5,
        delay: 0.5,
        // ease: 'expo',
        ease: 'circ',
    });
    gsap.from(box3.value, {
        opacity: 0,
        x: -800,
        duration: 1.5,
        delay: 1,
        // ease: 'expo',
        ease: 'circ',
    });
});
</script>

<template>
    <NavBarVue></NavBarVue>
    <div :class="styles.flex" ref="box1">
        <pre>
            .box {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </pre>
        <div></div>
    </div>
    <div :class="styles.transform" ref="box2">
        <pre>
            .box {
                position: relative;
                div {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        </pre>
        <div></div>
    </div>
    <div :class="styles.margin" ref="box3">
        <pre>
            .box {
                display: flex;
                div {
                    margin: auto;
                }
            }
        </pre>
        <div></div>
    </div>
</template>

<style module lang="scss" scoped>
.flex {
    color: rgb(0, 26, 255);
    background-color: rgb(213, 143, 253);
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    pre {
        position: absolute;
        left: 0;
    }
    div {
        background-color: pink;
        height: 80px;
        aspect-ratio: 1/1;
    }
}
.transform {
    color: #fff;
    background-color: black;
    width: 100%;
    height: 160px;
    position: relative;
    div {
        background-color: #fff;
        height: 80px;
        aspect-ratio: 1/1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
.margin {
    background-color: pink;
    width: 100%;
    height: 160px;
    display: flex;
    position: relative;
    pre {
        position: absolute;
    }
    div {
        background-color: blue;
        height: 80px;
        aspect-ratio: 1/1;
        margin: auto;
    }
}
</style>
