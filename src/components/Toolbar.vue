<script setup lang="ts">
import { useCanvasStore } from '../store/canvasStore';
import Button from './UI/Button.vue';

const canvasStore = useCanvasStore();
</script>

<template>
    <div class="toolbar">
        <Button @click="canvasStore.setMode('draw')" :class="{ active: canvasStore.mode == 'draw' }"
            >Кисть</Button
        >
        <Button
            @click="canvasStore.setMode('erase')"
            :class="{ active: canvasStore.mode == 'erase' }"
            >Ластик</Button
        >
        <Button @click="canvasStore.clearCanvas">Очистить</Button>
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
