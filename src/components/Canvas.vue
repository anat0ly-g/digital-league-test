<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCanvasEvents } from '../composables/useCanvasEvents';
import { useCanvasResize } from '../composables/useCanvasResize';
import { useCanvasStore } from '../store/canvasStore';

const { canvasRef } = storeToRefs(useCanvasStore());
const { onStart, onMove, onEnd } = useCanvasEvents();

useCanvasResize();
</script>

<template>
    <canvas
        id="canvas"
        ref="canvasRef"
        @mousedown="onStart"
        @mousemove="onMove"
        @mouseup="onEnd"
        @mouseleave="onEnd"
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
