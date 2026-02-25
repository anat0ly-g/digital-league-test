import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CanvasOperations } from '../composables/useCanvasAction';
import { clear } from '../logic/canvas/clear';

export const useCanvasStore = defineStore('modeStore', () => {
    const mode = ref<CanvasOperations>('draw');
    const canvas = ref<HTMLCanvasElement | null>(null);

    function setMode(newMode: CanvasOperations) {
        mode.value = newMode;
    }

    function clearCanvas() {
        if (!canvas.value) return;

        const ctx = canvas.value.getContext('2d');

        if (!ctx) return;

        clear(ctx, canvas.value.width, canvas.value.height);
    }

    return { mode, setMode, canvas, clearCanvas };
});
