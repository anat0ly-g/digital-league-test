import { canvasOperations } from '../logic/canvas/operations';
import * as canvasUtils from '../logic/canvas/utils';
import { useCanvasStore } from '../store/canvasStore';

export function useCanvasEvents() {
    const canvasStore = useCanvasStore();
    let isDrawing: boolean = false;

    function getCanvasCoords(event: MouseEvent) {
        if (!canvasStore.canvasRef) return { x: 0, y: 0 };

        return canvasUtils.getCanvasCoords(canvasStore.canvasRef, event.clientX, event.clientY);
    }

    function onStart(event: MouseEvent) {
        if (event.button !== 0) return;

        if (!canvasStore.canvasContext) return;

        event.preventDefault();
        isDrawing = true;

        const { x, y } = getCanvasCoords(event);
        canvasOperations[canvasStore.mode].start(canvasStore.canvasContext, x, y);
    }

    function onMove(event: MouseEvent) {
        if (!isDrawing) return;

        if (!canvasStore.canvasContext) return;

        event.preventDefault();

        const { x, y } = getCanvasCoords(event);
        canvasOperations[canvasStore.mode].move(canvasStore.canvasContext, x, y);
    }

    function onEnd() {
        if (!isDrawing) return;

        if (!canvasStore.canvasContext) return;

        canvasOperations[canvasStore.mode].end(canvasStore.canvasContext);
        isDrawing = false;
    }

    return { onStart, onMove, onEnd };
}
