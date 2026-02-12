import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { CanvasOperations } from '../composables/useCanvasAction';

export const useModeStore = defineStore('modeStore', () => {
    const mode = ref<CanvasOperations>('draw');

    function setMode(newMode: CanvasOperations) {
        mode.value = newMode;
    }

    return { mode, setMode };
});
