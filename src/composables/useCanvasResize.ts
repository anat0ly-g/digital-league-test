import { onMounted, onUnmounted } from 'vue';
import * as canvasUtils from '../logic/canvas/utils';
import { useCanvasStore } from '../store/canvasStore';

export function useCanvasResize() {
    const canvasStore = useCanvasStore();

    function handleResize() {
        if (!canvasStore.canvasRef) return;

        canvasUtils.resizeCanvas(canvasStore.canvasRef);
    }

    onMounted(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
}
