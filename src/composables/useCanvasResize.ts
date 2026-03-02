import { onMounted, onUnmounted } from 'vue';
import * as canvasUtils from '../logic/canvas/utils';
import { useCanvasStore } from '../store/canvasStore';

export function useCanvasResize() {
    const canvasStore = useCanvasStore();

    function handleResize() {
        if (!canvasStore.canvasRef) return;

        canvasStore.clearHistory();
        canvasUtils.resizeCanvas(canvasStore.canvasRef);
        canvasStore.initHistory();
    }

    onMounted(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
}
