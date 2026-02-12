<script setup lang="ts">
import { ref } from 'vue';
import { useCanvasAction } from '../composables/useCanvasAction';

const canvas = ref<HTMLCanvasElement | null>(null);
const { startAction, action, stopAction } = useCanvasAction(canvas);
</script>

<template>
    <canvas
        id="canvas"
        ref="canvas"
        @mousedown="startAction"
        @mousemove="action"
        @mouseup="stopAction"
        @mouseleave="stopAction"
    ></canvas>
</template>

<style scoped>
#canvas {
    display: block;
    width: 100vw;
    height: 100vh;
    cursor: crosshair;
    user-select: none;
}
</style>
