<script setup lang="ts">
import { useModeStore } from '../store/modeStore';
import Button from './UI/Button.vue';

const modeStore = useModeStore();
</script>

<template>
    <div class="toolbar">
        <Button @click="modeStore.setMode('draw')" :class="{ active: modeStore.mode == 'draw' }"
            >Кисть</Button
        >
        <Button @click="modeStore.setMode('erase')" :class="{ active: modeStore.mode == 'erase' }"
            >Ластик</Button
        >
    </div>
</template>

<style scoped>
.toolbar {
    position: fixed;
    bottom: 10px;
    left: 50%;
    translate: -50% 0;
    display: flex;
    column-gap: 10px;
    padding: 10px 20px;
    border: 2px solid darkblue;
    border-radius: 5px;
}

.active {
    background-color: lightblue;
}
</style>
