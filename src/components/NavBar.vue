<script setup>
import { useCssModule } from 'vue';
import { RouterLink } from 'vue-router';

const styles = useCssModule();
</script>

<template>
    <div :class="styles.navbar">
        <router-link to="/">
            <span>useCssModule / GSAP</span>
        </router-link>
        <router-link to="/template">
            <span>reactive / ref / watch / v-if</span>
        </router-link>
        <router-link to="/getapi">
            <span>onMounted / axios / uuid</span>
        </router-link>
    </div>
</template>

<style module lang="scss" scoped>
.navbar {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    a {
        color: black;
        flex-grow: 1;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>
