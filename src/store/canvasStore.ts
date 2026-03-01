import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { CanvasOperations } from '../types/canvasTypes';

export const useCanvasStore = defineStore('canvasStore', () => {
    const mode = ref<CanvasOperations>('draw');
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    const canvasContext = computed(() => {
        return canvasRef.value?.getContext('2d') || null;
    });

    function setMode(newMode: CanvasOperations) {
        mode.value = newMode;
    }

    return { mode, setMode, canvasRef, canvasContext };
});
