import { clear } from '../logic/canvas/operations/clear';
import { useCanvasStore } from '../store/canvasStore';

export function useCanvasActions() {
    const canvasStore = useCanvasStore();

    function clearCanvas() {
        if (!canvasStore.canvasRef) return;

        if (!canvasStore.canvasContext) return;

        clear(canvasStore.canvasContext, canvasStore.canvasRef.width, canvasStore.canvasRef.height);
    }

    return { clearCanvas };
}
