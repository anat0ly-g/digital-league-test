import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { CanvasOperations } from '../types/canvasTypes';

export const useCanvasStore = defineStore('canvasStore', () => {
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    const canvasContext = computed(() => {
        return canvasRef.value?.getContext('2d', { willReadFrequently: true }) || null;
    });

    // Режим рисования (кисть/ластик)
    const mode = ref<CanvasOperations>('draw');

    function setMode(newMode: CanvasOperations) {
        mode.value = newMode;
    }

    // История изменений холста
    const history = ref<ImageData[]>([]);
    const historyStep = ref(-1);
    const MAX_HISTORY_SIZE = 20;

    const canUndo = computed(() => historyStep.value > 0);
    const canRedo = computed(() => historyStep.value < history.value.length - 1);

    function saveHistoryState() {
        if (!canvasRef.value || !canvasContext.value) return;

        if (historyStep.value < history.value.length - 1) {
            history.value = history.value.slice(0, historyStep.value + 1);
        }

        const imageData = canvasContext.value.getImageData(
            0,
            0,
            canvasRef.value.width,
            canvasRef.value.height,
        );
        history.value.push(imageData);
        historyStep.value++;

        if (history.value.length > MAX_HISTORY_SIZE) {
            history.value.shift();
            historyStep.value--;
        }
    }

    function restoreHistoryState() {
        if (!canvasRef.value || !canvasContext.value) return;

        const imageData = history.value[historyStep.value];

        if (imageData) canvasContext.value.putImageData(imageData, 0, 0);
    }

    function undo() {
        if (canUndo.value) {
            historyStep.value--;
            restoreHistoryState();
        }
    }

    function redo() {
        if (canRedo.value) {
            historyStep.value++;
            restoreHistoryState();
        }
    }

    function clearHistory() {
        history.value = [];
        historyStep.value = -1;
    }

    function initHistory() {
        if (!canvasRef.value || !canvasContext.value) return;

        const imageData = canvasContext.value.getImageData(
            0,
            0,
            canvasRef.value.width,
            canvasRef.value.height,
        );
        history.value = [imageData];
        historyStep.value = 0;
    }

    return {
        mode,
        setMode,
        canvasRef,
        canvasContext,
        saveHistoryState,
        clearHistory,
        initHistory,
        undo,
        redo,
        canUndo,
        canRedo,
    };
});
