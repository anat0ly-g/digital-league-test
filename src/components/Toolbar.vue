<script setup lang="ts">
import { useCanvasActions } from '../composables/useCanvasActions';
import { useCanvasStore } from '../store/canvasStore';
import Button from './UI/Button.vue';
import FileInput from './UI/FileInput.vue';

const canvasStore = useCanvasStore();
const { clearCanvas, loadImage, saveCanvasAsPNG } = useCanvasActions();

function handleFileInput(event: Event) {
    const input = event.target;

    if (!(input instanceof HTMLInputElement)) return;

    const file = input.files?.[0];

    if (file) {
        loadImage(file);
        input.value = '';
    }
}
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
        |
        <Button @click="clearCanvas">Очистить</Button>
        <FileInput accept="image/*" @change="handleFileInput">Загрузить изображение</FileInput>
        <Button @click="saveCanvasAsPNG">Сохранить как PNG</Button>
    </div>
</template>

<style scoped>
.toolbar {
    position: fixed;
    bottom: 10px;
    left: 50%;
    translate: -50% 0;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 10px 20px;
    border: 2px solid darkblue;
    border-radius: 5px;
    background-color: white;
}

.active {
    background-color: lightblue;
}
</style>
